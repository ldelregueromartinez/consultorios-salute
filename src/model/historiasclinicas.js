//importaciones
import { DataTypes } from 'sequelize';

import { sequelize } from '../database/database.js';

// estructura de la tabla 

export const HistoriasClinicas = sequelize.define('historiasclinicas',
{
    id: {
        type: DataTypes.INTEGER, 
        primaryKey: true,
        autoIncrement: true
    },

    
},
{
    timestamps: true,
}

);