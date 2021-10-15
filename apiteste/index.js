// instalando dependecias


const express = require('express');
const app = express();
const handlebars = require('express-handlebars');
const bodyParser = require('body-parser')
const Post = require('./models/Post')




// config   
    // template engine
        app.engine('handlebars', handlebars({defaultLayout: 'main'}))
        app.set('view engine', 'handlebars')

    // Body Parser
        app.use(bodyParser.urlencoded({extended: false}))
        app.use(bodyParser.json())    




// Rotas 
 // rotas do tipo get podem ser acessadas por url
    app.get('/', function(req,res){
        Post.findAll({order:[['id', 'DESC']]}).then(function(posts){
            res.render('home', {posts: posts})
        })
    })

    app.get('/cad', function(req,res){
        res.render('formulario')
    })

 // rotas do tipo post nao podem ser acessadas por url
    app.post('/add', function(req,res){
        Post.create({
            titulo: req.body.titulo,
            conteudo: req.body.conteudo
        }).then(function(){
            res.redirect('/')
        }).catch(function(erro){
            res.send("Erro ao criar o post" + erro)
        })
    })
 // deletando um post
    app.get('/deletar/:id', function(req,res){
        Post.destroy({where: {'id': req.params.id }}).then(function(erro){
            res.redirect('/')
        }).catch(function(erro){
            res.send("Esta postagem nao existe")
        })
    })

 // colocando o servidor online
app.listen(8081, function(){
    console.log("O servidor está on na url: localhost:8081")
});

