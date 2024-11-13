import mysql from 'mysql2';



const conexion = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'biblioteca'
})

conexion.connect(( error ) => {
    if( error ) throw err;
    console.log('Conexión exitosa a la base de datos');
});

export default conexion;