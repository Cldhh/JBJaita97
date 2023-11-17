let x =[];
let totale = 0;
let mappa = document.getElementById("mappaCitta");
let torino = document.getElementById("torino");
let bari = document.getElementById("bari");
let milano = document.getElementById("milano");
let napoli = document.getElementById("napoli");

function boh(a,b){
    x.push("-" + a);
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

function setNapoli(){
   mappa.src = "./assets/napoli.png"; 
   napoli.style= "color:black";
   milano.style="color:gray";
   torino.style = "color:gray";
   bari.style = "color:gray";
}

function setBari() {
  mappa.src = "./assets/bari.png";
  napoli.style = "color:gray";
  milano.style = "color:gray";
  torino.style = "color:gray";
  bari.style = "color:black";
}

function setTorino() {
  mappa.src = "./assets/Torino.png";
  mappa.style="width:635px;heigth:621px;"
  napoli.style = "color:gray";
  milano.style = "color:gray";
  torino.style = "color:black";
  bari.style = "color:gray";
}

function setMilano() {
  mappa.src = "./assets/milano.png";
  napoli.style = "color:gray";
  milano.style = "color:black";
  torino.style = "color:gray";
  bari.style = "color:gray";
}