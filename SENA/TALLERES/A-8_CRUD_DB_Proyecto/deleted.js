//instalar la libreria de mysql de node para que funciones
var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "blacklabel"
});

//Eliminar registro de una tabla
//IMPORTANTE para eliminar de deben eliminar las llaves foranesa de permisos y productos para poder eliminar un registro 
con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    var sql = "DELETE FROM usuarios WHERE id_usuario = 6 "; 
    con.query(sql, function(err, result) {
        if (err) throw err;
        console.log("selected");
        console.log(result);
        con.end(); 
    });
});

