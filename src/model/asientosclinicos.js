//importaciones
import { DataTypes } from 'sequelize';

import { sequelize } from '../database/database.js';

// estructura de la tabla 

export const AsientosClinicos = sequelize.define('asientosclinicos',
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
AsientosClinicos.belongsTo(HistoriasClinicas, {
    foreignKey: 'asientoclinicoId',
    source: 'id'
    });

    //En HistoriasClinicas Habrá asientoclinicoID
    HistoriasClinicas.hasOne(AsientosClinicos, {
        foreignKey: 'asientoclinicoId',
        target: 'id'
    });

    AsientosClinicos.belongsToMany(Pacientes, {
        foreignKey: 'asientoclinicoId',
        source: 'id'
        });
     //En Pacientes Habrá asientoclinicoID   
    Pacientes.belongsToMany(AsientosClinicos, {
        foreignKey: 'asientoclinicoId',
        target: 'id'
        });