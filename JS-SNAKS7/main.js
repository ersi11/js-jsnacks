function cuboDeiPrimiN_Numeri(n){
    for(let i=1; i<=n; i++){
        let cubo = i**3;
        console.log(cubo);
    }
}


let nNumeri = prompt("inserici i primi numeri di cui vuoi avere il cubo");
cuboDeiPrimiN_Numeri(nNumeri);