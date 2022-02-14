// L’utente sceglie pari o dispari 
// e inserisce un numero da 1 a 5. 
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione). 
// Sommiamo i due numeri 
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione) 
// Dichiariamo chi ha vinto.

let userNumber = parseInt(prompt('Inserisci un numero da 1 a 5')); 
console.log(userNumber);

//verifico che abbia inserito un numero in cifre e che sia da 1 a 5 
if( isNaN(userNumber) || userNumber < 1 || userNumber > 5 ){ 
    console.log(`${userNumber} non soddisfa le condizioni richieste`);

} else{
    const computerNumber = randomNumber();
    console.log(computerNumber)
    
    const somma = userNumber + computerNumber;
    console.log(somma);
    
    pariDispari(somma);
}

// FUNZIONI
function randomNumber (){
    const number = Math.floor( Math.random()* 5 + 1 );
    
    return number;
}

function pariDispari (number) {

    if (number % 2 != 0 ){
        console.log('dispari');
    }else{
        console.log('pari');
    }
}