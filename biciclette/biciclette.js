// SNACK BICICLETTE
// Creare un array di oggetti:
// Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
// Stampare a schermo la bici con peso minore utilizzando destructuring e template literal.

"use strict";

// Array di Object-> bici con le 2 proprietà: name (nome) , weight (peso)
const biciclette = [
    { name: "Canyon Ultimate CF", weight: 6.7 },
    { name: "Rose X-Lite", weight: 6.9 },
    { name: "Sarto Asola", weight: 5.7 }, // + leggera
    { name: "Scott Addict RC", weight: 6.8 },
    { name: "Bianchi Specialissima", weight: 6.7 }
];
// Console -> mostra Array originale
console.log(biciclette);

// Passo l'Array originale nella funzione per ottenere un Array di pesi (weight)
let arrayPesi = creaArrayPesi(biciclette);
// Console -> mostra Array di pesi (weight)
console.log(arrayPesi);

// Passo l'Array di pesi nella funzione per ottenere la bici + leggera
let indiceBiciLeggera = trovaIndiceLeggero(arrayPesi);
// Console -> mostra il "name" della bici più leggera (Sarto Asola)
console.log(biciclette[indiceBiciLeggera].name);
// Console -> mostra il "weight" della bici più leggera (5.7)
console.log(biciclette[indiceBiciLeggera].weight);


// FUNCTIONS

// Function -> Crea un Array "indicizzando" i pesi delle bici
function creaArrayPesi(biciclette) {
    // Array vuoto da riempire con i pesi(weight) delle bici
    let arrayPesi = [];
    // Ciclo For -> ciclo l'Array originale 
    for (let i = 0; i < biciclette.length; i++) {

        const elementBici = biciclette[i];
        // "Passo" la proprietà peso(weight) 
        let { weight } = elementBici;
        // Push -> qui inizio ad aggiungere i "pesi" nel nuovo Array
        arrayPesi.push(weight);
    };
    // Return -> array "completo" di pesi
    return arrayPesi;
};


// Function + Arrow Function -> ottengo l'indice dell'oggetto più leggero (weight + basso)
function trovaIndiceLeggero(arrayPesi) {
    // .findIndex -> "ritorna" il primo elemento dell'Array di pesi che "soddisfa" l'Arrow Function (=>)
    let indiceLeggero = arrayPesi.findIndex((element, index) => element === Math.min(...arrayPesi));
    // Return -> indice della bici più leggera
    return indiceLeggero;
};


// .querySelector -> seleziono dove voglio mostrare il risultato in html (.container)
const outputBiciLeggera = document.querySelector(".container");
// .innerHTML -> "inietto" il testo con i risultati ottenuti
outputBiciLeggera.innerHTML = `<h2>La bicicletta più leggera è la :<br>  
                                   "${biciclette[indiceBiciLeggera].name}"<br><br>
                                   Il suo peso è di :<br>
                                   ${biciclette[indiceBiciLeggera].weight} Kg</h2>`;

                                    
