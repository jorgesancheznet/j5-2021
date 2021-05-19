var five=require("johnny-five");
var board=new five.Board({
    port:"COM3"
});

board.on("ready",function(){
    console.log("Placa lista");
    var led7=new five.Led(7);
    var led8=new five.Led(8);
    led8.on();
    led7.strobe(500,function(){
        led8.toggle();
    });
});
console.log("Comunicando con la placa...");