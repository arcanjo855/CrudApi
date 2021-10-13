const express = require("express");
const app = express();


app.get("/", function(req,res){
    res.send("seja bem-vindo a minha página sobre")
})

app.get("/sobre", function(req,res){
    res.send("minha pagina sobre")
})

app.get("/blog", function(req,res){
    res.send("meu blog")
})

app.get("/live",function(req,res){
    res.send("Live teste")
})








app.listen(8081, function(){
    console.log("O servidor está on")
});

