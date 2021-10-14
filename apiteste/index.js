const express = require('express');
const app = express();
const handlebars = require('express-handlebars');
const bodyParser = require('body-parser')





// config   
    // template engine
        app.engine('handlebars', handlebars({defaultLayout: 'main'}))
        app.set('view engine', 'handlebars')

    // Body Parser
        app.use(bodyParser.urlencoded({extended: false}))
        app.use(bodyParser.json())    




// Rotas 
 // rotas do tipo get podem ser acessadas por url
    app.get('/cad', function(req,res){
        res.render('formulario')
    })

 // rotas do tipo post nao podem ser acessadas por url
    app.post('/add', function(req,res){
        res.send("Texto: " + req.body.titulo + " Conteudo: " + req.body.conteudo)
    })



app.listen(8081, function(){
    console.log("O servidor está on")
});

