var five=require("johnny-five");
var board=new five.Board({
    port:"/dev/tty.usbmodem12201"
});

board.on("ready",function(){
    console.log("Placa conectada");
    var led=new five.Led.RGB({
        pins:{
            red:11,
            green:10,
            blue:9
        }
    });
    var rojo=0;
    var verde=0;
    var azul=0;
    cont=1;

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