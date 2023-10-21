// Importar

import app from "./app.js";

// utilizar sequelize

import { sequelize } from "./database/database.js";

// Importar la estructura de tabla de base de datos

import './model/consultorios.js';
import './model/especialistas.js';
import './model/historiasclinicas.js';
import './model/pacientes.js';

// iniciar el servidor en el puerto 3000 y testear la conexión

async function main() {

    try{
        await sequelize.sync({force:true});
        console.log('Conexión a base de datos exitosa');
        app.listen(3000);
        console.log("Servidor en puerto 3000");
    } catch (error){
        console.error('No se pudo conectar: ', error);
    };

};

main ();





