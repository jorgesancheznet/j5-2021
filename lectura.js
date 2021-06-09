var readline=require("readline");

var rl=readline.createInterface({
    input:process.stdin,
    output:process.stdout
})

rl.question("Nombre?",function(resp){
    console.log("Hola "+resp);
    process.exit();
})