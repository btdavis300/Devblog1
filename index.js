let add1 = document.querySelector('#add1')
let subtract1 = document.querySelector('#subtract1')
let counter = document.querySelector('#counter')

add1.addEventListener('click', counterPlus)
subtract1.addEventListener('click', counterMinus)

function counterPlus() {
    counter.textContent = Number(counter.textContent) + 1
}

function counterMinus() {
    counter.textContent = Number(counter.textContent) - 1
}
