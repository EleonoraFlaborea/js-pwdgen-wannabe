// Descrizione:
//Chiediamo all’utente il suo nome,
//poi chiediamo il suo cognome,
//poi chiediamo il suo colore preferito
//Infine generiamo una password con i dati che l'utente ci ha fornito, nella forma: nomecognomecolorepreferito23
//(es.: paolinopaperinoverde23) e scriviamola sulla pagina.
//PS: Abbiamo un 21 da agganciare alla fine della password... sarà un numero o una stringa?

/*
    1- Dichiarare una variabile nome
    2- Chiedere il nome all'utente
    3- Salvarlo in una variabile

    4- Dichiarare una variabile cognome
    5- Chiedere il cognome all'utente
    6- Salvarlo in una variabile 

    7- Dichiarare una variabile colore
    8- Chiedere il colore all'utente
    9- Salvarlo in una variabile

    10- Dichiarare una variabile numero e il suo valore

    11-Recuperare l'elemento HTML
    12-Modificare il contenuto
*/

console.log('JS OK');

// PUNTO 1-2-3
const firstName =  prompt ('Qual è il tuo nome?');
console.log(firstName);

// PUNTO 4-5-6
const lastName =  prompt ('Qual è il tuo cognome?');
console.log(lastName);

// PUNTO 7-8-9
const color =  prompt ('Qual è il tuo colore preferito?');
console.log(color);

// PUNTO 10
const number = 21;
console.log(number);


// PUNTO 11
const element = document.getElementById('result');
console.log(element);

// PUNTO 12
const message = `${firstName}${lastName}${color}${number}`;
console.log(message);

element.innerHTML += message;

