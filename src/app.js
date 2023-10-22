// Iniciar el servidor
import express from 'express';
// utilizar, instanciarlo
const app = express();

// Importar 

import especialistasRoutes from './routes/especialistas.routes.js';
//import historiasclinicasRoutes from './routes/historiasclinicas.routes.js';
import pacientesRoutes from './routes/pacientes.routes.js';
import consultoriosRoutes from './routes/consultorios.routes.js';
//import asientosclinicos from './asientosclinicos.routes.js/';

// Midlewares
app.use(express.json());

//Rutas
app.use(especialistasRoutes);
//app.use(historiasclinicasRoutes);
app.use(pacientesRoutes);
app.use(consultoriosRoutes);
//app.use(asientosclinicos);


// exportar el servidor

export default app;

