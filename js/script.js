
// Applichiamo controllo avanzato - ristretto del codice
"use strict"

// Effettuiamo una pulizia auotmatica della console
console.clear();

// Apertura di un Iterazione
// Inizializzazione variabile - Condizione - Incremento

for (let numeri = 1; numeri <= 100; numeri++ ) {
    
    
    if(numeri % 3 === 0 && numeri % 5 === 0 ) {
        console.log("FizzBuzz");
    }  else if (numeri % 3 === 0){
        console.log("Fizz");
    } else if (numeri % 5 === 0){
        console.log("Buzz");
    } else {
        console.log(`Il numero ${numeri} non sono divisibili per 3 o per 5`);
    
}

}
