const eta = parseInt(prompt('inserisci eta'));
console.log('eta scritta ' + eta);
document.getElementById('eta').innerHTML ='l eta della persona e: ' + eta + ' anni';

let dist = parseFloat (prompt('inserisci quanti KM farai'));
console.log('distanza scritta ' + dist);
document.getElementById('distanza').innerHTML ='la distanza totale del viaggio e: ' + dist + ' KM';


let prezzo = dist * 0.21;

if (eta < 18){
    let sconto = prezzo - prezzo * 20 / 100;
    document.getElementById('costo').innerHTML ='il prezzo del biglietto e di: ' + sconto.toFixed(2);
    console.log('il biglietto costa ' + sconto.toFixed(2));
}
else if (eta >= 65) {
    let sconto = prezzo - prezzo * 40 /100;
    document.getElementById('costo').innerHTML ='il prezzo del biglietto e di: ' + sconto.toFixed(2);
    console.log('il biglietto costa ' + sconto.toFixed(2));
}
else {
    document.getElementById('costo').innerHTML ='il prezzo del biglietto e di: ' + prezzo.toFixed(2);
    console.log('il biglietto costa ' + prezzo.toFixed(2))
}