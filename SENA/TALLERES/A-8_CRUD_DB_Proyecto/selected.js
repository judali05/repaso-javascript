//instalar la libreria de mysql de node para que funciones
var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "black_45"
});

//Buscar un registro en especifico
con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    var sql = "SELECT * FROM usuarios WHERE id_usuario = 3"; 
    con.query(sql, function(err, result) {
        if (err) throw err;
        console.log("selected");
        console.log(result);
        con.end(); 
    });
}); 
