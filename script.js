let textDisplay = document.querySelector(".display")

const teste = (numero) => {
    console.log(typeof numero)

        textDisplay.innerText += numero
        console.log(textDisplay)


}

const operadores = (simb) => {
    if(simb != "=") {
        textDisplay.innerText += simb
    }
    textDisplay
}


const clean = () => {
    textDisplay.innerText = ''
}

const back = () => {
    let decrement = textDisplay.innerHTML
    textDisplay.innerHTML = decrement.substring(0, decrement.length -1);
}

const calcular = () => {
    if (textDisplay) {
        textDisplay.innerHTML = eval(textDisplay.innerHTML)
    } else {
        textDisplay.innerHTML = 0
    }
}