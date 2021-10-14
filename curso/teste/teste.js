const Sequelize = require ('sequelize')
const sequelize = new Sequelize('teste', 'root', 'Rafael@123', {
    host: 'localhost',
    dialect: 'mysql'
})

const Postagem = sequelize.define('postagens', {
    titulo: {
        type: Sequelize.STRING
    },
    conteudo: {
        type: Sequelize.TEXT
    }
})

/*  Modifica a tabela criada
Postagem.create({
    titulo: "Um titulo qualquer",
    conteudo: "KDSAJHFKSDJHFKSDHFKDSJ"
})
*/

 // Postagem.sync({force: true}) cria a tabelano mysql

 const Usuarios = sequelize.define('usuarios',{
     nome: {
         type: Sequelize.STRING
     },
     email: {
         type: Sequelize.STRING
     },
     idade: {
         type: Sequelize.INTEGER
     }
 })

 // Usuarios.sync({force: true}) cria a tabelano mysql

 /* Modifica os dados na tabela usuarios
 Usuarios.create({
     nome: "Rafael",
     email: "Rafaelaecanjo@gmail.com",
     idade: 20
 })
 */