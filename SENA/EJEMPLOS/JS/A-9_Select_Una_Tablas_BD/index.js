//instalar la libreria de mysql de node para que funciones
var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "mydb"
});

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    con.query("SELECT name, address FROM customers", function(err, result, fields) {
        if (err) throw err;
        console.log("selected:");
        console.log(result);
        con.end(); 
    });
});

