import { Router } from 'express';
import { EmpresaController } from './controllers/EmpresaController';

const router = Router();

const empresaController = new EmpresaController();

router.get('/empresas', empresaController.index);

export default router;
