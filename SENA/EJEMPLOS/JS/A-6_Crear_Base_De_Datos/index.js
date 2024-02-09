//instalar la libreria de mysql de node para que funciones
var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: ""
});

con.connect(function(err) {
    if(err) throw err;
    console.log("Connected!");
    con.query("CREATE DATABASE mydb", function(err, result){
        if( err) throw err;
        console.log("Database Created");
    });
});
