var five=require("johnny-five");

var board=new five.Board({
    port:"/dev/cu.usbmodem12301"
});

board.on("ready",function(){
    console.log("Placa lista");
    var led=new five.Led.RGB({
        pins:{
            red:10,
            green:9,
            blue:8
        }
    })

    led.color([255,255,0])
});
console.log("Conectando con placa....");