// importar el módulo

import Sequelize from "sequelize"; 

// conexion con la base  https://sequelize.org/docs/v6/getting-started/#connecting-to-a-database

export const sequelize = new Sequelize("salute", "postgres", "root", {
    host: "localhost",
    dialect: "postgres",
});

