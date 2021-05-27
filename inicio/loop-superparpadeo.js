var five=require("johnny-five");
var board=new five.Board({
    port:"/dev/cu.usbmodem12301"
});

board.on("ready",function(){
    console.log("Placa conectada");
    var led=new five.Led(5);

    led.off();
    let veces=1;
    let contador=0;
    let inc=1.1;
    board.loop(5,function(){
        contador++;
        if(contador>=veces){
            contador=0;
            veces=veces*inc;
            led.toggle();
        }


    })
})

console.log("Intentando conectar con la placa")