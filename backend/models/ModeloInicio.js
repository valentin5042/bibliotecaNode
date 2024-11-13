import db from '../config/ConfigDB.js';


const usuarioModel = {
    obtenerUsuarioPorCorreo: async (email) => {
        try {
            const [results] = await db.promise().query('SELECT id, name, password FROM usuario WHERE email = ?', [email])
            return results.length > 0 ? results[0] : null
        } catch (error) {
            throw new error ('Error al obtener el usuario por correo' + error.message);
        }
    }
        
};


export default usuarioModel;
