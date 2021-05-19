var five=require("johnny-five");
var board=new five.Board({
    port:"COM3"
});

board.on("ready",function(){
    console.log("Placa conectada");
    var led1=new five.Led(5);
    var led2=new five.Led(6);

    led1.on();
    led2.on();
    let cont=0;
    board.loop(500,function(){
        led1.toggle();
        cont++;
        if(cont==6){
            led2.toggle();
            cont=0;
        }
    })
})

console.log("Intentando conectar con la placa")