const Sequelize = require ('sequelize') // conectando ao banco de dados
const sequelize = new Sequelize('teste', 'root', 'Rafael@1234', {
    host: 'localhost',
    dialect: 'mysql'
})

