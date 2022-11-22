"use strict"

// Accessing All the Elements -
const num1 = document.getElementById('base-1');           // for selecting ->  FROM options
const num2 = document.getElementById('base-2');           // for selecting ->  TO options
const inputNum1 = document.getElementById('text-1')       // for selecting ->  FROM Text Block
const inputNum2 = document.getElementById('text-2')       // for selecting ->  TO Text Block
const conBtn = document.getElementById('convert');       // CONVERT Button
const swapBtn = document.getElementById('swap');             // SWAP Button


// Add some Event's on CONVERT Button ------------------>
//1). For converting BINARY to DECIMAL- 
conBtn.addEventListener('click', function () {
    var num_1 = +num1.value;
    var num_2 = +num2.value;

    if (num_1 === 2 && num_2 === 10) {
        var text = inputNum1.value;
        if (!isNaN(Number('0B' + text))) {
            var convertedVal = (parseInt(text, 2));
            inputNum2.textContent = convertedVal;
            inputNum2.style.color = '#81C784';
            inputNum2.style.fontSize = "13px";
            inputNum2.style.fontWeight = 'bold';
        }
        else {
            inputNum2.textContent = "Please Enter Valid Number...";
            inputNum2.style.color = '#EF5350';
            inputNum2.style.fontSize = "13px";
            inputNum2.style.fontWeight = 'bold';
        }
    }
})

// 2). For converting BINARY to OCTAL- 
conBtn.addEventListener('click', function () {
    var num_1 = +num1.value;
    var num_2 = +num2.value;
    if (num_1 === 2 && num_2 === 8) {
        var text = inputNum1.value;
        if (!isNaN(Number('0B' + text))) {
            var convertedVal = (parseInt(text, 2)).toString(8);
            inputNum2.textContent = convertedVal;
            inputNum2.style.color = '#81C784';
            inputNum2.style.fontSize = "13px";
            inputNum2.style.fontWeight = 'bold';
        }
        else {
            inputNum2.textContent = "Please Enter Valid Number...";
            inputNum2.style.color = '#EF5350';
            inputNum2.style.fontSize = "13px";
            inputNum2.style.fontWeight = 'bold';
        }
    }
})

// 3). For converting BINARY to HEXADECIMAL- 
conBtn.addEventListener('click', function () {
    var num_1 = +num1.value;
    var num_2 = +num2.value;
    if (num_1 === 2 && num_2 === 16) {
        var text = inputNum1.value;
        if (!isNaN(Number('0B' + text))) {
            var convertedVal = (parseInt(text, 2)).toString(16);
            inputNum2.textContent = convertedVal.toUpperCase();
            inputNum2.style.color = '#81C784';
            inputNum2.style.fontSize = "13px";
            inputNum2.style.fontWeight = 'bold';
        }
        else {
            inputNum2.textContent = "Please Enter Valid Number...";
            inputNum2.style.color = '#EF5350';
            inputNum2.style.fontSize = "13px";
            inputNum2.style.fontWeight = 'bold';
        }
    }
})

// 4). For converting BINARY to BINARY -
conBtn.addEventListener('click', function () {
    var num_1 = +num1.value;
    var num_2 = +num2.value;
    if (num_1 === 2 && num_2 === 2) {
        var text = inputNum1.value;
        if (!isNaN(Number('0B' + text))) {
            var convertedVal = text;
            inputNum2.textContent = convertedVal.toUpperCase();
            inputNum2.style.color = '#81C784';
            inputNum2.style.fontSize = "13px";
            inputNum2.style.fontWeight = 'bold';
        }
        else {
            inputNum2.textContent = "Please Enter Valid Number...";
            inputNum2.style.color = '#EF5350';
            inputNum2.style.fontSize = "13px";
            inputNum2.style.fontWeight = 'bold';

        }
    }
})

//-----------------------------------------------------//

//5). For converting HEXADECIMAL to BINARY - 
conBtn.addEventListener('click', function () {
    var num_1 = +num1.value;
    var num_2 = +num2.value;
    if (num_1 === 16 && num_2 === 2) {
        var text = inputNum1.value;
        if (!isNaN(Number('0x' + text))) {
            var convertedVal = (parseInt(text, 16)).toString(2);
            inputNum2.textContent = convertedVal;
            inputNum2.style.color = '#81C784';
            inputNum2.style.fontSize = "13px";
            inputNum2.style.fontWeight = 'bold';
        }
        else {
            inputNum2.textContent = "Please Enter Valid Number...";
            inputNum2.style.color = '#EF5350';
            inputNum2.style.fontSize = "13px";
            inputNum2.style.fontWeight = 'bold';
        }
    }
})

