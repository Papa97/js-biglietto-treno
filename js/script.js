const eta = parseInt(prompt('Inserisci eta'));
console.log('eta scritta ' + eta);
document.getElementById('eta').innerHTML ="L' eta della persona e': " + eta + ' anni';

let dist = parseFloat (prompt('Inserisci quanti KM farai'));
console.log('distanza scritta ' + dist);
document.getElementById('distanza').innerHTML ='La distanza totale del viaggio e: ' + dist + ' KM';


let prezzo = dist * 0.21;

if (eta < 18){
    let sconto = prezzo - prezzo * 20 / 100;
    document.getElementById('costo').innerHTML ='Il prezzo del biglietto e di: € ' + sconto.toFixed(2);
    console.log('il biglietto costa ' + sconto.toFixed(2));
}
else if (eta >= 65) {
    let sconto = prezzo - prezzo * 40 /100;
    document.getElementById('costo').innerHTML ='Il prezzo del biglietto e di: € ' + sconto.toFixed(2);
    console.log('il biglietto costa ' + sconto.toFixed(2));
}
else {
    document.getElementById('costo').innerHTML ='Il prezzo del biglietto e di: € ' + prezzo.toFixed(2);
    console.log('il biglietto costa ' + prezzo.toFixed(2))
}