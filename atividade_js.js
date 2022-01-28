/*Atividade
Crie uma função que recebe dois números como parâmetros.
Confira se os números são iguais.
Confira se a soma dos números é maior que 10 ou menor que 20.
Retorne uma string dizendo "Os números num1 e num2 não/são iguais. Sua soma é soma, que é maior/menor que 10 e maior/menor que 20".
*/

function verificador(num1,num2){
  if(typeof(num1) != "number" || typeof(num2) != "number"){
    console.log('Defina os dois numeros!');
    return
  }
  if(num1 < 0 || num2 < 0) return console.log('Defina os dois numeros positivos!');
  
    

  var igualOuNao = ''
  if(num1 === num2){
    igualOuNao = 'são'
  }else{
    igualOuNao = 'não'
  }
  var soma = 0
  soma = num1 + num2
  var maior10 = ''
  var maior20 = ''
  if(soma > 10 && soma < 20){
    maior10 = 'maior'
    maior20 = 'menor'
  }else if (soma > 20){
    maior10 = 'maior'
    maior20 = 'maior'
  }else{
    maior10 = 'menor'
    maior20 = 'menor'
  }
  console.log(`Os números ${num1} e ${num2} ${igualOuNao} são iguais. Sua soma é ${soma}, que é ${maior10} que 10 e ${maior20} que 20`)
}

verificador(-10,-50)