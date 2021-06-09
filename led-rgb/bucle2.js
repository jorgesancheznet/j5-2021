var five=require("johnny-five");

var board=new five.Board({
    port:"/dev/cu.usbmodem12301"
});

board.on("ready",function(){
    console.log("Placa lista");
    var led=new five.Led.RGB({
        pins:{
            red:11,
            green:10,
            blue:9
        }
    })

    var rojo=0;
    var verde=0;
    var azul=0;
    var estado=0;
    board.loop(10,function(){
        if(estado==0){//acaba en 255,0,0
            rojo++;
            if(rojo>255){
                rojo=255;
                estado++;
            }
        }
        else if(estado==1){//acaba en 255,255,0
            verde++;
            if(verde>255){
                verde=255;
                estado++;
            }
        }
        else if(estado==2){ //acaba en 0,255,255
            azul++;
            rojo--;
            if(azul>255){
                azul=255;
                rojo=0;
                estado++;
            }
        }
        else if(estado==3){//acaba en 255,0,255
            verde--;
            rojo++;
            if(rojo>255){
                rojo=255;
                verde=0;
                estado++;
            }
        }
        else if(estado==4){//acaba en 0,0,255
            rojo--;
            if(rojo<0){
                rojo=0;
                estado++;
            }
        }
        else if(estado==5){ //acaba en 0,0,0
            azul--;
            if(azul<0){
                azul=0;
                estado++;
            }
        }
        led.color([rojo,verde,azul]);
        if(estado>5){
            estado=0;
        }
        console.log(rojo+","+verde+","+azul)
    })
});
console.log("Conectando con placa....");