// 6). For converting HEXADECIMAL to DECIMAL - 
conBtn.addEventListener('click', function () {
    var num_1 = +num1.value;
    var num_2 = +num2.value;
    if (num_1 === 16 && num_2 === 10) {
        var text = inputNum1.value;
        if (!isNaN(Number('0x' + text))) {
            var convertedVal = (parseInt(text, 16));
            inputNum2.textContent = convertedVal;
            inputNum2.style.color = '#81C784';
            inputNum2.style.fontSize = "13px";
            inputNum2.style.fontWeight = 'bold';
        }
        else {
            inputNum2.textContent = "Please Enter Valid Number...";
            inputNum2.style.color = '#EF5350';
            inputNum2.style.fontSize = "13px";
            inputNum2.style.fontWeight = 'bold';
        }
    }
})

// 7). For converting HEXADECIMAL to OCTAL -  
conBtn.addEventListener('click', function () {
    var num_1 = +num1.value;
    var num_2 = +num2.value;
    if (num_1 === 16 && num_2 === 8) {
        var text = inputNum1.value;
        if (!isNaN(Number('0x' + text))) {
            var convertedVal = (parseInt(text, 16)).toString(8);
            inputNum2.textContent = convertedVal;
            inputNum2.style.color = '#81C784';
            inputNum2.style.fontSize = "13px";
            inputNum2.style.fontWeight = 'bold';
        }
        else {
            inputNum2.textContent = "Please Enter Valid Number...";
            inputNum2.style.color = '#EF5350';
            inputNum2.style.fontSize = "13px";
            inputNum2.style.fontWeight = 'bold';
        }
    }
})

// 8). For converting HEXADECIMAL to HEXADECIMAL - 
conBtn.addEventListener('click', function () {
    var num_1 = +num1.value;
    var num_2 = +num2.value;
    if (num_1 === 16 && num_2 === 16) {
        var text = inputNum1.value;
        if (!isNaN(Number('0x' + text))) {
            var convertedVal = text;
            inputNum2.textContent = convertedVal;
            inputNum2.style.color = '#81C784';
            inputNum2.style.fontSize = "13px";
            inputNum2.style.fontWeight = 'bold';
        }
        else {
            inputNum2.textContent = "Please Enter Valid Number...";
            inputNum2.style.color = '#EF5350';
            inputNum2.style.fontSize = "13px";
            inputNum2.style.fontWeight = 'bold';
        }
    }
})

//-----------------------------------------------------//

// 9).  For converting DECIMAL to BINARY -  
conBtn.addEventListener('click', function () {
    var num_1 = +num1.value;
    var num_2 = +num2.value;
    if (num_1 === 10 && num_2 === 2) {
        var text = inputNum1.value;
        if (isNaN(text)) {
            inputNum2.textContent = "Please Enter Valid Number...";
            inputNum2.style.color = '#EF5350';
            inputNum2.style.fontSize = "13px";
            inputNum2.style.fontWeight = 'bold';
        }
        else {
            var convertedVal = (parseInt(text, 10)).toString(2);
            inputNum2.textContent = convertedVal;
            inputNum2.style.color = '#81C784';
            inputNum2.style.fontSize = "13px";
            inputNum2.style.fontWeight = 'bold';
        }
    }
})

// 10). For converting DECIMAL to OCTAL -  
conBtn.addEventListener('click', function () {
    var num_1 = +num1.value;
    var num_2 = +num2.value;
    if (num_1 === 10 && num_2 === 8) {
        var text = inputNum1.value;
        if (isNaN(text)) {
            inputNum2.textContent = "Please Enter Valid Number...";
            inputNum2.style.color = '#EF5350';
            inputNum2.style.fontSize = "13px";
            inputNum2.style.fontWeight = 'bold';
        }
        else {
            var convertedVal = (parseInt(text, 10)).toString(8);
            inputNum2.textContent = convertedVal;
            inputNum2.style.color = '#81C784';
            inputNum2.style.fontSize = "13px";
            inputNum2.style.fontWeight = 'bold';
        }
    }
})

