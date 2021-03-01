// età
var anni = parseInt(prompt("quanti hanni hai?", "anni"));
document.getElementById("anni").innerHTML = anni; // trasporta scritte in js in html

//Kilometri
var kiloMetri = parseInt(prompt("quanti Km vuoi fare?", "Km"));
document.getElementById("kM").innerHTML = kiloMetri; // trasporta scritte in js in html

// prezzi
var prezzoKm = 0.21;
var prezzoTot = prezzoKm * kiloMetri;

//logica
if (isNaN(anni)) {
  document.getElementById("sorry").innerHTML = "Mi dispiace ma se non inserisci la tua età non funziona"; // trasporta scritte in js in html
} else if (isNaN(kiloMetri)) {
  document.getElementById("sorry").innerHTML = "Mi dispiace ma se non inserisci un numero di Km non funziona"; // trasporta scritte in js in html
} else if (!isNaN(anni)) {
  if (anni < 18) {
    document.getElementById("prezzofinale").innerHTML = (prezzoTot / 100 * 80).toFixed(2) + " Euro!"; // trasporta scritte in js in html
  } else if (anni > 65) {
    document.getElementById("prezzofinale").innerHTML = (prezzoTot / 100 * 60).toFixed(2) + " Euro!"; // trasporta scritte in js in html
  } else {
    document.getElementById("prezzofinale").innerHTML = prezzoTot + " Euro!"; // trasporta scritte in js in html
  }
}
