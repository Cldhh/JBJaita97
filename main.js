let x =[];
let totale = 0;

function boh(a,b){
    x.push(a);
    let finalString = x.join("\r\n");
    localStorage.setItem("prova", finalString);
    totale += b;
    localStorage.setItem("tot", totale);
}

function myFunction(){
    let y = localStorage.getItem("prova");
    let sum = localStorage.getItem("tot");
    if(y != null){
    let tot = "\n\nTotale " + "€ " + sum;
    document.getElementById('textArea').innerHTML = y;
    document.getElementById("prezzoFinale").innerHTML = tot;
    }
}

function azzera(){
   localStorage.clear();
}