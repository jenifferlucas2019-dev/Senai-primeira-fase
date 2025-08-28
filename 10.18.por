programa {
  funcao inicio() {
  inteiro valor,notas100,notas50,notas25,notas005,notas20,notas10,notas5,notas2,notas1
   valor= 576
escreva("digite o valor em reais")
leia(valor)
  notas100 = valor / 100
  valor = valor % 100
  
  notas50 = valor/50
  valor = valor % 50


  notas20 = valor /20

  notas10 = valor/10
  valor = valor % 10

notas5 = valor/5
  valor = valor % 5

  notas2 = valor/2
  valor = valor % 2

 notas1 = valor /1
  valor = valor % 1
// escreva(" valor r$ + valor")
escreva("\nNotas r$100:" + notas100 )
escreva("\nNotas r$50:" + notas50)
escreva("\nNotas r$20:" + notas20)
escreva("\nNotas r$10:" + notas10)
escreva("\nNotas r$5:" + notas5)
escreva("\nNotas r$2:" + notas2)
escreva("\nNotas r$1:" + notas1)


  }
  }
}
