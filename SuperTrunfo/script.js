var cartas = [
    {nome: "Superman", img: "./imgs/superman.jpg", atributos: {Forca: 10, Habilidade: 7, Velocidade: 8}},
    {nome: "Arqueiro Verde", img: "./imgs/arrow.jpg", atributos: {Forca: 7, Habilidade: 9, Velocidade: 5}}, 
    {nome: "Flash", img: "./imgs/flash.jpg", atributos: {Forca: 6, Habilidade: 8, Velocidade: 10}},
    {nome: "Batman", img: "./imgs/batman.jpg", atributos: {Forca: 7, Habilidade: 10, Velocidade: 6}}
]

var moldura = '<img src="./imgs/card.png" style=" width: inherit; height: inherit; position: absolute;">';

var cartaMaquina
var cartaJogador

function sortearCarta() {
    cartaMaquina = cartas[parseInt(Math.random() * 4)]
    cartaJogador = cartas[parseInt(Math.random() * 4)]

    while (cartaMaquina === cartaJogador){
        cartaJogador = cartas[parseInt(Math.random() * 4)]
    }

    document.getElementById("btnSortear").disabled = true;
    document.getElementById("btnJogar").disabled = false;

    document.getElementById("carta-maquina").innerHTML = moldura
    document.getElementById("carta-maquina").style.backgroundImage = ''
    document.getElementById("resultado").innerHTML = '';
    
    exibirCarta("carta-jogador", cartaJogador);

}

function obterAtributoSeleciona() {
    var radioAtributos = document.getElementsByName("atributo");

    for (var i = 0; i < radioAtributos.length; i++){
        if (radioAtributos[i].checked) {
            return radioAtributos[i].value
        }
    }
}

function jogar() {
    var atributoSelecionado = obterAtributoSeleciona()
    var divResultado = document.getElementById("resultado")

    if (cartaJogador.atributos[atributoSelecionado] > cartaMaquina.atributos[atributoSelecionado]){
        divResultado.innerHTML = "<p class='resultado-final win'>Você venceu!</p>"
    } else if (cartaJogador.atributos[atributoSelecionado] < cartaMaquina.atributos[atributoSelecionado]) {
        divResultado.innerHTML = "<p class='resultado-final lose'>Você perdeu, a carta da máquina é maior!</p>"
    } else {
        divResultado.innerHTML = "<p class='resultado-final draw'>Empatou!</p>"
    }

    document.getElementById("btnJogar").disabled = true;
    document.getElementById("btnSortear").disabled = false;

    exibirCarta("carta-maquina", cartaMaquina);
}

function exibirCarta(id, carta) {
    var divCarta = document.getElementById(id)
    divCarta.style.backgroundImage = `url(${carta.img})`

    var tagHTML = "<div id='opcoes' class='carta-status'>"
    var opcoesTexto = ""

    for (atributo in carta.atributos) {
        if (carta === cartaJogador){

            if (opcoesTexto === ""){
                opcoesTexto += `<input type='radio' name='atributo' value='${atributo}' checked>${atributo.replace('c','ç')}: ${carta.atributos[atributo]} <br>`; 
            } else {
                opcoesTexto += `<input type='radio' name='atributo' value='${atributo}'>${atributo}: ${carta.atributos[atributo]} <br>`; 
            }

        } else if (carta === cartaMaquina){

            if (opcoesTexto === ""){
                opcoesTexto += `<p name='atributo' value='${atributo}' checked>${atributo.replace('c','ç')}: ${carta.atributos[atributo]} </p>`; 
            } else {
                opcoesTexto += `<p name='atributo' value='${atributo}'>${atributo}: ${carta.atributos[atributo]} </p>`; 
            }

        }
    }

    var nome = `<p class="carta-subtitle">${carta.nome}</p>`

    divCarta.innerHTML = moldura + nome + tagHTML + opcoesTexto + '</div>'
}