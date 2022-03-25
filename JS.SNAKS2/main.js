let parola1 = prompt("inserisci una parola");
let parola2 = prompt("inserisci una parola");

if (parola1.length > parola2.length){
    alert ("la parola più grande è" + parola1);
} else if (parola1.length < parola2.length){
    alert ("la parola più grande è" + parola2);
} else {
    alert ("le parole hanno la stessa lughezza")
}