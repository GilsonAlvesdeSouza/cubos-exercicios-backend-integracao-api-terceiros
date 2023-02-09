import { Request, Response } from 'express';
import qs from 'qs';
import 'dotenv/config';
import { EmpresaService } from '../services/EmpresaService';
import { getErrorMessage } from '../helpers/getErrors';

const empresaService = new EmpresaService();

export class EmpresaController {
	async index(req: Request, res: Response) {
		let dominioEmpresa = req.query.dominioEmpresa;

		if (!dominioEmpresa || dominioEmpresa === '') {
			return res
				.status(400)
				.json({ message: 'É preciso informar o dominio da empresa.' });
		}

		dominioEmpresa = dominioEmpresa?.toString().trim();

		const dataAPI = {
			api_key: process.env.KEY_API_ENRICHMENT,
			domain: dominioEmpresa
		};

		const queryApi = qs.stringify(dataAPI);
		try {
			const empresa = await empresaService.getCompanyAPI(queryApi);
			if (empresa) {
				return res.json(empresa.data);
			}
			res.status(404).json({ message: 'Empresa não encontrada.' });
		} catch (error) {
			res.status(400).json({ message: getErrorMessage(error) });
		}
	}
}
