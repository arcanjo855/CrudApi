const express = require('express');
const app = express();
const handlebars = require('express-handlebars');
const { Sequelize } = require('sequelize');
const sequelize = require('sequelize')




// config   
    // template engine
        app.engine('handlebars', handlebars({defaultLayout: 'main'}))
        app.set('view engine', 'handlebars')

    // conexão com o banco de dados Mysql 

    sequelize = new Sequelize('teste', 'root', 'Rafael@123', {
        host: "localhost",
        dialect: 'mysql'
    })






app.listen(8081, function(){
    console.log("O servidor está on")
});

