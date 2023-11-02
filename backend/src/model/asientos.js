//importaciones
import { DataTypes } from 'sequelize';

import { sequelize } from '../database/database.js';

import { Pacientes } from './pacientes.js';

import { Especialistas } from './especialistas.js'; 

import { Consultorios } from './consultorios.js';

import { HistoriasClinicas } from './historiasclinicas.js';

// estructura de la tabla 

export const Asientos = sequelize.define('asientos',
{
    id: {
        type: DataTypes.INTEGER, 
        primaryKey: true,
        autoIncrement: true
    },
    fecha: {
        type: DataTypes.DATEONLY
    },
    antecedentes: {
        type: DataTypes.STRING
    },
    acto_profesional: {
        type: DataTypes.STRING
    },
    otras_informaciones: {
        type: DataTypes.STRING
    },
    pacienteId: {
        type: DataTypes.INTEGER,
        references: {
            model:'pacientes',
              key: 'id'
             },
             foreingKey: true   
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