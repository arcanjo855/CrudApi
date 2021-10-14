const express = require('express');
const app = express();
const handlebars = require('express-handlebars');
const Sequelize  = require('sequelize');






// config   
    // template engine
        app.engine('handlebars', handlebars({defaultLayout: 'main'}))
        app.set('view engine', 'handlebars')

    // conexão com o banco de dados Mysql 

    const sequelize = new Sequelize('teste', 'root', 'Rafael@123', {
        host: "localhost",
        dialect: 'mysql'
    })


// Rotas 
 // rotas do tipo get podem ser acessadas por url
    app.get('/cad', function(req,res){
        res.render('formulario')
    })

 // rotas do tipo post nao podem ser acessadas por url
    app.post('/add', function(req,res){
        res.send("Formulario recebido")
    })



app.listen(8081, function(){
    console.log("O servidor está on")
});

