// setInterval(()=>{
//     console.log("executei")
// },2000)

const prompt = require('prompt-sync')()

let contadorIncial = Number(prompt("digite um valor inicial:"))
let contadorFinal = Number(prompt("digite um valor final:"))

let intervalo = setInterval(()=>{
    contadorIncial++
    console.log(contadorIncial)
    if(contadorIncial === contadorFinal){
     clearInterval(intervalo)
    }

},1000)