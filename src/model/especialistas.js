//importaciones
import { DataTypes } from 'sequelize';

import { sequelize } from '../database/database.js';

import { Pacientes } from './pacientes.js';

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
        type: DataTypes.DATEONLY
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
    }
    
},
{
    timestamps: true,
}

);

// Método 2 de freingKey. 
Especialistas.hasMany(Pacientes, {
    foreignKey: 'especialistaId',
    source: 'id'
    });
    
    Pacientes.belongsTo(Especialistas, {
        foreignKey: 'especialistaId',
        target: 'id'
    });