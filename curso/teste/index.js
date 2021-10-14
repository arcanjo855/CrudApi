const express = require('express');
const app = express();
const handlebars = require('express-handlebars')

// config   
    // template engine
        app.engine('handlebars', handlebars({defaultLayout: 'main'}))
        app.set('view engine', 'handlebars')








app.listen(8081, function(){
    console.log("O servidor está on")
});

