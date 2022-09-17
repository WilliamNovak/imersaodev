var numeroSecreto = parseInt(Math.random() * 11);
var tentativas = 3;

function Chutar(){
  tentativas = tentativas - 1;
  var chute = parseInt(document.getElementById("valor").value);
  
  if(chute == numeroSecreto){
    chutes = 3 - tentativas;
    document.getElementById("resultado").innerHTML = "Parabéns, você acertou com " + chutes + " tentativas! Jogo reiniciado.";
    numeroSecreto = parseInt(Math.random() * 11);
    tentativas = 3;
  }
  else if(tentativas < 1){
    document.getElementById("resultado").innerHTML = "Que pena, acabaram as tentativas. O número era " + numeroSecreto + ", jogo reiniciado!"
    numeroSecreto = parseInt(Math.random() * 11);
    tentativas = 3;
  }
  else if(chute < 0 || chute > 10){
    document.getElementById("resultado").innerHTML = "Apenas números entre 0 e 10! " + tentativas + " tentativas restantes.";
  }
  else{
    document.getElementById("resultado").innerHTML = "Número errado, tente novamente! " + tentativas + " tentativas restantes.";
  }
  
}