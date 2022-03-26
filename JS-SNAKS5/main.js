let incognita = [];


for ( let i = 0; i < 6; i++){
    let numeroInseritoUtente = parseInt(prompt("inserisci numero")); 
    if (numeroInseritoUtente % 2 == 1){
        incognita.push(numeroInseritoUtente);
    }
}
console.log(incognita);
