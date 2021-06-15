var express=require("express");
var app=express();
var puerto=3000;

app.get("/",function(req,res){
    console.log("Recibida petición");
    res.send("Hola");
});

app.listen(puerto,function(){
    console.log("Escuchando.....")
})