var five=require("johnny-five");

var board=new five.Board({
    port:"/dev/cu.usbmodem112301"
});

board.on("ready",function(){
    console.log("Placa conectada");
    var sensor=new five.Proximity({
        controller: "HCSR04",
        pin: 7
    });
    var led1=new five.Led(5);



    sensor.on("change",function(){
        if(sensor.cm<5){
            led1.on();
        }
        else{
            led1.off();
        }
    })
})

console.log("Esperando la conexión con la placa...");