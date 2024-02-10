//instalar la libreria de mysql de node para que funciones
var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "blacklabel"
});



//Actualizar valores de un campo en especifico
con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    var sql = "UPDATE usuarios SET nombre_usuario = 'pepeGrillo' WHERE nombre_usuario = 'julian' "; 
    con.query(sql, function(err, result) {
        if (err) throw err;
        console.log("Updated");
        console.log(result);
        con.end(); 
    });
});
