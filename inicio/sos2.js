var five=require("johnny-five");
var placa=new five.Board({
    port:"/dev/cu.usbmodem112201"
});

placa.on("ready",function(){
    console.log("Placa lista");
    var led=new five.Led(7);
    var cont=0;
    led.blink(500,function(){
        cont++;
        if(cont==6){
            led.stop().off();
        }
        console.log(cont)
    });

});
console.log("Comunicando con la placa...");