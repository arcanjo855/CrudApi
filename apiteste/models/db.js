const Sequelize  = require('sequelize')


    // conexão com o banco de dados Mysql 

    const sequelize = new Sequelize('postapp', 'root', 'Rafael@123', {
        host: "localhost",
        dialect: 'mysql'
    })


module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}