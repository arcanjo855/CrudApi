var http = require('http'); // cria um servidor http com o node

http.createServer((function(req, ress){
    ress.end('Ola')
})).listen(8081);

console.log("O servidor rodando!")