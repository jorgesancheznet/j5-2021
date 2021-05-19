var five=require("johnny-five");
var board=new five.Board({
    port:"COM3"
});

board.on("ready",function(){
    console.log("Placa conectada");
    var led=new five.Led.RGB({
        pins:{
            red:9,
            green:10,
            blue:11
        }
    });
    var rojo=0;
    var verde=0;
    var azul=0;
    cont=0;

    board.loop(1000,function(){
       if(cont==1){
           led.color("red");
       }
       else if(cont==2){
           led.color("green");
       }
       else{
           led.color("blue");
       }
        cont++;
        if(cont==4) cont=1;
    })
});
console.log("Conectando...");