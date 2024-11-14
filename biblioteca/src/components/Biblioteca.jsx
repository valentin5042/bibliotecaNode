import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Biblioteca() {
    const [nombre, setNombre] = useState('');
    const [libros, setLibros] = useState([]);
    const [error, setError] = useState('');

    // Función para obtener el nombre de usuario desde el localStorage
    const obtenerNombreUsuario = () => {
        const nombreUsuario = localStorage.getItem('nombreUsuario');
        setNombre(nombreUsuario);
    };

    // Función para obtener los libros del usuario
    const obtenerLibros = async (usuarioId) => {
        try {
            const response = await axios.get('http://192.168.0.20:5000/libros', {
                params: { usuario_id: usuarioId }
            });

            // Si la respuesta tiene libros, procesarlos
            if (response.data.length > 0) {
                setLibros(response.data);
            } else {
                setError('No se encontraron libros para este usuario');
            }
        } catch (err) {
            console.error('Error al obtener los libros:', err);
            setError('No se pudieron obtener los libros');
        }
    };

    useEffect(() => {
        obtenerNombreUsuario();
        const usuarioId = localStorage.getItem('idUsuario');  // Cambié 'usuarioId' por 'idUsuario'

        if (usuarioId) {
            obtenerLibros(usuarioId);
        } else {
            setError('ID de usuario no encontrado');
        }
    }, []); // Solo se ejecuta una vez al montar el componente

    const handleLogout = () => {
        localStorage.removeItem('nombreUsuario');
        localStorage.removeItem('token');
        localStorage.removeItem('idUsuario');  // Cambié 'usuarioId' por 'idUsuario'
    };

    return (
        <div className='flex flex-col items-center justify-center h-screen'>
            <h1 className='text-4xl font-bold mb-10'>Bienvenido, {nombre}</h1>

            {error && <p className="text-red-500">{error}</p>} {/* Mostrar el mensaje de error si existe */}

            <div className="mb-20">
                <h2 className="text-3xl text-green-900 text-center mb-20">Mis Libros</h2>
                {libros.length === 0 ? (
                    <p>No tienes libros en tu biblioteca.</p>
                ) : (
                    <div className='flex items-center justify-center flex-wrap gap-4'>
                        {libros.map((libro, index) => (
                            <div key={libro.id || index} className=" p-4 bg-white shadow-lg rounded-lg">
                                <div className="p-4">
                                    <h3 className="text-xl font-bold mb-2">{libro.libro}</h3>
                                    <p><strong>Autor:</strong> {libro.autor}</p>
                                    <p><strong>Editorial:</strong> {libro.editorial}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>



            <Link 
                className='py-3 bg-red-700 hover:bg-red-800 text-white w-3/12 text-center rounded-md' 
                to='/'
                onClick={handleLogout}
            >
                Volver a inicio
            </Link>
        </div>
    );
}

export default Biblioteca;
