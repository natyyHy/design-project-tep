import { Router } from 'express';
import {
  atualizar,
  buscar,
  criar,
  listar,
  remover,
} from '../controllers/projetosController.js';

export const projetosRoutes = Router();

projetosRoutes.get('/', listar);
projetosRoutes.get('/:id', buscar);
projetosRoutes.post('/', criar);
projetosRoutes.put('/:id', atualizar);
projetosRoutes.delete('/:id', remover);
