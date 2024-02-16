var mysql = require('mysql');
var express = require('express');
var app = express();

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "black_45"
});

app.get('/usuarios', (req, res) => {
    const query = 'SELECT * FROM usuarios';
    con.query(query, (error, resultado) => {
        if (error){return console.error(error.message);}

        if (resultado != 0) {
            res.json(resultado);
        } else {
            res.json('no hay registros');
        }
    });
});

app.get('/usuarios/:id', (req, res) => {
    const {id} = req.params
    const query = `SELECT * FROM usuarios WHERE id_usuario = ${id};`
    con.query(query, (error, resultado) => {
        if (error){return console.error(error.message);}

        res.json(resultado);
    });
});



app.listen(8080, function(){
    console.log("Servidor Activo");
});