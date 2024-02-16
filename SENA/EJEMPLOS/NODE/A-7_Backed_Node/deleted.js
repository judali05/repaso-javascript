var mysql = require('mysql');
var express = require('express');
var app = express();

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "black_45"
});

app.delete('/usuarios/borrar/:documento', (req, res)=>{
    const {documento}=req.params;
    const query =`DELETE FROM usuarios WHERE documento = ${documento}`
    con.query(query, (error)=>{
        if(error) return console.log(error.message);

        res.json('Se elimino correctamente el producto');
    });
});


app.listen(8080, function(){
    console.log("Servidor Activo");
});