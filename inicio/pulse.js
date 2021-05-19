var five=require("johnny-five");
var board=new five.Board({
    port:"COM3",
    repl:false
});

board.on("ready",function(){
    console.log("Placa lista");
    var led1=new five.Led(5);
    var led2=new five.Led(6);
    led1.on();
    led2.on();
    led1.pulse(700,function(){
        led2.toggle();
    });

});
console.log("Comunicando con la placa...");