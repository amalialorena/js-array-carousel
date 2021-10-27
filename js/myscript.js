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
const imgContainer = document.createElement ("div");
imgContainer.classList.add ("carousel-element");
carouselElement.append(imgContainer);
const thumbContainer = document.createElement ("div");
thumbContainer.classList.add ("container-thumbs");
carouselElement.append(thumbContainer);


// generare il codice html nel Dom

let main = "";
let thumb = "";

for (let i = 0; i < items.length; i++) {
    main += `
            <div class="img-container">
                <img src="img/01.jpg" alt=""></img>
            </div>
            <h1>Lorem</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione ipsam et eaque, quaerat voluptatibus nulla cupiditate culpa expedita nostrum molestias!</p>
     `;

    thumb += `<img src="img/01.jpg" alt=""></img>`
 }



imgContainer.innerHTML += main;
thumbContainer.innerHTML += thumb;





