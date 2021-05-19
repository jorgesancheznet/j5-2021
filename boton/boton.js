var five=require("johnny-five");
var board=new five.Board({
    port:"COM3"
});

board.on("ready",function(){
    console.log("Placa conectada");
    var boton1=new five.Button({
        pin:7,
        invert:true,
        isPullup:true
    });
    boton1.on("down",function(){
        console.log("Pulsado");
    })
    boton1.on("hold",function(){
        console.log("Amarrado");
    })

});

console.log("Conectando...");