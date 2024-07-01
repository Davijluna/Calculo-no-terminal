let textDisplay = document.querySelector(".display")

const teste = (numero) => {
    textDisplay.innerText += numero
    console.log(textDisplay)

}

const operadores = (simb) => {
    console.log(simb)
}

console.log(textDisplay.innerText)