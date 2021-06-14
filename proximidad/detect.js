var five=require("johnny-five");

var board=new five.Board({
    port:"/dev/cu.usbmodem12201"
});

board.on("ready",function(){
    console.log("Placa conectada");
    var sensor=new five.Proximity({
        controller: "HCSR04",
        pin: 7
    });
    var led1=new five.Led(5);



    sensor.within([5,10],"cm",function(){
        led1.on();
    })
})

console.log("Esperando lhca conexión con la placa...");