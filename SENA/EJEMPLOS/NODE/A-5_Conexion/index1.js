var mysql = require('mysql');
var express = require('express');
var app = express();

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "empresa"
});

app.get('/hola', (req,res) => {
    const query = 'SELECT * FROM cargos'
    con.query(query, (error, resultado) =>{
        if(error) return console.error(error.message);
    
        if(resultado > 0){
            res.json(resultado);
            console.log(res.json(resultado));
        }else{
            res.json('no hay registros');
        }
    });
});

app.listen(8080, function(){
    console.log("aplicacion ejemplo, escuchando el puerto 8080");
});