// debug
// console.log("ciao");





function createCard(array) {
    const docElem = document.createElement("div")
    docElem.classList.add("row", "justify-content-between", "g-20", "wrap")
    let contentString = "";
    array.forEach(function (elem) {
        contentString += `
        <div class = "col">
            <div class="card">
                <img class="pin" src="./img/pin.svg" alt="">
                <img class="main-img" src="${elem.url}" alt="">
                <span class="sub-title">${elem.date}</span>
                <h3 class="card-title">${elem.title}</h3>
            </div>
        </div>
        `;
    })

    docElem.innerHTML = contentString;
    mainElem.appendChild(docElem);
    return docElem;

}









//elemti prelevati dal DOM
const mainElem = document.querySelector("#content-card")
const overlayElem = document.querySelector("#content-overlay")
const bigImgElem = document.querySelector("#bigImg")

axios.get("https://lanciweb.github.io/demo/api/pictures/").then(function (resp) {
    const dataArray = resp.data;

    //invocazione della funzione per creare le card
    createCard(dataArray)

    //prelevo gli elementi che ho creato e aggiunto al DOM tramite la mia funzione 
    const cardElem = document.querySelectorAll(".card")
    const imgCardElem = document.querySelectorAll(".main-img")
            //il querySelectorAll di per se mi prende tuttti gli elementi di cui ho bisogno 
            // e me li salva in un ARRAY 
                    // debug :
                    // console.log(cardElem);




    // utilizzo un ciclo for prendere ogni card dall'array generata dal query selector
        // per potergli aggiungere l'ascolto degli eventi (in questo caso il click)
    cardElem.forEach(function (curCard) {
        
        //quindi al click sulla card :
        curCard.addEventListener("click", function () {
            

            //creo direttamente in modo dinamico sempre grazie a create element
                // tutto il mio overlay che voglio che si generi e si visualizzi al click sulla card
            

            //qui creo il mio div principale con la classe "overlay" per avere lo sfondo trasparente
            const overlayDiv = document.createElement("div")
            overlayDiv.classList.add("overlay")


            // qui creo il div che conterrà l'immagine e il mio bottone di chiusura
            const div = document.createElement("div")
            div.classList.add("cur-img")


            //qui creo il bottone che aggiungo al div con la classe "cur-img"
            const btnClose = document.createElement("button")
            btnClose.classList.add("btn")
            btnClose.innerText = "Chiudi"

            //qui creo l'immagine che aggiungo al div con la classe "cur-img"
            const bigImg = document.createElement("img")

                    //getAttribute setAttribute ????? 

            bigImg.src = //??????????


            // aggiungo gli elementi sopra creati in un unico DIV ("overlayDiv")
            div.appendChild(btnClose)
            div.appendChild(bigImg)
            overlayDiv.appendChild(div)

            
            //ed infine lo aggiungo all'elemento che ho preso dal mio index ("overlayElem")
            overlayElem.appendChild(overlayDiv)


            // il bottone sopra creato è di tipo oggetto quindi posso ascoltare eventuali eventi: (es: "click")
            btnClose.addEventListener("click", function () {

                //quindi al click sul bottone rimuovo completamente il div sopra creato 
                overlayDiv.remove()
            })


        })

    })

})



