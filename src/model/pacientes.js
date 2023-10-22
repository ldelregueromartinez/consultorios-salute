//importaciones
import { DataTypes } from 'sequelize';

import { sequelize } from '../database/database.js';
import { HistoriasClinicas } from './historiasclinicas.js';

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
    }
    
},
{
    timestamps: true,
}

);

// Método 2 de freingKey. 
Pacientes.belongsTo(HistoriasClinicas, {
    foreignKey: 'pacienteId',
    source: 'id'
    });
    
    HistoriasClinicas.hasOne(Pacientes, {
        foreignKey: 'pacienteId',
        target: 'id'
    });