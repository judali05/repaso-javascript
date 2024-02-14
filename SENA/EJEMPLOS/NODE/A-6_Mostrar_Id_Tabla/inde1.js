var mysql = require('mysql');
var express = require('express');
var app = express();

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "tienda"
});

app.get('/usuarios/:nombre', (req, res) => {
    const {nombre} = req.params
    const query = `SELECT * FROM productos WHERE nombre = ${nombre};`
    con.query(query, (error, resultado)=> {
        if(error) return console.error(error.message);

        if(resultado > 0){
            res.json(resultado);
        }else{
            res.json('ho hay registros con ese ID');
        }

    });
});

app.post('/productos', (req, res) => {
    const {id, nombre, descripcion, valor, cantidad,url}=request.body;
    conexion.query("INSERT INTO productos(id, nombre, descripcion, valor, cantidad,url) VALUES(?,?,?,?,?,?)",
    [id, nombre, descripcion, valor, cantidad,url],
    (error,resultado)=>{
        if (error)
          throw error;
        express.response.status(201).json({"Item Añadido Correctamente": resultado.affectedRows});
    });
});

app.listen(8080, function(){
    console.log("Estamos activos papi!");
});
    
