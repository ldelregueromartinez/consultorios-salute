//importaciones
import { DataTypes } from 'sequelize';

import { sequelize } from '../database/database.js';

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
    }    
},
{
    timestamps: true,
}

);

// Método 2 de freingKey. 
Asientos.belongsTo(HistoriasClinicas, {
    foreignKey: 'asientoId',
    source: 'id'
    });

    //En HistoriasClinicas Habrá asientoclinicoID
    HistoriasClinicas.hasOne(Asientos, {
        foreignKey: 'asientoId',
        target: 'id'
    });

    Asientos.belongsToMany(Pacientes, {
        foreignKey: 'asientoId',
        source: 'id'
        });
     //En Pacientes Habrá asientoclinicoID   
    Pacientes.belongsToMany(Asientos, {
        foreignKey: 'asientoId',
        target: 'id'
        });