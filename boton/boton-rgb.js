var five=require("johnny-five");
var board=new five.Board({
    port:"COM3"
});

board.on("ready",function(){
    console.log("Placa conectada");
    var led=new five.Led.RGB({
        pins:{
            red:9,
            green:10,
            blue:11
        }
    });
    var boton1=new five.Button({
        pin:7,
        invert:true,
        isPullup:true
    });
    var boton2=new five.Button({
        pin:4,
        invert:true,
        isPullup:true
    });
    var boton3=new five.Button({
        pin:2,
        invert:true,
        isPullup:true
    });
    var ledRoja=new five.Led(9);
    var ledVerde=new five.Led(10);
    var ledAzul=new five.Led(11);


    boton1.on("press",function(){
        ledRoja.toggle();
    })
    boton2.on("press",function(){
        ledVerde.toggle();
    })
    boton3.on("press",function(){
        ledAzul.toggle();
    })

});

console.log("Conectando...");