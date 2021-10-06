const express = require("express"); // retorna a função que cria o expree
const { listenerCount } = require("process");
const app = express(); // recebe a funçao do express

app.get('/', function(req, res){  // cria uma rota para a aplicação
    res.sendFile(__dirname + "/html/index.html")
})

app.get('/sobre', function(req,res){
    res.sendFile(__dirname + "/html/sobre.html")
})

app.get('/tabela', function(req,res){
    res.sendFile(__dirname+"/html/tabela.html")
})
app.get('/blog', function(req,res){
    res.send("Bem-vindo ao meu blog")
})

app.get('/ola/:nome/:cargo/:cor', function(req,res){  // para criar parametros usa o sinal de :
    res.send("<h1>ola " + req.params.nome + '</h1>' +"<h2>Seu cargo é: " + req.params.cargo + '</h2>' + "<h3>A cor escolhida foi: " + req.params.cor + '</h3>'); // a função send so pode ser enviada 1 vez na funçao
})




app.listen(8081, function(){
    console.log("Servidor rodando na url localhost:8081")
}); // tem que ser a ultima linha do codigo