const prompt = require("prompt-sync")()
const cnh = prompt("voce tem a cnh ?:")
const idade =prompt(" digite sua idade:")

if(cnh  == "sim" && idade >= 18){
    console.log("sim pode dirigir")
}else{
    console.log("nao pode dirigir ")
}