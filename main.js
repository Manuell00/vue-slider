// Inserisco Vue
const {createApp} = Vue;

createApp({
    data(){
        return {
            images : [
                {
                    image: 'img/01.webp',
                    title: 'Marvels Spiderman Miles Morales',
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
                    text: 'Marvel s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
                }
            ],

            immagine : images.forEach(element => {

                // Destructuring
                let { image, title, text } = element;
            
                // Creo le schede pcon l'immagine
                let scheda = `<!--Inserisco la scheda -->
                <div id="imgContainer">
                    <!-- Inserisco l'immagine -->
                    <img src="${image}" alt="${image}">
                </div>`
            
                // Creo le schede con le relative frasi
                let frasi = ` <!-- Inserisco la parte testuale -->
                <div class="text">
                    <h3 class="subtitle">${title}</h3>
                    <p class="text">${text}</p>
                </div>`
            
                // Inserisco le immagini nel thumbnails
                let immagine = `<div class="thumbnailsImg opacityYes"> <img src="${image}" alt="${image}"></div>`
                thumbnailsContainer.innerHTML += immagine
            
                // Creo dei mini array che inserisco a loro volta in un array più grande
                let coppia = []
                coppia.push(scheda, frasi)
                schedaFrase.push(coppia)
            }),

            activeItem : 0,
            schedaFrase : [],
            coppie : schedaFrase[activeItem],

        }
    },

    methods: {
        avanti : function () {

            // Definisco la variabile immagine
            let coppie = schedaFrase[activeItem + 1]
    
            // Rimuovo la classe activeItem dall'elemento
            miniatura[activeItem].classList.remove("active")
            miniatura[activeItem].classList.add("opacityYes")
    
            // Se non sono all'ultimo elemento
            if (activeItem == schedaFrase.length - 1) {
                activeItem = 0
                coppie = schedaFrase[activeItem]
            }
    
            else {
                activeItem++
            }
    
            // Aggiungo la classe activeItem all'elemento
            miniatura[activeItem].classList.add("active")
            miniatura[activeItem].classList.remove("opacityYes")
    
            // Incollo l'immagine a imgContainer e la frase a phraseContainer
            imgContainer.innerHTML = (coppie[0])
            phraseContainer.innerHTML = (coppie[1])
        },


        indietro : function () {

            // Definisco la variabile coppie
            let coppie = schedaFrase[activeItem - 1]
    
            // Rimuovo la classe activeItem dall'elemento
            miniatura[activeItem].classList.remove("active")
            miniatura[activeItem].classList.add("opacityYes")
    
            // Se non sono al primo elemento
            if (activeItem == 0) {
                activeItem = schedaFrase.length - 1
                coppie = schedaFrase[activeItem]
            }
    
            else {
                activeItem--
            }
    
            // Aggiungo la classe activeItem all'elemento
            miniatura[activeItem].classList.add("active")
            miniatura[activeItem].classList.remove("opacityYes")
    
            // Incollo l'immagine a imgContainer e la frase a phraseContainer
            imgContainer.innerHTML = (coppie[0])
            phraseContainer.innerHTML = (coppie[1])
        }
    }



}).mount('#container')