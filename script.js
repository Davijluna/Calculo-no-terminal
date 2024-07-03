let textDisplay = document.querySelector(".display")

const teste = (numero) => {
    textDisplay.innerText += numero
    console.log(textDisplay)

}

const operadores = (simb) => {
    if(simb != "=") {
        textDisplay.innerText += simb
    }
    textDisplay
}


const clear = () => {
    textDisplay.innerText = ''
}
console.log(textDisplay.innerText)