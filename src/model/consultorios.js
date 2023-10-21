//importaciones
import { DataTypes } from 'sequelize';
import { sequelize } from '../database/database.js';
import { Especialistas } from './especialistas.js';


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

// Método 2 de freingKey. 
Consultorios.hasMany(Especialistas, {
foreignKey: 'consultorioId',
source: 'id'
});

Especialistas.belongsTo(Consultorios, {
    foreignKey: 'consultorioId',
    target: 'id'
});