// SNACK SQUADRE
// Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: 
// nome, punti fatti, falli subiti.
// Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
// Generare numeri random al posto degli 0 nelle proprietà:
// Punti fatti e falli subiti.
// Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo
// nomi e falli subiti e stampiamo tutto in console.


"use strict";


// Array di Objects -> Squadre di calcio con proprietà: "nome", "punti", "falli"
const arraySquadre1 = [
    { nome: "Juventus", punti: 0, falli: 0, },
    { nome: "Inter", punti: 0, falli: 0, },
    { nome: "Milan", punti: 0, falli: 0, },
    { nome: "Roma", punti: 0, falli: 0, },
    { nome: "Fiorentina", punti: 0, falli: 0, }
];


// Richiamo le funzioni
generaPuntiFalli();
destructuringArraySquadre();


// Function -> Genera un numero Random tra "min = 0" e "max = 100"
function getRandomNumber(min = 0, max = 30) {
    const numeroRandom = Math.floor(Math.random() * (max - min + 1) + min);
    // Return -> numero causale tra min e max 
    return numeroRandom;
};


// Function -> Assegna a ogni squadra le proprietà "punti" e "falli" casualmente 
function generaPuntiFalli() {
    // Ciclo For -> "CAMBIO" e non "CLONO" l'Array con i nuovi punti e i nuovi falli
    for (let i = 0; i < arraySquadre1.length; i++) {
        // Assegno al posto di "0" i punti generati casualmente 
        arraySquadre1[i].punti = getRandomNumber();
        // Assegno al posto di "0" i falli generati casualmente 
        arraySquadre1[i].falli = getRandomNumber();
    };

    // Console -> Mostra l'array con punti e falli random
    console.log("Mostra l'Array con tutte le proprietà");
    // In forma di Stringa
    console.log(JSON.stringify(arraySquadre1));
    // In forma di Array
    console.log(arraySquadre1);
};


// Function -> Eseguo il "destructuring" sull'Array originale con punti e falli casuali 
function destructuringArraySquadre() {
    // Array vuoto in cui "pusherò" le proprietà che voglio
    const arraySquadre2 = [];
    // Ciclo For -> Ciclo l'Array vuoto con nomi e falli dell'Array originale
    for (let i = 0; i < arraySquadre1.length; i++) {
        // Recupero solo i nomi e i falli dall'Array originale
        const { nome, falli } = arraySquadre1[i];
        // Push -> Aggiungo nel nuovo Array
        arraySquadre2.push({ nome, falli });
    };

    // Console -> Mostra l'Array con solo i nomi e i falli
    console.log("Mostra l'Array con solo nomi e falli");
    // In forma di Stringa
    console.log(JSON.stringify(arraySquadre2));
    // In forma di Array
    console.log(arraySquadre2);
};
