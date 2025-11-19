// debug
// console.log("ciao");


function createCard(array){
    const docElem = document.createElement("div")
    docElem.classList.add("row", "justify-content-between", "g-20", "wrap")
    let contentString = "";
    array.forEach(function(elem){
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
const mainElem = document.querySelector("#content")
const overlayElem = document.querySelector("#overlay")

axios.get("https://lanciweb.github.io/demo/api/pictures/").then(function (resp) {
    const dataArray = resp.data;
    createCard(dataArray)

})


