while(true){

    let numeroPc = randomIntFromInterval(0 , 10);
    console.log(numeroPc);
    let numeroUtente = prompt("inserisci numero");
    if(!isNumeric(numeroUtente)){
        alert("solo numeri");
    }
    else{
    
    if(numeroPc == numeroUtente){
        alert("hai vinto");
    }
    else{
        alert("hai perso");
    }
    }}
    
    
    function randomIntFromInterval(min, max) { 
        return (Math.floor(Math.random() * (max - min + 1) + min))
    }
    
    function isNumeric(n) { 
        return !isNaN(n); 
    }
    