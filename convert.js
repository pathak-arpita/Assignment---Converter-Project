"use strick"

// Accessing All the Elements -
const num1 = document.getElementById('base-1');           // for selecting ->  FROM options
const num2 = document.getElementById('base-2');           // for selecting ->  TO options
const inputNum1 = document.getElementById('text-1')       // for selecting ->  FROM Text Block
const inputNum2 = document.getElementById('text-2')       // for selecting ->  TO Text Block
const conBtn = document.getElementById('convert');       // CONVERT Button
const swapBtn = document.getElementById('swap');             // SWAP Button


// Add some Event's on CONVERT Button ------>
// 1). For converting BINARY to DECIMAL- (CORRECT)
conBtn.addEventListener('click', function () {
    var num = inputNum1.value;
    var base = 2;
    var convertedVal = (parseInt(num, base));  //toString -> will conver num to given base -> return STRING
    inputNum2.textContent = convertedVal;
    inputNum2.style.color = '#81C784';
    inputNum2.style.fontSize = "15px";
    inputNum2.style.fontWeight = 'bold';
})

// 2). For converting BINARY to OCTAL- (CORRECT)
conBtn.addEventListener('click', function () {
    var num = inputNum1.value;
    var base = 2;
    var convertedVal = (parseInt(num, base)).toString(8);  //toString -> will conver num to given base -> return STRING
    inputNum2.textContent = convertedVal.toUpperCase();
    inputNum2.style.color = '#81C784';
    inputNum2.style.fontSize = "15px";
    inputNum2.style.fontWeight = 'bold';
})

// 3). For converting BINARY to HEXADECIMAL- (CORRECT)
conBtn.addEventListener('click', function () {
    var num = inputNum1.value;
    var base = 2;
    var convertedVal = (parseInt(num, base)).toString(16);  //toString -> will conver num to given base -> return STRING
    inputNum2.textContent = convertedVal.toUpperCase();
    inputNum2.style.color = '#81C784';
    inputNum2.style.fontSize = "15px";
    inputNum2.style.fontWeight = 'bold';
})

// 4). For converting BINARY to BINARY -(LOGIC NOT FOUND)

//5). For converting HEXADECIMAL to BINARY - (CORRECT)
conBtn.addEventListener('click', function () {
    var num = inputNum1.value;
    var base = 16;
    var convertedVal = (parseInt(num, base)).toString(2);  //toString -> will conver num to given base -> return STRING
    inputNum2.textContent = convertedVal;
    inputNum2.style.color = '#81C784';
    inputNum2.style.fontSize = "15px";
    inputNum2.style.fontWeight = 'bold';
})

// 6). For converting HEXADECIMAL to DECIMAL - (CORRECT)
conBtn.addEventListener('click', function () {
    var num = inputNum1.value;
    var base = 16;
    var convertedVal =(parseInt(num, base));  //toString -> will conver num to given base -> return STRING
    inputNum2.textContent = convertedVal;
    inputNum2.style.color = '#81C784';
    inputNum2.style.fontSize = "15px";
    inputNum2.style.fontWeight = 'bold';

})