// 11). For converting DECIMAL to HEXADECIMAL -  
conBtn.addEventListener('click', function () {
    var num_1 = +num1.value;
    var num_2 = +num2.value;
    if (num_1 === 10 && num_2 === 16) {
        var text = inputNum1.value;
        if (isNaN(text)) {
            inputNum2.textContent = "Please Enter Valid Number...";
            inputNum2.style.color = '#EF5350';
            inputNum2.style.fontSize = "13px";
            inputNum2.style.fontWeight = 'bold';
        }
        else {
            var convertedVal = (parseInt(text, 10)).toString(16);
            inputNum2.textContent = convertedVal.toUpperCase();
            inputNum2.style.color = '#81C784';
            inputNum2.style.fontSize = "13px";
            inputNum2.style.fontWeight = 'bold';
        }
    }
})

// 12). For converting DECIMAL to DECIMAL - 
conBtn.addEventListener('click', function () {
    var num_1 = +num1.value;
    var num_2 = +num2.value;
    if (num_1 === 10 && num_2 === 10) {
        var text = inputNum1.value;
        var convertedVal = text;
        if (isNaN(text)) {
            inputNum2.textContent = "Please Enter Valid Number...";
            inputNum2.style.color = '#EF5350';
            inputNum2.style.fontSize = "13px";
            inputNum2.style.fontWeight = 'bold';
        }
        else {
            inputNum2.textContent = convertedVal.toUpperCase();
            inputNum2.style.color = '#81C784';
            inputNum2.style.fontSize = "13px";
            inputNum2.style.fontWeight = 'bold';
        }
    }
})

//-----------------------------------------------------//

// 13). For converting OCTAL to BINARY - 
conBtn.addEventListener('click', function () {
    var num_1 = +num1.value;
    var num_2 = +num2.value;
    if (num_1 === 8 && num_2 === 2) {
        var text = inputNum1.value;
        if (!isNaN(Number('0O' + text))) {
            var convertedVal = parseInt(text, 8).toString(2);
            inputNum2.textContent = convertedVal;
            inputNum2.style.color = '#81C784';
            inputNum2.style.fontSize = "13px";
            inputNum2.style.fontWeight = 'bold';
        }
        else {
            inputNum2.textContent = "Please Enter Valid Number...";
            inputNum2.style.color = '#EF5350';
            inputNum2.style.fontSize = "13px";
            inputNum2.style.fontWeight = 'bold';
        }
    }
})

// 14). For converting OCTAL to DECIMAL -
conBtn.addEventListener('click', function () {
    var num_1 = +num1.value;
    var num_2 = +num2.value;
    if (num_1 === 8 && num_2 === 10) {
        var text = inputNum1.value;
        if (!isNaN(Number('0O' + text))) {
            var convertedVal = parseInt(text, 8);
            inputNum2.textContent = convertedVal;
            inputNum2.style.color = '#81C784';
            inputNum2.style.fontSize = "13px";
            inputNum2.style.fontWeight = 'bold';
        }
        else {
            inputNum2.textContent = "Please Enter Valid Number...";
            inputNum2.style.color = '#EF5350';
            inputNum2.style.fontSize = "13px";
            inputNum2.style.fontWeight = 'bold';
        }
    }
})

// 15). For converting OCTAL to HEXADECIMAL - 
conBtn.addEventListener('click', function () {
    var num_1 = +num1.value;
    var num_2 = +num2.value;
    if (num_1 === 8 && num_2 === 16) {
        var text = inputNum1.value;
        if (!isNaN(Number('0O' + text))) {
            var convertedVal = parseInt(text, 8).toString(16);
            inputNum2.textContent = convertedVal.toUpperCase();
            inputNum2.style.color = '#81C784';
            inputNum2.style.fontSize = "13px";
            inputNum2.style.fontWeight = 'bold';
        }
        else {
            inputNum2.textContent = "Please Enter Valid Number...";
            inputNum2.style.color = '#EF5350';
            inputNum2.style.fontSize = "13px";
            inputNum2.style.fontWeight = 'bold';
        }
    }
})

// 16). For converting OCTAL to OCTAL - 
conBtn.addEventListener('click', function () {
    var num_1 = +num1.value;
    var num_2 = +num2.value;
    if (num_1 === 8 && num_2 === 8) {
        var text = inputNum1.value;
        if (!isNaN(Number('0O' + text))) {
            var convertedVal = text;
            inputNum2.textContent = convertedVal;
            inputNum2.style.color = '#81C784';
            inputNum2.style.fontSize = "13px";
            inputNum2.style.fontWeight = 'bold';
        }
        else {
            inputNum2.textContent = "Please Enter Valid Number...";
            inputNum2.style.color = '#EF5350';
            inputNum2.style.fontSize = "13px";
            inputNum2.style.fontWeight = 'bold';
        }
    }
})

