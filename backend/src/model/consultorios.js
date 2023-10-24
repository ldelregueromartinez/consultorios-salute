//importaciones
import { DataTypes } from 'sequelize';
import { sequelize } from '../database/database.js';
import { Especialistas } from './especialistas.js';
import { Pacientes } from './pacientes.js';
import { HistoriasClinicas } from './historiasclinicas.js';
import { Asientos } from './asientos.js';


// estructura de la tabla 

export const Consultorios = sequelize.define('consultorios',
{
    id: {
        type: DataTypes.INTEGER, 
        primaryKey: true,
        autoIncrement: true
    },
    piso: {
        type: DataTypes.INTEGER
    },   
    numero: {
        type: DataTypes.INTEGER
    },   
},
{
    timestamps: false,
}

);

