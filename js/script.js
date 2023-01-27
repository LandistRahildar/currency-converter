{
    const formElement = document.querySelector(".js-form");

    formElement.addEventListener("submit", (event) => {
        event.preventDefault();
        const plnElement = document.querySelector(".js-pln");
        const usdElement = document.querySelector(".js-usd");
        const resultElement = document.querySelector(".js-result");
        const pln = plnElement.value;
        const usd = usdElement.value;
        const result = pln * usd;
        resultElement.innerText = result.toFixed(2);
    })
}










// {
//     const formElement = document.querySelector(".js-form");
//     const amountElement = document.querySelector(".js-amount");
//     const currencyElement = document.querySelector(".js-currency");
//     const resultElement = document.querySelector(".js-result");

//     const rateEUR = 4.71;
//     const rateGBP = 5.33;
//     const rateUSD = 4.33;


//     formElement.addEventListener("submit", (event) => {
//         event.preventDefault();
//     })

//     const amount = +amountElement.value;
//     const currency = currencyElement.value;

//     let result;

//     switch (currency) {
//         case "EUR":
//             result = amount / rateEUR;
//             break;

//         case "GBP":
//             result = amount / rateGBP;
//             break;

//         case "USD":
//             result = amount / rateUSD;
//             break;
//     }


//     resultElement.innerHTML = `${amount.toFixed(2)} PLN = <strong>${result.toFixed(2)} ${currency}</strong>`;
 
// }














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