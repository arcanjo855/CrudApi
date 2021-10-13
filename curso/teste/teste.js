const Sequelize = require ('sequelize')
const sequelize = new Sequelize('teste', 'root', 'Rafael@1234', {
    host: 'localhost',
    dialect: 'mysql'
})

