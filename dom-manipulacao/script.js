function mostrarMensagem(){
     alert("mensagem")
     alert("resto da mensagem")
}

function executarExercico(){
     let nome = prompt("qual seu nome?")
     alert("ola" + nome)
     document.getElementById("resultado").innerHTML = "ola jeniffer" + nome

}

function efetuarlogin(){
     let resultado = document.getElementById("resultadologin")
     console.log(resultado);
     let user = document.getElementById("username").value
     if(user == "jeniffer"){
     resultado.innerHTML = "login com sucesso"
     }else{
          resultado.innerHTML = "credenciais incorretas"
     }
}