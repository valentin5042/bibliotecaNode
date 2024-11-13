import usuarioModel from '../models/ModeloInicio.js';


const usuarioControlller = {
    autenticarUsuario: async (req, res) => {
        const { email , password } = req.body;
        try {
            const usuario = await usuarioModel.obtenerUsuarioPorCorreo(email);

            if( usuario && usuario.password === password) {
                res.status(200).json({
                    mensaje: 'Inicio de sesión exitoso',
                    user: {
                        id: usuario.id,
                        name: usuario.name,
                        email: usuario.email,
                        password: usuario.password
                    }
                });
            } else {
                res.status(401).json({ mensaje: 'Correo o contraseña incorrectos' })
            }

        } catch (error) {
            res.status(500).json({ mensaje: 'Error en el servidor'})
        }
    }
}

export default usuarioControlller;