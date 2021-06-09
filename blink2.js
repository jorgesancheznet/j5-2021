var five=require("johnny-five");
var board=new five.Board({
    port:"/dev/tty.usbmodem112401"
});

board.on("ready",function(){
    console.log("Placa lista");
    var ledRoja=new five.Led(9);
    var ledVerde=new five.Led(10);
    var estado=0;
    board.loop(500,function(){
        estado++;
        if(estado==5){
            estado=1;
        }
        //poner las luces apropiadas para cada estado
        if(estado==1){
            ledRoja.off();
            ledVerde.off();
        }
        else if(estado==2){
            ledRoja.on();
            ledVerde.off();
        }
        else if(estado==3){
            ledRoja.off();
            ledVerde.on();
        }
        else{
            ledRoja.on();
            ledVerde.on();
        }
        console.log(estado)
    })
});
console.log("Esperando a la placa...")