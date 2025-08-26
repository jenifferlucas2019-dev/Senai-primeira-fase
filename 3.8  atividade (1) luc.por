programa {
  funcao inicio() {
     real corre1 , corre2 , corre3 , corre4 , corre5 , total
    escreva("valor do primeiro corre: r$")
    leia(corre1)
     escreva("valor do segundo corre: r$")
     leia(corre2)
    escreva("valor do terceira corre: r$")
    leia(corre3)
    escreva("valor do querto corre: r$")
    leia(corre4)
  escreva(" valor do cinto corre: r$")
  leia(corre5)
    total = corre1 + corre2 + corre3 + corre4 + corre5 
    escreva("total de hoje: R$" + total)
    // 3.9
    real desconto
    desconto =  total * 25/100
    escreva("\ndesconto: r$ " + desconto)
    real totalliquido
    totalliquido =  total - desconto
    escreva("\ntotal liquido: r$ " + totalliquido)
    //3.10
    real salario
    salario = totalliquido * 20
    escreva("\nestimativa de salari: r$" + salario)
  }
  }
}
