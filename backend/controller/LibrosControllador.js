import libroModel from '../models/LibrosModelo.js';

const libroController = {
    obtenerLibrosDelUsuario: async (req, res) => {
        try {
            const { usuario_id } = req.query;  // Obtener el usuario_id desde los parámetros de la solicitud

            if (!usuario_id) {
                return res.status(400).json({ message: 'Usuario no autenticado o ID de usuario faltante.' });
            }
            const libros = await libroModel.obtenerLibrosPorUsuario(usuario_id);

            if (libros.length > 0) {
                res.status(200).json(libros);
            } else {
                res.status(404).json({ message: 'No se encontraron libros para este usuario.' });
            }
        } catch (error) {
            console.error('Error al obtener los libros:', error);
            res.status(500).json({ message: 'Error en el servidor al obtener los libros.' });
        }
    }
};

export default libroController;