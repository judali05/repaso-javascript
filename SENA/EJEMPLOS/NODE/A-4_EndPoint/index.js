var express = require('express');
var app = express();

app.get("/usuarios", function(req, res){
    res.send("usted esta haciendo una busqueda");
});

app.post("/usuarios", function(req, res){
    res.send("usted esta insertando un registro");
});

app.put("/usuarios", function(req, res){
    res.send("usted esta actualizando un registro");
});

app.delete("/usuarios", function(req, res){
    res.send("usted esta eliminado un registro");
});

app.listen(8080, function(){
    console.log("aplicacion ejemplo, escuchando el puerto 8080");
});

//se puede conectar a otro computadro con la ip de el computador por ejemplo http://10.175.81.244:3000
