const express = require("express"); // retorna a função que cria o expree
const { listenerCount } = require("process");
const app = express(); // recebe a funçao do express

app.get("/", function(req, res){  // cria uma rota para a aplicação
    res.send("Seja bem-vindo ao meu app")  
})

app.get("/sobre", function(req,res){
    res.send("Minha pagina sobre")
})

app.get("/blog", function(req,res){
    res.send("Bem-vindo ao meu blog")
})




app.listen(8081, function(){
    console.log("Servidor rodando na url localhost:8081")
}); // tem que ser a ultima linha do codigo