var five=require("johnny-five");
var board=new five.Board({
    port:"COM3"
});

board.on("ready",function(){
    console.log("Placa lista");
    var led1=new five.Led(5);
    var led2=new five.Led(6);
    led1.on();
    led2.blink(500,function(){
        led1.toggle();
    });
});
console.log("Comunicando con la placa...");