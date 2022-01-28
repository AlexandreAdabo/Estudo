//Criar um contador que quando o numero fique negativo muda para vermelho e azul para positivo com limite de 10
//Criar to-do list onde usuário insira a tarefa e clicando no checkbox a tarefa seja riscada
//Verificar  de duas maneiras diferentes  se uma string é um palíndromo

const ordem = [0,7,5,9,4,6,1,8,3,2]
const arrayDeJson = [{"name":"Will", "idade":25, "profissao":"pescador"},
{"name":"Edi", "idade":20, "profissao":"nadador"},
{"name":"Ale", "idade":23, "profissao":"programador"},
{"name":"Lolo", "idade":15, "profissao":"editor"},
{"name":"Lala", "idade":26, "profissao":"cantor"},
{"name":"Lili", "idade":30, "profissao":"vendedor"},
{"name":"Jaja", "idade":35, "profissao":"contador"},
{"name":"Jojo", "idade":60, "profissao":"arquiteto"},
{"name":"Hihi", "idade":50, "profissao":"advogado"},
{"name":"Pepe", "idade":12, "profissao":"engenheiro"}]
var agoraFoi = []
for(var i=0; i< arrayDeJson.length; i++){
  agoraFoi.push(arrayDeJson[ordem[i]])
}
console.log(agoraFoi)

