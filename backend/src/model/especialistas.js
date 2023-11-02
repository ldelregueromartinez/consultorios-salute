//importaciones
import { DataTypes } from 'sequelize';

import { sequelize } from '../database/database.js';

import { Pacientes } from './pacientes.js';

import { Asientos } from './asientos.js';

import { Consultorios } from './consultorios.js';

import { HistoriasClinicas } from './historiasclinicas.js';

// estructura de la tabla 

export const Especialistas = sequelize.define('especialistas',
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
        type: DataTypes.DATE
    },
    matricula: {
        type: DataTypes.STRING
    },
    especialidad: {
        type: DataTypes.STRING
    },
    fechaIngreso: {
        type: DataTypes.DATEONLY
    },
    fechaEgreso: {
        type: DataTypes.DATEONLY
    },
    consultorioId: {
        type: DataTypes.INTEGER,
        references: {
            model:'consultorios',
              key: 'id'
             },
             foreingKey: true   
    }
    
},
{
    timestamps: true,
}

);


