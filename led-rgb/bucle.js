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
    var rojo=0;
    var verde=255;
    var azul=0;
    cont=0;

    board.loop(10,function(){

        if(cont==0) {
            rojo++;
            verde--;
            azul++;
            if(rojo>255){
                rojo=255;
                verde=0;
                azul=255;
                cont=1;
            }
        }
        else if(cont==1){
            rojo--;
            verde++;
            if(rojo<0){
                rojo=0;
                verde=255;
                cont=2;
            }
        }
        else if(cont==2){
            azul--;
            if(azul<0){
                rojo=0;
                azul=0;
                verde=255;
                cont=0;
            }
        }
        led.color([rojo,verde,azul]);
    })
});

console.log("Conectando...");