// --------------------------------------------------------------------------------------- //

// Add some Event's on SWAP Button ------------------>

//1). For converting BINARY to DECIMAL- 
swapBtn.addEventListener('click', function () {
    var num_1 = +num1.value;
    var num_2 = +num2.value;
    if (num_2 === 2 && num_1 === 10) {
        var text = inputNum2.value;
        if (!isNaN(Number('0B' + text))) {
            var convertedVal = (parseInt(text, 2));
            inputNum1.textContent = convertedVal;
            inputNum1.style.color = '#81C784';
            inputNum1.style.fontSize = "13px";
            inputNum1.style.fontWeight = 'bold';
        }
        else {
            inputNum1.textContent = "Please Enter Valid Number...";
            inputNum1.style.color = '#EF5350';
            inputNum1.style.fontSize = "13px";
            inputNum1.style.fontWeight = 'bold';
        }
    }
})

// 2). For converting BINARY to OCTAL- 
swapBtn.addEventListener('click', function () {
    var num_1 = +num1.value;
    var num_2 = +num2.value;
    if (num_2 === 2 && num_1 === 8) {
        var text = inputNum2.value;
        if (!isNaN(Number('0B' + text))) {
            var convertedVal = (parseInt(text, 2)).toString(8);
            inputNum1.textContent = convertedVal;
            inputNum1.style.color = '#81C784';
            inputNum1.style.fontSize = "13px";
            inputNum1.style.fontWeight = 'bold';
        }
        else {
            inputNum1.textContent = "Please Enter Valid Number...";
            inputNum1.style.color = '#EF5350';
            inputNum1.style.fontSize = "13px";
            inputNum1.style.fontWeight = 'bold';
        }
    }
})

// 3). For converting BINARY to HEXADECIMAL- 
swapBtn.addEventListener('click', function () {
    var num_1 = +num1.value;
    var num_2 = +num2.value;
    if (num_2 === 2 && num_1 === 16) {
        var text = inputNum2.value;
        if (!isNaN(Number('0B' + text))) {
            var convertedVal = (parseInt(text, 2)).toString(16);
            inputNum1.textContent = convertedVal.toUpperCase();
            inputNum1.style.color = '#81C784';
            inputNum1.style.fontSize = "13px";
            inputNum1.style.fontWeight = 'bold';
        }
        else {
            inputNum1.textContent = "Please Enter Valid Number...";
            inputNum1.style.color = '#EF5350';
            inputNum1.style.fontSize = "13px";
            inputNum1.style.fontWeight = 'bold';
        }
    }
})

// 4). For converting BINARY to BINARY -
swapBtn.addEventListener('click', function () {
    var num_1 = +num1.value;
    var num_2 = +num2.value;
    if (num_1 === 2 && num_2 === 2) {
        var text = inputNum2.value;
        if (!isNaN(Number('0B' + text))) {
            var convertedVal = text;
            inputNum1.textContent = convertedVal;
            inputNum1.style.color = '#81C784';
            inputNum1.style.fontSize = "13px";
            inputNum1.style.fontWeight = 'bold';
        }
        else {
            inputNum1.textContent = "Please Enter Valid Number...";
            inputNum1.style.color = '#EF5350';
            inputNum1.style.fontSize = "13px";
            inputNum1.style.fontWeight = 'bold';
        }
    }
})

//-----------------------------------------------------//

//5). For converting HEXADECIMAL to BINARY - 
swapBtn.addEventListener('click', function () {
    var num_1 = +num1.value;
    var num_2 = +num2.value;
    if (num_2 === 16 && num_1 === 2) {
        var text = inputNum2.value;
        if (!isNaN(Number('0x' + text))) {
            var convertedVal = (parseInt(text, 16)).toString(2);
            inputNum1.textContent = convertedVal;
            inputNum1.style.color = '#81C784';
            inputNum1.style.fontSize = "13px";
            inputNum1.style.fontWeight = 'bold';
        }
        else {
            inputNum1.textContent = "Please Enter Valid Number...";
            inputNum1.style.color = '#EF5350';
            inputNum1.style.fontSize = "13px";
            inputNum1.style.fontWeight = 'bold';
        }
    }
})

