"use strict"

// Accessing All the Elements -
const num1 = document.getElementById('base-1');           // for selecting ->  FROM options
const num2 = document.getElementById('base-2');           // for selecting ->  TO options
const inputNum1 = document.getElementById('text-1')       // for selecting ->  FROM Text Block
const inputNum2 = document.getElementById('text-2')       // for selecting ->  TO Text Block
const conBtn = document.getElementById('convert');        // CONVERT Button
const swapBtn = document.getElementById('swap');          // SWAP Button

// Add some Event on RESET Button ------------------>
reset.addEventListener("click", function () {
    inputNum2.innerText = "";
    inputNum1.value = "";
    inputNum2.style.border = "none";
})

// --------------------------------------------------------------------------------------- //

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
            inputNum2.textContent = "Please Enter a Valid Number...";
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
            inputNum2.textContent = "Please Enter a Valid Number...";
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
            inputNum2.textContent = "Please Enter a Valid Number...";
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
            inputNum2.textContent = "Please Enter a Valid Number...";
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
            inputNum2.textContent = "Please Enter a Valid Number...";
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
            inputNum2.textContent = "Please Enter a Valid Number...";
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
            inputNum2.textContent = "Please Enter a Valid Number...";
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
            inputNum2.textContent = "Please Enter a Valid Number...";
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
            inputNum2.textContent = "Please Enter a Valid Number...";
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
            inputNum2.textContent = "Please Enter a Valid Number...";
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
            inputNum2.textContent = "Please Enter a Valid Number...";
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
            inputNum2.textContent = "Please Enter a Valid Number...";
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
            inputNum2.textContent = "Please Enter a Valid Number...";
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
            inputNum2.textContent = "Please Enter a Valid Number...";
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
            inputNum2.textContent = "Please Enter a Valid Number...";
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

swapBtn.addEventListener("click", function () {
    let optnTo = num2.value
    let optnFrom = num1.value;
    num1.value = optnTo;
    num2.value = optnFrom;
    let fromValue = inputNum1.value;
    let toValue = inputNum2.innerHTML;
    inputNum2.innerHTML = fromValue;
    inputNum1.value = toValue;

    reset.addEventListener("click", function () {
        inputNum2.innerText = "";
        inputNum1.value = "";
        inputNum2.style.border = "none";
    })
})


// --------------------------------------------------------------------------------------- //

//Change Background on click of - CONVERT & SWAP BUTTON ------------------>

// on click of - CONVERT BUTTON 
conBtn.addEventListener('click', function () {
    document.body.style.backgroundImage = "url(48074.webp)";
    // document.body.style.transition = "2s";
});


// on click of - SWAP BUTTON 
swapBtn.addEventListener('click', function () {
    document.body.style.backgroundImage = "url(abstract-1669201520809-2777.jpg)";
    // document.body.style.transition = "2s";
});

// on click of - RESET BUTTON 
reset.addEventListener("click", function () {
    document.body.style.backgroundImage = "url(images.jpg)";
})