// Consegna: Dati tre array contenenti: - una lista ordinata di 5 immagini, - una lista ordinata dei relativi 5 luoghi e - una lista di 5 news, creare un carosello come nella foto allegata.
// Al click dell’utente sulle frecce verso l’alto o verso il basso, l’immagine attiva diventa visibile in formato grande a sinistra e nel suo angolo in basso a destra dovranno essere aggiunti i relativi - titolo e - testo.
// Allo stesso tempo nelle miniature l’immagine attiva dovrà apparire in evidenza rispetto alle altre.

const items = [
    'img/01.jpg',
    'img/02.jpg',
    'img/03.jpg',
    'img/04.jpg',
    'img/05.jpg'
];

const title = [
    'Svezia',
    'Svizzera',
    'Gran Bretagna',
    'Germania',
    'Paradise'
]

const text = [
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
    'Lorem ipsum',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
    'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
]

// Selezionare gli elementi in Dom

const carouselElement = document.getElementById("carousel");
const arrowUp = document.querySelector(".arrow-up")
const arrowDown = document.querySelector(".arrow-down") 

// generare i div contenitori nel Dom

const cardContainer = document.createElement ("div");
cardContainer.classList.add ("carousel-element");
carouselElement.prepend(cardContainer);

const thumbContainer = document.createElement ("div");
thumbContainer.classList.add ("container-thumbs");
carouselElement.append(thumbContainer);

thumbContainer.append(arrowUp);
thumbContainer.append(arrowDown);


// generare i contenuti dei miei array nel Dom

let main = "";
let thumb = "";

for (let i = 0; i < items.length; i++) {
    main += `
            <div class="card ${i === 0 ? 'active' : ''}">
                <img src="${items[i]}" alt=""></img>
                <div class="text-container">
                    <h1>${title[i]}</h1>
                    <p>${text[i]}</p>
                </div>
            </div>
     `;

    thumb += `<img src="${items[i]}" alt=""></img>`
 }

cardContainer.innerHTML += main;
thumbContainer.innerHTML += thumb;

// aggiungere la classe active al primo elemento dell'array
    //selezionare il primo elemento dell'array 

    let cards = document.querySelectorAll(".card")[0];
    cards.classList.add("active"); 

    let thumbNails = document.querySelectorAll(".container-thumbs img")[0];
    thumbNails.classList.add("active");



// Aggiungere il click sulle frecce per cambiare i contenuti

// al click sulla freccia in basso, l'elemento dell'array aumenta di 1
// al click sulla freccia in alto, l'elemento dell'array diminuisce di 1
    
let selectedElement = 0;

document.querySelector(".arrow-down").addEventListener("click", 
    function(){  
    ++selectedElement;     
    
    
    document.querySelector(".card.active").classList.remove("active");
    document.querySelector(".container-thumbs img.active").classList.remove("active");

    if(selectedElement === 5) {
        selectedElement = 0
    }
    // al click si aggiunge la classe active sul elemento selezionato
    document.querySelectorAll(".card")[selectedElement].classList.add("active");
    document.querySelectorAll(".container-thumbs img")[selectedElement].classList.add("active");
}

)

document.querySelector(".arrow-up").addEventListener("click", 
    function(){  
        --selectedElement; 
        if(selectedElement === -1) {
            selectedElement = 4
        }
       
    document.querySelector(".card.active").classList.remove("active");
    document.querySelector(".container-thumbs img.active").classList.remove("active");

    // al click si aggiunge la classe active sul elemento selezionato
    document.querySelectorAll(".card")[selectedElement].classList.add("active");
    document.querySelectorAll(".container-thumbs img")[selectedElement].classList.add("active");
}

)





