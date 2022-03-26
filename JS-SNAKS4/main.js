let invitati = ["paolo", "luca", "antonio"];
let nomeInserito = prompt("inserisci il tuo nome");
let verificaControllo = false;

for ( let i = 0; i < invitati.length; i++){
    
    if (nomeInserito == invitati[i]){
        alert(" puoi partecipare " + nomeInserito);
        verificaControllo = true;
    } 
}   

if (verificaControllo == false){
    alert("non puoi accedere");
}