// 6). For converting HEXADECIMAL to DECIMAL - 
swapBtn.addEventListener('click', function () {
    var num_1 = +num1.value;
    var num_2 = +num2.value;
    if (num_2 === 16 && num_1 === 10) {
        var text = inputNum2.value;
        if (!isNaN(Number('0x' + text))) {
            var convertedVal = (parseInt(text, 16));
            inputNum1.textContent = convertedVal;
            inputNum1.style.color = '#81C784';
            inputNum1.style.fontSize = "13px";
            inputNum1.style.fontWeight = 'bold';
        }
        else {
            inputNum1.textContent = "Please Enter Valid Number...";
            inputNum1.style.color = '#EF5350';
            inputNum1.style.fontSize = "13px";
            inputNum1.style.fontWeight = 'bold';
        }
    }
})

// 7). For converting HEXADECIMAL to OCTAL -  
swapBtn.addEventListener('click', function () {
    var num_1 = +num1.value;
    var num_2 = +num2.value;
    if (num_2 === 16 && num_1 === 8) {
        var text = inputNum2.value;
        if (!isNaN(Number('0x' + text))) {
            var convertedVal = (parseInt(text, 16)).toString(8);
            inputNum1.textContent = convertedVal;
            inputNum1.style.color = '#81C784';
            inputNum1.style.fontSize = "13px";
            inputNum1.style.fontWeight = 'bold';
        }
        else {
            inputNum1.textContent = "Please Enter Valid Number...";
            inputNum1.style.color = '#EF5350';
            inputNum1.style.fontSize = "13px";
            inputNum1.style.fontWeight = 'bold';
        }
    }
})

// 8). For converting HEXADECIMAL to HEXADECIMAL -
swapBtn.addEventListener('click', function () {
    var num_1 = +num1.value;
    var num_2 = +num2.value;
    if (num_1 === 16 && num_2 === 16) {
        var text = inputNum2.value;
        if (!isNaN(Number('0x' + text))) {
            var convertedVal = text;
            inputNum1.textContent = convertedVal;
            inputNum1.style.color = '#81C784';
            inputNum1.style.fontSize = "13px";
            inputNum1.style.fontWeight = 'bold';
        }
        else {
            inputNum1.textContent = "Please Enter Valid Number...";
            inputNum1.style.color = '#EF5350';
            inputNum1.style.fontSize = "13px";
            inputNum1.style.fontWeight = 'bold';
        }
    }
})

//-----------------------------------------------------//

// 9).  For converting DECIMAL to BINARY - 
swapBtn.addEventListener('click', function () {
    var num_1 = +num1.value;
    var num_2 = +num2.value;
    if (num_2 === 10 && num_1 === 2) {
        var text = inputNum2.value;
        if (isNaN(text)) {
            inputNum1.textContent = "Please Enter Valid Number...";
            inputNum1.style.color = '#EF5350';
            inputNum1.style.fontSize = "13px";
            inputNum1.style.fontWeight = 'bold';
        }
        else {
            var convertedVal = (parseInt(text, 10)).toString(2);
            inputNum1.textContent = convertedVal;
            inputNum1.style.color = '#81C784';
            inputNum1.style.fontSize = "13px";
            inputNum1.style.fontWeight = 'bold';
        }
    }
})

// 10). For converting DECIMAL to OCTAL -  
swapBtn.addEventListener('click', function () {
    var num_1 = +num1.value;
    var num_2 = +num2.value;
    if (num_2 === 10 && num_1 === 8) {
        var text = inputNum2.value;
        if (isNaN(text)) {
            inputNum1.textContent = "Please Enter Valid Number...";
            inputNum1.style.color = '#EF5350';
            inputNum1.style.fontSize = "13px";
            inputNum1.style.fontWeight = 'bold';
        }
        else {
            var convertedVal = (parseInt(text, 10)).toString(8);
            inputNum1.textContent = convertedVal;
            inputNum1.style.color = '#81C784';
            inputNum1.style.fontSize = "13px";
            inputNum1.style.fontWeight = 'bold';
        }
    }
})

