var five=require("johnny-five");

var board=new five.Board({
    port:"/dev/cu.usbmodem112301"
});

board.on("ready",function(){
    console.log("Placa conectada");
    var led1=new five.Led(6);
    var led2=new five.Led(5);
    var bit=0;
    led1.off();
    led2.off();

    board.loop(300,function(){
        if(bit==0){
            led1.off();
            led2.off();
        }
        else if(bit==1){
            led1.off();
            led2.on();
        }
        else if(bit==2){
            led1.on();
            led2.off();
        }
        else if(bit==3){
            led1.on();
            led2.on();
        }
        bit++;
        if(bit==4){
            bit=0;
        }
    })
})

console.log("Esperando la conexión con la placa...");