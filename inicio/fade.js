 var five=require("johnny-five");
var board=new five.Board({
    port:"/dev/cu.usbmodem12301"
});

board.on("ready",function(){
    console.log("Placa lista");
    var led1=new five.Led(5);
    var led2=new five.Led(6);
    led1.on();
    led2.off();
    led1.fadeOut(1000);
    led2.fadeIn(1000);
});
console.log("Comunicando con la placa...");