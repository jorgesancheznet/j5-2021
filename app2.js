var express=require("express");
var app=express();
var puerto=3000;

app.use(express.static("paginas"));

app.listen(puerto,function(){
    console.log("Escuchando...");
})