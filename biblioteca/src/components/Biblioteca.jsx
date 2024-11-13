import { Link } from 'react-router-dom';

function Biblioteca(){
    return (
        <div className='flex flex-col items-center justify-center h-screen'>
            <h1>Bienvenido, { nombre }</h1>

            { error && <p className='text-red-900 '>{ error }</p>}

            <div className='mb-20'>
                <h2 className="text-3xl text-center mb-20">Mis libros</h2>
                { libros.length === 0 ? (
                    <p>No tienes libros en tu biblioteca</p>
                ) : (
                    <div className='flex items-center justify-center flex-wrap gap-4'>
                        { libros.map((libro, index) => (
                            <div key={ libro.id || index } className='p-4 bg-white shadow-lg rounded-lg'>
                                <div className='p-4'>
                                    <h3 className='text-xl font-bold mb-2'>{ libro.titulo }</h3>
                                    <p><strong>Autor:</strong> { libro.autor }</p>
                                    <p><strong>Editorial:</strong>{ libro.editorial }</p>
                                </div>
                            </div>
                        ))}
                    </div>
                )}

            </div>

            <Link
                className="py-3 bg-red-700 hover:bg-red-800 text-white w-3/12 text-center rounded-md"
                to='/'
                onClick={ handleLogout }
            >Cerrar Sesión</Link>

        </div>
    )
}

export default Biblioteca;