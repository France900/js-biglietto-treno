// età
var anni = parseInt(prompt("quanti hanni hai?", "anni"));

if (isNaN(anni)) {
  console.log("devi inserire un numero!");
  document.getElementById("sorry").innerHTML = "Mi dispiace ma se non inserisci un numero non funziona"; // trasporta scritte in js in html
}

var kiloMetri = parseInt(prompt("quanti Km vuoi fare?", "Km"));

var prezzoKm = 0.21;
var prezzoTot = prezzoKm * kiloMetri;

if (anni < 18) {
  document.getElementById("").innerHTML = "Il Prezzo del tuo biglietto è: " + anni * prezzoTot / 100 * 80 + " Euro!"; // trasporta scritte in js in html
} else if (anni > 65) {
  document.getElementById("").innerHTML = "Il Prezzo del tuo biglietto è: " + anni * prezzoTot / 100 * 60 + " Euro!"; // trasporta scritte in js in html
} else {
  document.getElementById("").innerHTML = "Il Prezzo del tuo biglietto è: " + prezzoTot + " Euro!"; // trasporta scritte in js in html
}
