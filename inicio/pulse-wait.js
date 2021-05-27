var five=require("johnny-five");
var board=new five.Board({
    port:"/dev/cu.usbmodem12301"
});

board.on("ready",function(){
    console.log("Placa conectada");
    var led1=new five.Led(5);
    var led2=new five.Led(6);

    led1.off();
    led2.off();
    led1.pulse(500)
    board.wait(500,function(){
        led2.pulse(500);
    })
})

console.log("Intentando conectar con la placa")