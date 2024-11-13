import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';


const Fourmulario = () => {
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ error, setError ] = useState('')
    const navigate = useNavigate();


    const validacion = async () => {
        try {
            setError('');

            const response = await axios.post('http://192.168.0.20:5000/login', {
                email,
                password
            });
    
            if ( response.status === 200 ) {
                const { id, name, email } = response.data.user;
    
                //Guardar en el local storage
                localStorage.setItem('idUsuario', id);
                localStorage.setItem('nombrerUsuario', name);
                localStorage.setItem('emailUsuario', email);
    
                navigate('/biblioteca');
            }
        } catch (error) {
            if (error.response) {
                if (error.response.status === 401){
                    setError('Correo o contraseña incorrectos');
                } else {
                    setError('Error en el servidor');
                }
            } else {
                setError('No se pudo conectar al servidor')
            }
        }


    };



    return(
        <div className="flex flex-col h-screen items-center justify-center">
        <h1 className="text-4xl font-bold mb-20">Inicio de Sesión</h1>
        <input 
            type="text" 
            placeholder="Ingresa tu Correo" 
            onChange={(e) => setEmail(e.target.value)}
            className="h-13 bg-gray-200 rounded-md mb-4 w-3/12 p-2"
        />
        <input 
            type="password" 
            placeholder="Ingresa tu Contraseña" 
            onChange={(e) => setPassword(e.target.value)}
            className="h-13 bg-gray-200 rounded-md mb-4 w-3/12 p-2"
        />

        { error && (
            <div className="text-red-500 mb-3">
                {error}
            </div>
        ) }

        <button 
            onClick={validacion}
            className="bg-green-600 hover:bg-green-800 text-white p-3 rounded-md w-3/12"
        >Iniciar Sesión</button>
    </div>
    )
}

export default Fourmulario;