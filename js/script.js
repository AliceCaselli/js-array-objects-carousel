// Consegna:
// Dato un array di oggetti letterali con:
//  - url dell’immagine
//  - titolo
//  - descrizione
// Creare un carosello come nella foto allegata.

// Milestone 0:
// Come nel primo carosello realizzato, focalizziamoci prima sulla creazione del markup statico: costruiamo il container e inseriamo l'immagine grande in modo da poter stilare lo slider.

// Milestone 1:
// Ora rimuoviamo i contenuti statici e usiamo l’array di oggetti letterali per popolare dinamicamente il carosello.
// Al click dell'utente sulle frecce verso sinistra o destra, l'immagine attiva diventerà visibile e dovremo aggiungervi titolo e testo.

// Milestone 2:
// Aggiungere il **ciclo infinito** del carosello. Ovvero se la miniatura attiva è la prima e l'utente clicca la freccia verso destra, la miniatura che deve attivarsi sarà l'ultima e viceversa per l'ultima miniatura se l'utente clicca la freccia verso sinistra.


// BONUS 1:
// Aggiungere le thumbnails (sottoforma di miniatura) ed al click attivare l’immagine corrispondente.
// BONUS 2:
// Aggiungere funzionalità di autoplay: dopo un certo periodo di tempo (3 secondi) l’immagine attiva dovrà cambiare alla successiva.
// BONUS 3:
// Aggiungere bottoni di start/stop e di inversione del meccanismo di autoplay.


const images = [
    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morales',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];


// variabile slide container
let slideContainerEl = document.getElementById("slide-container");

// variabile del container thumbnails
let thumbnailsContainerEl = document.getElementById("thumbnails-container");

// variabile freccia su
let arrowUp = document.getElementById("arrow-up");

// variabile freccia giù
let arrowDown = document.getElementById("arrow-down");

// variabile per img active
let imgActiveEl = document.getElementById("img-active");

// variabile del titolo
let titleEl = document.getElementById("title");

// variabile del testo
let textEl = document.getElementById("text");


// variabile indice
let i = 0;
imgActiveEl.src = images[i].image;

titleEl.innerText = images[i].title;

textEl.innerText = images[i].text;


// array thumbnails
let thumbnailsList = [];


// array nelle thumbnails
images.forEach((imgThumb)=>{

    let newImgThumb = document.createElement('img');
    newImgThumb.src = imgThumb.image;
    thumbnailsContainerEl.append(newImgThumb);
    newImgThumb.style.height = "calc( 100% /" + images.length;

    thumbnailsList.push(newImgThumb);

    
});

thumbnailsList[i].classList.add('active');


// slider di immagini indietro
arrowUp.addEventListener('click', ()=>{

    
   scroll("up");
});

// slider di immagini avanti
arrowDown.addEventListener('click', ()=>{

    scroll("down");
});










// funzione per lo scorrimento
function scroll(direction) {
    thumbnailsList[i].classList.remove('active');
    if(direction == "up") {
        if(i == 0){

            i = images.length - 1;
        }else{
            i--;
        }
    } else if (direction == "down") {
        if(i == images.length - 1){

            i = 0;
        }else{
            i++;
        }
    }

    imgActiveEl.src = images[i].image;
    titleEl.innerText = images[i].title;

    textEl.innerText = images[i].text;
    thumbnailsList[i].classList.add('active');

};



