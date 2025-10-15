const numeros = [2,9,8,10]

const numerosMaiorquecinco = numeros.filter(valor => valor>5)

console.log(numerosMaiorquecinco)

const numerospares = numeros.filter(valor => valor % 2 === 0)

console.log(numerospares)

  

const usuarios = [
    {nome:"joao",idade:18},
    {nome:" jeniffer",idade:19},
    {nome:"maria",idade:21},
]

const usuariosMenordeidade = usuarios.filter (usuarios => usuarios.idade<18)
console.log(usuariosMenordeidade)


