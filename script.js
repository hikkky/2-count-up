const textNumber = document.getElementById('number');
let countButton = document.getElementById('btn');
var currentNumber = 0;

countButton.addEventListener('click',buttonClick);

function buttonClick() {
    currentNumber = currentNumber + 1;
    if (currentNumber > 10) {
        document.getElementById("btn").disabled = true;
    } else {
        textNumber.textContent = `${currentNumber}`;
    }
}