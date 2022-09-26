// variáveis
const display = document.getElementById('display')
const numbers = document.querySelectorAll('[id*=tecla]')
const operators = document.querySelectorAll('.operator')

let newNumber = true;
let operator;
let previousNumber;

const pendingOperation = () => operator != undefined;

const calculate = () => {
  if(pendingOperation()) {
    const presentNumber = parseFloat(display.textContent.replace(',', '.'));
    newNumber = true
    const result = eval(`${previousNumber}${operator}${presentNumber}`)
    updateDisplay(result)
  }
}

const updateDisplay = (text) => {
  if(newNumber) {
    display.textContent = text.toLocaleString('BR')
    newNumber = false
  } else {
    display.textContent += text.toLocaleString('BR')
  }
}

const insertNumber = (event) => 
  updateDisplay(event.target.textContent
)

numbers.forEach ( number =>
  number.addEventListener('click', insertNumber) 
);

const selectOperator = (event) => {
  if(!newNumber) {
    calculate()
    newNumber = true
    operator = event.target.textContent
    previousNumber = parseFloat(display.textContent.replace(',','.'))
    console.log(operator)
 }
}

operators.forEach(operator => 
  operator.addEventListener('click', selectOperator)
)

const equal = () => {
  calculate()
  operator = undefined
}

document.getElementById('equal').addEventListener('click', equal)

const clear = () => { 
  display.textContent = ''
}
document.getElementById('clear').addEventListener('click', clear)

const percentage = () => {
  eval(presentNumber / 100) * previousNumber
 updateDisplay(percentage)
}
document.getElementById('percentage').addEventListener('click', percentage)

const removeLastNumber = () => display.textContent = display.textContent.slice(0, -1)
document.getElementById('backspace').addEventListener('click', removeLastNumber)

const haveDecimal = () => display.textContent.indexOf(',') != -1;
const haveValue = () => display.textContent.length > 0;
const insertDecimal = () => {
  if(!haveDecimal()) {
    if(haveValue()){
      updateDisplay(',')
    }else {
      updateDisplay('0,')
    }
  }
}
document.getElementById('decimal').addEventListener('click', insertDecimal)