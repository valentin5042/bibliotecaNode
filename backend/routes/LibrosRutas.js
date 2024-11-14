import express from 'express';
import libroController from '../controller/LibrosControllador.js';

const router = express.Router();

router.get('/', libroController.obtenerLibrosDelUsuario);

export default router;
