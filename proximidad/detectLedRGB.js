var five=require("johnny-five");

var board=new five.Board({
    port:"/dev/tty.usbmodem112201"
});

board.on("ready",function(){
    console.log("Placa conectada");
    var sensor=new five.Proximity({
        controller: "HCSR04",
        pin: 7
    });
    var led=new five.Led.RGB([11,10,9]);
    led.color("blue");
    sensor.on("change",function(){
        if(sensor.cm<8){
            led.color("red");
        }
        else if(sensor.cm<15){
            led.color("green");
        }
        else{
            led.color("blue");
        }
    });
})

console.log("Esperando la conexión con la placa...");