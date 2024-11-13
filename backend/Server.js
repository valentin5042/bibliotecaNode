import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

import db from './config/ConfigDB.js';
import usuarioRoutes from './routes/UsuarioRuta.js';


const Server = express();
const port = 5000;

Server.use(bodyParser.json());

db.connect((err) => {
    if (err) {
        console.log('Error de conexión a la base de datos');
    } else {
        console.log('Conexión exitosa a la base de datos');
    }
})

Server.use(cors({ origin: '*' }));


Server.use('/', usuarioRoutes);




Server.listen(port, () => {
    console.log(`Servidor escuchado en el puerto ${port}`);
});

