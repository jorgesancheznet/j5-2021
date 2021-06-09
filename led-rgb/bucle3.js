var five=require("johnny-five");
var placa=new five.Board({
    port:"/dev/tty.usbmodem112201"
});

placa.on("ready",function(){
    console.log("Placa preparada")
    /*var led=new five.Led.RGB({
        pins:{
            red:11,
            green:10,
            blue:9
        }
    });*/
    var led=new five.Led.RGB([11,10,9]);
    var estado=1;
    var rojo=255,verde=255,azul=255;
    placa.loop(20,function(){
        led.color(rojo,verde,azul);
        if(estado==1){
            verde--;
            azul--;
            if(verde<0){
                verde=0;
                azul=0;
                estado++;
            }
        }
        else if(estado==2){
            rojo--;
            verde++;
            if(rojo<0){
                rojo=0;
                verde=255;
                estado++;
            }
        }
        else if(estado==3){
            verde--;
            azul++;
            if(verde<0){
                verde=0;
                azul=255;
                estado++;
            }
        }
        else{
            rojo++;
            azul--;
            if(azul<0){
                azul=0;
                rojo=255;
                estado=2;
            }
        }
        console.log(rojo+","+verde+","+azul+" estado: "+estado);
    })
});
console.log("Esperando conexión con la placa....");