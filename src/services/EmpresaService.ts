import { instanceAxios } from '../InstanceAxios';
import fs from 'fs/promises';
import path from 'path';

export class EmpresaService {
	async getCompanyAPI(queryApi: string) {
		let listEmpresas = [];
		const buffer = await fs.readFile(
			path.resolve(__dirname, '../empresas.json')
		);
		if (buffer.toString() !== '') {
			listEmpresas = JSON.parse(buffer.toString());
		}
		try {
			const res = await instanceAxios.get(`/?${queryApi}`);
			console.log(res.data);
			if (res.data.name) {
				listEmpresas.push(res.data);
				const file = JSON.stringify(listEmpresas);
				await fs.writeFile(path.resolve(__dirname, '../empresas.json'), file);
			}

			return res;
		} catch (error) {}
	}
}
