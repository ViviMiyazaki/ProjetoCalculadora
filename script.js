// variáveis
const display = document.getElementById('display')
const numbers = document.querySelectorAll('[id*=tecla]')

const updateDisplay = (text) => {
  display.textContent += text
}

const insertNumber = (event) => updateDisplay(event.target.textContent)

numbers.forEach ( number =>
  number.addEventListener('click', insertNumber) 
);