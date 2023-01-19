// {
//     const formElement = document.querySelector(".js-form");

//     formElement.addEventListener("submit", (event) => {
//         const plnElement = document.querySelector(".js-pln");
//         const usdElement = document.querySelector(".js-usd");
//         const resultElement = document.querySelector(".js-result");
//         event.preventDefault();
//         const pln = plnElement.value;
//         const usd = usdElement.value;
//         const result = pln * usd;
//         resultElement.innerText = result.toFixed(2);
//     })
// }






{
    const formElement = document.querySelector(".js-form");
    const plnElement = document.querySelector(".js-pln");
    const usdElement = document.querySelector(".js-usd");
    const resultElement = document.querySelector(".js-result");

    {
        const calculateResoult = () => {
            const pln = plnElement.value;
            const usd = usdElement.value;
            const result = pln * usd;
        }
    
        formElement.addEventListener("submit", (event) => {
            event.preventDefault();
            
            resultElement.innerText = result.toFixed(2);
        })
    }


}