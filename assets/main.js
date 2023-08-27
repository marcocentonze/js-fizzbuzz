/* Scrivi un programma che stampi in console i numeri da 1 a 100, ma che:
 per i multipli di 3 stampi “Fizz” al posto del numero
e per i multipli di 5 stampi “Buzz”.
Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.
Prima di partire a scrivere codice poniamoci qualche domanda:
Come faccio a sapere se un numero è divisibile per un altro?
Abbiamo visto qualcosa di particolare che possiamo usare (si)?
Consigli del giorno:
Scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
Proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo "a mano"
*/

/* Strumenti:
    - const
    - log
    - for
    - log
    - if/else if/else if/else
    - stampo in pagina
*/

// Ottenere "container" dal DOM
const container = document.getElementById('container');
console.log(container);

// Ciclo da 1 a 100
for (let i = 1; i < 101; i++) {

    // Creare un nuovo elemento div per ciascun numero che si crea
    let element = document.createElement('div');
    //faccio i controlli per vedere se un numoro è fizz...
    if (i % 3 == 0 && i % 5 == 0) {
        element.innerHTML = 'FizzBuzz'; //inserisco il contenuto fizzbuzz..
        element.className = 'circle fizzBuzz'; //assegno la classe...
    } else if (i % 3 == 0) {
        element.innerHTML = 'Fizz';
        element.className = 'circle fizz';
    } else if (i % 5 == 0) {
        element.innerHTML = 'Buzz';
        element.className = 'circle buzz';
    } else {
        element.innerHTML = i;
        element.className = 'circle num';
    }
    //scrivo in pagina
    container.append(element);
}
