import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Registro = () => {
    const [correo, setCorreo] = useState('');
    const [password, setPassword] = useState('');
    const [mensajeExito, setMensajeExito] = useState('');
    const [mensajeError, setMensajeError] = useState('');
    const navigate = useNavigate();

    const validarCorreo = (correo) => {
        // Lógica de validación de correo
        const regexCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regexCorreo.test(correo);
    };

    const validarPassword = (password) => {
        // Lógica de validación de contraseña
        const regexPassword = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/; // Al menos 8 caracteres, una letra y un número
        return regexPassword.test(password);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validarCorreo(correo) && validarPassword(password)) {
            setMensajeExito('Registro exitoso. Redirigiendo...');
            setMensajeError('');
            setTimeout(() => {
                navigate('/');
            }, 2000); // Redirige después de 2 segundos
        } else {
            setMensajeError('Error en el registro. Por favor, verifica tus datos.');
            setMensajeExito('');
        }
    };

    function volverInicio(){
        navigate('/');
    }

    return (
        <div className='h-screen flex flex-col items-center justify-center'>
            <div className='w-full flex flex-col items-center'>
                <h1 className='text-4xl font-bold mb-20 text-blue-800'>Registrate</h1>
                <form className='w-3/12' onSubmit={handleSubmit}>
                    <div className='flex flex-col'>
                        <label className='text-xl mb-1 text-blue-800' htmlFor="correo">
                            Ingresa tu correo:
                        </label>
                        <input
                            id="correo"
                            type="email"
                            placeholder="Correo"
                            value={correo}
                            onChange={(e) => setCorreo(e.target.value)}
                            className="h-13 bg-gray-200 rounded-md mb-4 w-full p-2"
                        />
                    </div>
                    <div className='flex flex-col'>
                        <label className='text-xl mb-1 text-blue-800'>
                            Ingresa una contraseña:
                        </label>
                        <input
                            id="password"
                            type="password"
                            placeholder="******************"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="h-13 bg-gray-200 rounded-md mb-4 w-full p-2"
                        />
                    </div>
                    {mensajeExito && <p>{mensajeExito}</p>}
                    {mensajeError && <p>{mensajeError}</p>}
                    <div className='flex justify-between'>
                        <button 
                            onClick={volverInicio}
                            className='bg-red-800 text-white py-3 rounded-md mb-6 w-5/12'
                        >Cancelar</button>
                        <button
                            type="submit"
                            className='bg-blue-800 text-white py-3 rounded-md mb-6 w-5/12'
                        >
                            Registrarse
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Registro;