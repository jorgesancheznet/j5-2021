var five=require("johnny-five");
var placa=new five.Board({
    port:"/dev/cu.usbmodem112201"
});

placa.on("ready",function(){
    console.log("Placa lista");
    var led=new five.Led(7);
    led.off();
    placa.loop(2000,function(){
        led.on();
    })
});
console.log("Comunicando con la placa...");