const fs = require("fs");
const path = require("path");
const Sequelize = require('sequelize');

module.exports = (database, username, password, host, port, verbose) => {

    const sequelize = new Sequelize(database, username, password, {
        host,
        port,
        dialect: 'mysql',
        define: {
            timestamps: false
        },
        pool: {
            max: 5,
            min: 0,
            idle: 10000
        },
        logging: verbose ? console.log : false
    });
    
    const models = {};

    fs.readdirSync(path.join(__dirname, 'models'))
        .filter(function(file) {
            return file.endsWith(".js");
        })
        .forEach(function(file) {
            const model = sequelize.import(path.join(__dirname, 'models', file));
            models[model.name] = model;
        });

    return {
        models,
        sequelize,
        Sequelize
    };
};