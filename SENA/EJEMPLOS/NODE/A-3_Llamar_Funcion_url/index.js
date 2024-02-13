var express = require('express');
var app = express();

app.get("/Mensaje", function(req, res){
    res.send("Hola Mundo");
});

app.listen(3000,function(){
    console.log("aplicacion ejemplo, escuchando el puerto 3000");
});

//se puede conectar a otro computadro con la ip de el computador por ejemplo http://10.175.81.244:3000
