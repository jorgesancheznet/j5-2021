var five=require("johnny-five");
var placa=new five.Board({
    port:"/dev/tty.usbmodem12201"
});

placa.on("ready",function(){
    console.log("Placa preparada")
    var led=new five.Led.RGB([9,10,11]);
    var rojo=255;
    var verde=0;
    var azul=0;
    var estado=1;

    placa.loop(10,function(){
        led.color([rojo,verde,azul]);
        if(estado==1) { //pasamos de rojo a verde
            rojo--;
            verde++;
            if (rojo < 0) {
                rojo = 0;
                verde = 255;
                estado = 2;
            }
        }
        else if(estado==2) { //pasamos de verde a azul
            verde--;
            azul++;
            if (verde < 0) {
                verde = 0;
                azul = 255;
                estado = 3
            }
        }
        else{ //pasamos de azul a rojo
            azul--;
            rojo++;
            if(azul<0){
                azul=0;
                rojo=255;
                estado=1
            }
        }
    })

});
console.log("Esperando conexión con la placa....");