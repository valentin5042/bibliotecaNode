import db from '../Config/ConfigDB.js';

const libroModel = {
    obtenerLibrosPorUsuario: async (usuarioId) => {
        try {
            const [results] = await db.promise().query(
                'SELECT autor, editorial, libro FROM libros WHERE usuario_id = ?',
                [usuarioId]
            );
            return results;
        } catch (error) {
            throw new Error('Error al obtener los libros: ' + error.message);
        }
    }
};

export default libroModel;
