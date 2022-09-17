arraySeries = ["https://upload.wikimedia.org/wikipedia/pt/thumb/3/34/The_Walking_Dead_Season_3_Official_Poster.jpg/230px-The_Walking_Dead_Season_3_Official_Poster.jpg", "https://images-na.ssl-images-amazon.com/images/I/81QE7xH-thL.jpg", "https://br.web.img2.acsta.net/pictures/17/09/29/21/15/4233147.jpg", "https://br.web.img3.acsta.net/pictures/21/08/05/10/07/5681271.jpg", "https://images-na.ssl-images-amazon.com/images/I/71nGC933bbL.jpg"];

var listaSeries = document.getElementById("listaSeries");

for (var i = 0; i < arraySeries.length; i++) {
    var serie = "<img src=" + arraySeries[i] + ">";
    listaSeries.innerHTML =  listaSeries.innerHTML + serie;
}

function adicionarSerie() {
  var serieFav = document.getElementById("serie").value;

  if(serieFav.endsWith(".jpg") || serieFav.endsWith(".png")){
    listaSerieTela(serieFav);
  }
  else {
    console.error("Imagem inválida!")
  }
  
  document.getElementById("serie").value = "";
}

function listaSerieTela(serie) {
   if(exists(serie)){
     arraySeries.push(serie); 
   }
  
   listaSeries.innerHTML = "";
   for (var i = 0; i < arraySeries.length; i++) {
      var serie = "<img src=" + arraySeries[i] + ">";
      listaSeries.innerHTML =  listaSeries.innerHTML + serie;
   }
}

function exists(serie) {
  for (var i = 0; i < arraySeries.length; i++) {
    if (arraySeries[i] == serie) {
      return false;
    }
  }
  return true;
}