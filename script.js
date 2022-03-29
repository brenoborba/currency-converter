const formulario = document.getElementById("currencyForm")
const usdInput = document.getElementById("usdInput")
const output = document.querySelector('.output')
var url = 'https://free.currconv.com/api/v7/convert?q=USD_BRL,BRL_USD&compact=ultra&apiKey=0c71d310fb1565cfde6c';


function displayResult(usdToday, usdValue){
    output.innerHTML = `\u00A0R$${Number(usdToday * usdValue).toFixed(2)}`

}

formulario.onsubmit = e => {
    var usdValue = usdInput.value
    var usdToday

    e.preventDefault()

    fetch(url)
    .then(res => res.json())
    .then(data => usdToday = data.USD_BRL)
    .then(() => displayResult(usdToday, usdValue))
}