// debug
// console.log("ciao");


//elemti prelevati dal DOM
const rowElem = document.querySelector("#content")

axios.get("https://lanciweb.github.io/demo/api/pictures/").then(function (resp) {
    const dataArray = resp.data;
    console.log(dataArray);
    let contentString = "";
     dataArray.forEach(elem => {
        contentString += `
            <div class="col">
                <div class="card">
                    <img class="pin" src="./img/pin.svg" alt="">
                    <img class="main-img" src="${elem.url}" alt="">
                    <span class="sub-title">${elem.date}</span>
                    <h3 class="card-title">${elem.title}</h3>
                </div>
            </div>
        `
    rowElem.innerHTML = contentString;
    });

})
