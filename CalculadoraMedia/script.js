function showGrade(){
    var grade1 = parseFloat(document.getElementById("grade1").value);
    var grade2 = parseFloat(document.getElementById("grade2").value);
    var grade3 = parseFloat(document.getElementById("grade3").value);
  
    var media = ((parseFloat(document.getElementById("grade1").value) + parseFloat(document.getElementById("grade2").value) + parseFloat(document.getElementById("grade3").value)) / 3).toFixed(2);
    
    var result = document.getElementById("result");
    
    if(media >= 6){
      var status = "Aprovado";
      result.style.color = 'green';
    }
    else {
      var status = "Reprovado";
      result.style.color = 'red';
    }
    
    result.innerHTML = status + " - " + media
    
};
  
function limpa(){
    document.getElementById('grade1').value='';
    document.getElementById('grade2').value='';
    document.getElementById('grade3').value='';
    document.getElementById("result").innerHTML='';
}