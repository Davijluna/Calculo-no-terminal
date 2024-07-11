let textDisplay = document.querySelector(".display")

const teste = (numero) => {
        let numberSize = textDisplay.innerHTML
        if (numberSize.length < 18) {

            textDisplay.innerText += numero
            console.log(textDisplay)
        } else {
            alert("Limite de caracteres 18 !!!!!")
        }


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