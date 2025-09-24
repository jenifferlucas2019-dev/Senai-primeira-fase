const prompt = require("prompt-sync")()

const notafinal = parseFloat(prompt("digite a nota final:"))
const frequencia = parseFloat(prompt("digite a frenquencia"))
if (notafinal >= 7 && frequencia >=8) {

      console.log("aprovado")
}else{
    console.log("reprovado")
}