// 11). For converting DECIMAL to HEXADECIMAL -  
swapBtn.addEventListener('click', function () {
    var num_1 = +num1.value;
    var num_2 = +num2.value;
    if (num_2 === 10 && num_1 === 16) {
        var text = inputNum2.value;
        if (isNaN(text)) {
            inputNum1.textContent = "Please Enter Valid Number...";
            inputNum1.style.color = '#EF5350';
            inputNum1.style.fontSize = "13px";
            inputNum1.style.fontWeight = 'bold';
        }
        else {
            var convertedVal = (parseInt(text, 10)).toString(16);
            inputNum1.textContent = convertedVal.toUpperCase();
            inputNum1.style.color = '#81C784';
            inputNum1.style.fontSize = "13px";
            inputNum1.style.fontWeight = 'bold';
        }
    }
})

// 12). For converting DECIMAL to DECIMAL -
swapBtn.addEventListener('click', function () {
    var num_1 = +num1.value;
    var num_2 = +num2.value;
    if (num_1 === 10 && num_2 === 10) {
        var text = inputNum2.value;
        if (isNaN(text)) {
            inputNum1.textContent = "Please Enter Valid Number...";
            inputNum1.style.color = '#EF5350';
            inputNum1.style.fontSize = "13px";
            inputNum1.style.fontWeight = 'bold';
        }
        else {
            var convertedVal = text;
            inputNum1.textContent = convertedVal.toUpperCase();
            inputNum1.style.color = '#81C784';
            inputNum1.style.fontSize = "13px";
            inputNum1.style.fontWeight = 'bold';
        }
    }
})

//-----------------------------------------------------//

// 13). For converting OCTAL to BINARY -
swapBtn.addEventListener('click', function () {
    var num_1 = +num1.value;
    var num_2 = +num2.value;
    if (num_2 === 8 && num_1 === 2) {
        var text = inputNum2.value;
        if (!isNaN(Number('0O' + text))) {
            var convertedVal = parseInt(text, 8).toString(2);
            inputNum1.textContent = convertedVal;
            inputNum1.style.color = '#81C784';
            inputNum1.style.fontSize = "13px";
            inputNum1.style.fontWeight = 'bold';
        }
        else {
            inputNum1.textContent = "Please Enter Valid Number...";
            inputNum1.style.color = '#EF5350';
            inputNum1.style.fontSize = "13px";
            inputNum1.style.fontWeight = 'bold';
        }
    }
})

// 14). For converting OCTAL to DECIMAL -
swapBtn.addEventListener('click', function () {
    var num_1 = +num1.value;
    var num_2 = +num2.value;
    if (num_2 === 8 && num_1 === 10) {
        var text = inputNum2.value;
        if (!isNaN(Number('0O' + text))) {
            var convertedVal = parseInt(text, 8);
            inputNum1.textContent = convertedVal;
            inputNum1.style.color = '#81C784';
            inputNum1.style.fontSize = "13px";
            inputNum1.style.fontWeight = 'bold';
        }
        else {
            inputNum1.textContent = "Please Enter Valid Number...";
            inputNum1.style.color = '#EF5350';
            inputNum1.style.fontSize = "13px";
            inputNum1.style.fontWeight = 'bold';
        }
    }
})

// 15). For converting OCTAL to HEXADECIMAL - 
swapBtn.addEventListener('click', function () {
    var num_1 = +num1.value;
    var num_2 = +num2.value;
    if (num_2 === 8 && num_1 === 16) {
        var text = inputNum2.value;
        if (!isNaN(Number('0O' + text))) {
            var convertedVal = parseInt(text, 8).toString(16);
            inputNum1.textContent = convertedVal.toUpperCase();
            inputNum1.style.color = '#81C784';
            inputNum1.style.fontSize = "13px";
            inputNum1.style.fontWeight = 'bold';
        }
        else {
            inputNum1.textContent = "Please Enter Valid Number...";
            inputNum1.style.color = '#EF5350';
            inputNum1.style.fontSize = "13px";
            inputNum1.style.fontWeight = 'bold';
        }
    }
})

// 16). For converting OCTAL to OCTAL - 
swapBtn.addEventListener('click', function () {
    var num_1 = +num1.value;
    var num_2 = +num2.value;
    if (num_1 === 8 && num_2 === 8) {
        var text = inputNum2.value;
        if (!isNaN(Number('0O' + text))) {
            var convertedVal = text;
            inputNum1.textContent = convertedVal;
            inputNum1.style.color = '#81C784';
            inputNum1.style.fontSize = "13px";
            inputNum1.style.fontWeight = 'bold';
        }
        else {
            inputNum1.textContent = "Please Enter Valid Number...";
            inputNum1.style.color = '#EF5350';
            inputNum1.style.fontSize = "13px";
            inputNum1.style.fontWeight = 'bold';
        }
    }
})