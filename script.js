const textNumber = document.getElementById('number');
let countButton = document.getElementById('btn');
var currentNumber = 0;

countButton.addEventListener('click',buttonClick);

function buttonClick() {
    currentNumber = currentNumber + 1;
    textNumber.textContent = `${currentNumber}`;
}