let formElement = document.querySelector(".js-form");
let plnElement = document.querySelector(".js-pln");
let usdElement = document.querySelector(".js-usd");
let resultElement = document.querySelector(".js-result");

formElement.addEventListener("submit", (event) => {
    event.preventDefault();
    let pln = plnElement.value;
    let usd = usdElement.value;
    let result = pln * usd;
    resultElement.innerText = result.toFixed(2);
})
