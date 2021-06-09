var five=require("johnny-five");
var board=new five.Board({
    port:"/dev/tty.usbmodem112401"
});

board.on("ready",function(){
    console.log("Placa lista");
    var ledRoja=new five.Led(9);
    var ledVerde=new five.Led(10);
    ledRoja.on();
    ledVerde.off();
    board.loop(500,function(){
        ledRoja.toggle();
        ledVerde.toggle();
    })
});
console.log("Esperando a la placa...")