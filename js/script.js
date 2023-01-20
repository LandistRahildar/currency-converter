{
    const formElement = document.querySelector(".js-form");
    const plnElement = document.querySelector(".js-pln");
    const usdElement = document.querySelector(".js-usd");
    const resultElement = document.querySelector(".js-result");

    formElement.addEventListener("submit", (event) => {
        event.preventDefault();
        const pln = plnElement.value;
        const usd = usdElement.value;
        const result = pln * usd;
        resultElement.innerText = result.toFixed(2);
    })
}

















// szukaj fragmentów kodu, które robią konkretną rzecz, szukaj dla nich dobrych nazw funkcji 

// {
//     const formElement = document.querySelector(".js-form");
//     const plnElement = document.querySelector(".js-pln");
//     const usdElement = document.querySelector(".js-usd");
//     const resultElement = document.querySelector(".js-result");

//     {
//         const result = () => {
//             const pln = plnElement.value;
//             const usd = usdElement.value;
//             const result = pln * usd;
//         }

//         formElement.addEventListener("submit", (event) => {
//             event.preventDefault();

//             resultElement.innerText = result.toFixed(2);
//         })
//     }

//     result();

// }





// jedna funkcja powinna realizować jedną rzecz
// funkcja ma zwracać wynik za pomocą słowa return, a nie poprzez przypisanie wyniku do zmiennej na zewnątrz fukncji
// jeśli funkcja coś liczy, to na koniec powinno być return i zwrócona ta wartość

// {
//     const formElement = document.querySelector(".js-form");
//     const plnElement = document.querySelector(".js-pln");
//     const usdElement = document.querySelector(".js-usd");
//     const resultElement = document.querySelector(".js-result");

//     formElement.addEventListener("submit", (event) => {
//         event.preventDefault();
//         const pln = plnElement.value;
//         const usd = usdElement.value;
//         return pln * usd;
//         resultElement.innerText = result.toFixed(2);
//     })

//    return ();
// }