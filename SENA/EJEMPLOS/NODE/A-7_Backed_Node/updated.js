var mysql = require('mysql');
var express = require('express');
var app = express();

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "black_45"
});

app.use(express.json());
/*
app.put('/usuarios/actualizar/:documento', (req, res)=>{
    const {documento}=req.params;
    const {id_usuario, nombre_usuario, apellido_usuario, contraseña, correo, id_estado}=req.body;
    
    const query = `UPDATE usuarios SET id_usuario = ?, nombre_usuario = ?, apellido_usuario = ?, contraseña = ?, correo = ?, id_estado = ? WHERE documento = ? `;
    con.query(query, [id_usuario, nombre_usuario, apellido_usuario, contraseña, correo, id_estado], (error) => {
        if(error) return console.log(error.message);

        res.json('Se actualizo correctamente el usuario');
    });
});*/

app.put('/usuarios/actualizar/:documento', (req, res)=>{
    const {documento}=req.params;
    const {id_usuario, nombre_usuario, apellido_usuario, contraseña, correo, id_estado}=req.body;
    
    const query = `UPDATE usuarios SET id_usuario = '${id_usuario}', nombre_usuario = '${nombre_usuario}', apellido_usuario = '${apellido_usuario}', contraseña = '${contraseña}', correo = '${correo}', id_estado = '${id_estado}' WHERE documento = '${documento}'`;
    con.query(query, [id_usuario, nombre_usuario, apellido_usuario, contraseña, correo, id_estado], (error) => {
        if(error) return console.log(error.message);

        res.json('Se actualizo correctamente el usuario');
    });
});


app.listen(8080, function(){
    console.log("Servidor Activo");
});