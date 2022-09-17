function Converter() {
    var realPrice = document.getElementById("valor").value;
    var dolarPrice = realPrice / 5.25
    var bitcoin = dolarPrice * 0.000053
    
    document.getElementById("valorDolar").innerHTML = "Dólar: " + dolarPrice.toFixed(2);
    document.getElementById("valorBitcoin").innerHTML = "Bitcoin: " + bitcoin.toFixed(6);
}