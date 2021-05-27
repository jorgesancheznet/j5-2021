var five=require("johnny-five");
var board=new five.Board({
    port:"/dev/cu.usbmodem12301"
});

board.on("ready",function(){
    console.log("Placa lista")
    var led=new five.Led(6);
    var larga=false;
    var cont=0;
    led.off();

    board.loop(500,function(){

        led.toggle();
    })

});
console.log("Comunicando con la placa...");