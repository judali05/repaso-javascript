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

app.get('/usuarios', (req, res) => {
    const query = 'SELECT * FROM usuarios';
    con.query(query, (error, resultado) => {
        if (error) {
            return console.error(error.message);
        }

        if (resultado.length > 0) {
            res.json(resultado);
        } else {
            res.json('no hay registros');
        }
    });
});

app.get('/usuarios/:id', (req, res) => {
    const { id } = req.params;
    const query = `SELECT * FROM usuarios WHERE id_usuario = ${id}`;
    con.query(query, (error, resultado) => {
        if (error) {
            return console.error(error.message);
        }

        res.json(resultado);
    });
});

app.post('/usuarios', (req, res) => {
    const { id_usuario, documento, nombre_usuario, apellido_usuario, contraseña, correo, id_estado } = req.body;
    con.query("INSERT INTO usuarios (id_usuario, documento, nombre_usuario, apellido_usuario, contraseña, correo, id_estado) VALUES (?, ?, ?, ?, ?, ?, ?)",
        [id_usuario, documento, nombre_usuario, apellido_usuario, contraseña, correo, id_estado],
        (error, resultado) => {
            if (error) {
                return console.error(error.message);
            }

            res.status(201).json({ "Item Añadido Correctamente": resultado.affectedRows });
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

app.put('/usuarios/actualizar/:documento', (req, res) => {
    const { documento } = req.params;
    const { id_usuario, nombre_usuario, apellido_usuario, contraseña, correo, id_estado } = req.body;

    const query = `UPDATE usuarios SET  id_usuario = '${id_usuario}', 
                                        nombre_usuario = '${nombre_usuario}', 
                                        apellido_usuario = '${apellido_usuario}', 
                                        contraseña = '${contraseña}', 
                                        correo = '${correo}', 
                                        id_estado = '${id_estado}' 
                                        WHERE documento = '${documento}'`;
    con.query(query, [id_usuario, nombre_usuario, apellido_usuario, contraseña, correo, id_estado, documento], (error) => {
        if (error) {
            return console.log(error.message);
        }

        res.json('Se actualizó correctamente el usuario');
    });
});

app.delete('/usuarios/borrar/:documento', (req, res) => {
    const { documento } = req.params;
    const query = `DELETE FROM usuarios WHERE documento = '${documento}'`;
    con.query(query, (error) => {
        if (error) {
            return console.log(error.message);
        }

        res.json('Se eliminó correctamente el usuario');
    });
});

app.listen(8080, function () {
    console.log("Servidor Activo");
});