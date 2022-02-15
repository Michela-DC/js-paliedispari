// L’utente sceglie pari o dispari 
// e inserisce un numero da 1 a 5. 
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione). 
// Sommiamo i due numeri 
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione) 
// Dichiariamo chi ha vinto.


function randomNumber (minNumber, maxNumber){
    const number = Math.floor( Math.random() * (maxNumber - minNumber + 1) + minNumber);
    
    return number;
}

function pariDispari (number) {

    if (number % 2 === 0 ){
        return true;
    }
    
    return false;
    // una volta che la funzione esegue il return tutto quello che viene dopo non viene eseguito  
    //quindi in questo caso NON c'è bisogno di mettere l'else
}


let userNumber; 

const choice = prompt('Scegli pari o dispari').trim().toLowerCase();
console.log(choice);

//creo un ciclo do-while che continua a chiedere di inserire il numero finché non vengono rispettate le condizioni richieste
do{
    userNumber = parseInt(prompt('Inserisci un numero da 1 a 5')); 
    console.log(userNumber);
    
} while( isNaN(userNumber) || userNumber < 1 || userNumber > 5 )

const computerNumber = randomNumber(1,5);
console.log(computerNumber);

const somma = userNumber + computerNumber;
console.log(`${userNumber} + ${computerNumber}  = ${somma}`);


if(choice === 'pari' && pariDispari(somma)){
    console.log('Pari! Hai vinto!');
} else if (choice === 'dispari' && !pariDispari(somma)) {
    console.log('Dispari! Hai vinto!');
} else {
    console.log('Hai perso...');
}


/*
USANDO IF-ELSE

let userNumber = parseInt(prompt('Inserisci un numero da 1 a 5')); 

if( isNaN(userNumber) || userNumber < 1 || userNumber > 5 ){ 
    console.log(`${userNumber} non soddisfa le condizioni richieste`);

} else{
    const computerNumber = randomNumber();
    console.log(computerNumber)
    
    const somma = userNumber + computerNumber;
    console.log(somma);
    
    pariDispari(somma);
}
*/


