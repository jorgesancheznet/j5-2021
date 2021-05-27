var five=require("johnny-five");

var board=new five.Board({
    port:"/dev/cu.usbmodem112301"
});

board.on("ready",function(){
    console.log("Placa conectada");
    var led1=new five.Led(5);
    var led2=new five.Led(6);
    led1.on();
    led2.off();
    led2.blink(500,function(){
        led1.toggle();
    })
})

console.log("Esperando la conexión con la placa...");