var times = ['Grêmio', 'Inter', 'Palmeiras', 'Flamengo', 'São Paulo', 'Corinthians', 'Cruzeiro', 'Atlético Mg', 'Santos', 'Botafogo', 'Atlético Pr', 'Fluminense', 'Fortaleza', 'Ceará', 'Bragantino', 'Vasco', 'Sport', 'Juventude']

var classificacao = []

for (var x = 0; x < times.length; x++){
    classificacao.push({time: times[x], vitorias: 0, empates: 0, derrotas: 0, pontos: 0})
}

function exibeTimesNaTela(classificacao) {
    var elemento = ""
    for (var i = 0; i < classificacao.length; i++){
        elemento += "<tr><td class='time-col'>" + classificacao[i].time + "</td>"
        elemento += "<td>" + classificacao[i].vitorias + "</td>"
        elemento += "<td>" + classificacao[i].empates + "</td>"
        elemento += "<td>" + classificacao[i].derrotas + "</td>"
        elemento += "<td>" + classificacao[i].pontos + "</td>"
        elemento += "<td><button class='btnVitoria' onClick='adicionarVitoria(" + i + ")'>Vitória</button></td>"
        elemento += "<td><button class='btnEmpate' onClick='adicionarEmpate(" + i + ")'>Empate</button></td>"
        elemento += "<td><button class='btnDerrota' onClick='adicionarDerrota(" + i + ")'>Derrota</button></td>"
        elemento += "</tr>"
    }

    var tabelaTimes = document.getElementById("tabelaTimes")
    tabelaTimes.innerHTML = elemento
}

exibeTimesNaTela(classificacao)

function calculaPontos(time) {
    return time.vitorias * 3 + time.empates;
}

function adicionarVitoria(i) {
    var time = classificacao[i]
    time.vitorias++
    time.pontos = calculaPontos(time)
    exibeTimesNaTela(classificacao)
}

function adicionarEmpate(i) {
    var time = classificacao[i]
    time.empates++
    time.pontos = calculaPontos(time)
    exibeTimesNaTela(classificacao)
}

function adicionarDerrota(i) {
    var time = classificacao[i]
    time.derrotas++
    exibeTimesNaTela(classificacao)
}