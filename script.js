let userInput = document.getElementById("userInput");
let expression = '';

function press(num){
    expression+=num;
    userInput.value=expression;
}

function calculate(){
    userInput.value = eval(expression);
    expression = '';
}

function erease(){
    expression = '';
    userInput.value = expression;
}