var five=require("johnny-five");
var board=new five.Board({
    port:"/dev/cu.usbmodem12301"
});

board.on("ready",function(){
    console.log("Placa lista");
    var led=new five.Led(13);
    led.blink(500);
});
console.log("Comunicando con la placa...");