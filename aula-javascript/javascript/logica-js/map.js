const numeros = [3,5,8,10]

const usuarios = [
    {nome:"joao",idade:18},
    {nome:" jeniffer",idade:19},
    {nome:"maria",idade:21},
]

// const nomesUsuarios = nomesUsuarios.map((usuarios) => usuarios.nome)
// console.log(nomesUsuarios)


const idadesUsuarios = usuarios.map((usuarios) => usuarios.idade)
console.log(idadesUsuarios)

for(let idade of idadesUsuarios){
  console.log(idade)  
}



