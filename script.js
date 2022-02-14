// Palidroma
// Chiedere all’utente di inserire una parola 
// Creare una funzione per capire se la parola inserita è palindroma

const userWord = prompt('Inserisci una parola:');
console.log(userWord);

testPalindroma(userWord);


function testPalindroma (word){
    // Devo salvare ogni singola lettera della parola in una posizione di un array inizialmente vuoto devo usare split 
    const wordArray = word.split('');
    
    let reverseArray = [];
    
    // ciclo dentro l'array partendo dalla fine della parola e me la salvo poi unisco l'array in una parola
    for(let i = wordArray.length - 1; i >= 0; i-- ){
        reverseArray.push(wordArray[i]);
    }

    const reverseWord = reverseArray.join('');
    
    // confronto le due parola e se sono uguali allora è una parola palindroma
    if (word === reverseWord){
        return console.log('La parola è palindroma!');
    
    }else{
        return console.log('La parola NON è palindroma!');
    }
}
