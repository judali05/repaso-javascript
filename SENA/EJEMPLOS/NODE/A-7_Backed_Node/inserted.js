var mysql = require('mysql');
var express = require('express');
var app = express();

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "black_45"
});

app.post('/usuarios', (req, res) => {
    const {id_usuario, documento, nombre_usuario, apellido_usuario, contraseña, correo, id_estado}=req.body;
    con.query("INSERT INTO usuarios (id_usuario, documento, nombre_usuario, apellido_usuario, contraseña, correo, id_estado) VALUES(?,?,?,?,?,?,?)",
    [id_usuario, documento, nombre_usuario, apellido_usuario, contraseña, correo, id_estado],
    (error,resultado)=>{
        if (error){return console.error(error.message);}

        express.res.status(201).json({"Item Añadido Correctamente": resultado.affectedRows});
    });
});
/*
{ 
"id_usuario" : 8,
"documento" : "1424254345",
"nombre_usuario" : "pepe",
"apellido_usuario" : "grillo",
"contraseña" : "hola",
"correo" : "pepe@gmail.com",
"id_estado" : 2 
}
*/

app.listen(8080, function(){
    console.log("Servidor Activo");
});
