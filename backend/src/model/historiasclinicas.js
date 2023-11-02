//importaciones
import { DataTypes } from 'sequelize';

import { sequelize } from '../database/database.js';
import { Especialistas } from './especialistas.js';
import { Pacientes } from './pacientes.js';
import { Asientos } from './asientos.js';
import { Consultorios } from './consultorios.js';



// estructura de la tabla 

export const HistoriasClinicas = sequelize.define('historiasclinicas',
{
    id: {
        type: DataTypes.INTEGER, 
        primaryKey: true,
        autoIncrement: true
    },
    pacienteId: {
        type: DataTypes.INTEGER,
        references: {
            model:'pacientes',
              key: 'id'
             },
             foreingKey: true   
    },
    asientoclinicoId: {
        type: DataTypes.INTEGER,
        references: {
            model:'asientos',
              key: 'id'
             },
             foreingKey: true   
    }

    
},
{
    timestamps: true,
}

);

