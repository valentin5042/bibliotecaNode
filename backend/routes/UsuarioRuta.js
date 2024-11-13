import express from 'express';
import usuarioController from '../controller/UsuarioControlador.js';



const router = express.Router();



router.post('/login', usuarioController.autenticarUsuario);



export default router;