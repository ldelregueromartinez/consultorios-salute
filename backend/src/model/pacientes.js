//importaciones
import { DataTypes } from 'sequelize';

import { sequelize } from '../database/database.js';
import { HistoriasClinicas } from './historiasclinicas.js';
import { Especialistas } from './especialistas.js';
import { Asientos } from './asientos.js';
import { Consultorios } from './consultorios.js';

// estructura de la tabla 

export const Pacientes = sequelize.define('pacientes',
{
    id: {
        type: DataTypes.INTEGER, 
        primaryKey: true,
        autoIncrement: true
    },
    nombre: {
        type: DataTypes.STRING
    },
    apellido: {
        type: DataTypes.STRING
    },
    direccion: {
        type: DataTypes.STRING
    },
    telefono: {
        type: DataTypes.STRING
    },
    dni: {
        type: DataTypes.INTEGER
    },
    fecha_nac: {
        type: DataTypes.DATEONLY
    },
    fechaIngreso: {
        type: DataTypes.DATEONLY
    },
    fechaEgreso: {
        type: DataTypes.DATEONLY
    },
    especialistaId: {
        type: DataTypes.INTEGER,
        references: {
            model:'especialistas',
              key: 'id'
             },
             foreingKey: true   
    }
    
},
{
    timestamps: true,
}

);

