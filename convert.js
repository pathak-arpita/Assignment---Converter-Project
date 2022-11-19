"use strick"

// Accessing All the Elements -
const num1 = document.getElementById('base-1');           // for selecting ->  FROM options
const num2 = document.getElementById('base-2');           // for selecting ->  TO options
const inputNum1 = document.getElementById('text-1')       // for selecting ->  FROM Text Block
const inputNum2 = document.getElementById('text-2')       // for selecting ->  TO Text Block
const conBtn = document.getElementById('convert');       // CONVERT Button
const swapBtn = document.getElementById('swap');             // SWAP Button


// Add some Event's on CONVERT Button ------------------>
// 1). For converting BINARY to DECIMAL- 
conBtn.addEventListener('click', function () {
    var num = inputNum1.value;
    var base = 2;
    var convertedVal = (parseInt(num, base));  //toString -> will conver num to given base -> return STRING
    inputNum2.textContent = convertedVal;
    inputNum2.style.color = '#81C784';
    inputNum2.style.fontSize = "15px";
    inputNum2.style.fontWeight = 'bold';
})

// 2). For converting BINARY to OCTAL- 
conBtn.addEventListener('click', function () {
    var num = inputNum1.value;
    var base = 2;
    var convertedVal = (parseInt(num, base)).toString(8);  //toString -> will conver num to given base -> return STRING
    inputNum2.textContent = convertedVal.toUpperCase();
    inputNum2.style.color = '#81C784';
    inputNum2.style.fontSize = "15px";
    inputNum2.style.fontWeight = 'bold';
})

// 3). For converting BINARY to HEXADECIMAL- 
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

//5). For converting HEXADECIMAL to BINARY - 
conBtn.addEventListener('click', function () {
    var num = inputNum1.value;
    var base = 16;
    var convertedVal = (parseInt(num, base)).toString(2);  //toString -> will conver num to given base -> return STRING
    inputNum2.textContent = convertedVal;
    inputNum2.style.color = '#81C784';
    inputNum2.style.fontSize = "15px";
    inputNum2.style.fontWeight = 'bold';
})

// 6). For converting HEXADECIMAL to DECIMAL - 
conBtn.addEventListener('click', function () {
    var num = inputNum1.value;
    var base = 16;
    var convertedVal =(parseInt(num, base));  //toString -> will conver num to given base -> return STRING
    inputNum2.textContent = convertedVal;
    inputNum2.style.color = '#81C784';
    inputNum2.style.fontSize = "15px";
    inputNum2.style.fontWeight = 'bold';

})

// 7). For converting HEXADECIMAL to OCTAL -  
conBtn.addEventListener('click', function () {
    var num = inputNum1.value;
    var base = 16;
    var convertedVal = parseInt(num, base).toString(8);  //toString -> will conver num to given base -> return STRING
    inputNum2.textContent = convertedVal.toUpperCase();
    inputNum2.style.color = '#81C784';
    inputNum2.style.fontSize = "15px";
    inputNum2.style.fontWeight = 'bold';
})

// 8). For converting HEXADECIMAL to HEXADECIMAL -(LOGIC NOT FOUND)

// 9).  For converting DECIMAL to BINARY -  
conBtn.addEventListener('click', function () {
    var num = inputNum1.value;
    var base = 10;
    var convertedVal = (parseInt(num, base)).toString(2);  //toString -> will conver num to given base -> return STRING
    inputNum2.textContent = convertedVal;
    inputNum2.style.color = '#81C784';
    inputNum2.style.fontSize = "15px";
    inputNum2.style.fontWeight = 'bold';
})

// 10). For converting DECIMAL to OCTAL -  
conBtn.addEventListener('click', function () {
    var num = inputNum1.value;
    var base = 10;
    var convertedVal = (parseInt(num, base)).toString(8);  //toString -> will conver num to given base -> return STRING
    inputNum2.textContent = convertedVal;
    inputNum2.style.color = '#81C784';
    inputNum2.style.fontSize = "15px";
    inputNum2.style.fontWeight = 'bold';
})

// 11). For converting DECIMAL to HEXADECIMAL -  
conBtn.addEventListener('click', function () {
    var num = inputNum1.value;
    var base = 10;
    var convertedVal = parseInt(num, base).toString(16);  //toString -> will conver num to given base -> return STRING
    inputNum2.textContent = convertedVal.toUpperCase();
    inputNum2.style.color = '#81C784';
    inputNum2.style.fontSize = "15px";
    inputNum2.style.fontWeight = 'bold';
})

// 12). For converting DECIMAL to DECIMAL - (LOGIC NOT FOUND)

// 13). For converting OCTAL to BINARY -
conBtn.addEventListener('click', function () {
    var num = inputNum1.value;
    var base = 8;
    var convertedVal = parseInt(num, base).toString(2);  //toString -> will conver num to given base -> return STRING
    inputNum2.textContent = convertedVal;
    inputNum2.style.color = '#81C784';
    inputNum2.style.fontSize = "15px";
    inputNum2.style.fontWeight = 'bold';
})  

// 14). For converting OCTAL to DECIMAL -
conBtn.addEventListener('click', function () {
    var num = inputNum1.value;
    var base = 8;
    var convertedVal = parseInt(num, base);  //toString -> will conver num to given base -> return STRING
    inputNum2.textContent = convertedVal;
    inputNum2.style.color = '#81C784';
    inputNum2.style.fontSize = "15px";
    inputNum2.style.fontWeight = 'bold';
})  

// 15). For converting OCTAL to HEXADECIMAL - 
conBtn.addEventListener('click', function () {
    var num = inputNum1.value;
    var base = 8;
    var convertedVal = parseInt(num, base).toString(16);  //toString -> will conver num to given base -> return STRING
    inputNum2.textContent = convertedVal.toUpperCase();
    inputNum2.style.color = '#81C784';
    inputNum2.style.fontSize = "15px";
    inputNum2.style.fontWeight = 'bold';
})  

// 16). For converting OCTAL to OCTAL - (LOGIC NOT FOUND)

// --------------------------------------------------------------------------------------- //

// Add some Event's on SWAP Button ------------------>
// 1). For converting BINARY to DECIMAL- 
swapBtn.addEventListener('click', function () {
    var num = inputNum2.value;
    var base = 2;
    var convertedVal = (parseInt(num, base));  //toString -> will conver num to given base -> return STRING
    inputNum1.textContent = convertedVal;
    inputNum1.style.color = '#81C784';
    inputNum1.style.fontSize = "15px";
    inputNum1.style.fontWeight = 'bold';
})

// 2). For converting BINARY to OCTAL- 
swapBtn.addEventListener('click', function () {
    var num = inputNum2.value;
    var base = 2;
    var convertedVal = (parseInt(num, base)).toString(8);  //toString -> will conver num to given base -> return STRING
    inputNum1.textContent = convertedVal.toUpperCase();
    inputNum1.style.color = '#81C784';
    inputNum1.style.fontSize = "15px";
    inputNum1.style.fontWeight = 'bold';
})

// 3). For converting BINARY to HEXADECIMAL- 
swapBtn.addEventListener('click', function () {
    var num = inputNum2.value;
    var base = 2;
    var convertedVal = (parseInt(num, base)).toString(16);  //toString -> will conver num to given base -> return STRING
    inputNum1.textContent = convertedVal.toUpperCase();
    inputNum1.style.color = '#81C784';
    inputNum1.style.fontSize = "15px";
    inputNum1.style.fontWeight = 'bold';
})

// 4). For converting BINARY to BINARY -(LOGIC NOT FOUND)

//5). For converting HEXADECIMAL to BINARY - 
swapBtn.addEventListener('click', function () {
    var num = inputNum2.value;
    var base = 16;
    var convertedVal = (parseInt(num, base)).toString(2);  //toString -> will conver num to given base -> return STRING
    inputNum1.textContent = convertedVal;
    inputNum1.style.color = '#81C784';
    inputNum1.style.fontSize = "15px";
    inputNum1.style.fontWeight = 'bold';
})

// 6). For converting HEXADECIMAL to DECIMAL - 
swapBtn.addEventListener('click', function () {
    var num = inputNum2.value;
    var base = 16;
    var convertedVal =(parseInt(num, base));  //toString -> will conver num to given base -> return STRING
    inputNum1.textContent = convertedVal;
    inputNum1.style.color = '#81C784';
    inputNum1.style.fontSize = "15px";
    inputNum1.style.fontWeight = 'bold';

})

// 7). For converting HEXADECIMAL to OCTAL -  
swapBtn.addEventListener('click', function () {
    var num = inputNum2.value;
    var base = 16;
    var convertedVal = parseInt(num, base).toString(8);  //toString -> will conver num to given base -> return STRING
    inputNum1.textContent = convertedVal.toUpperCase();
    inputNum1.style.color = '#81C784';
    inputNum1.style.fontSize = "15px";
    inputNum1.style.fontWeight = 'bold';
})

// 8). For converting HEXADECIMAL to HEXADECIMAL -(LOGIC NOT FOUND)

// 9).  For converting DECIMAL to BINARY -  
swapBtn.addEventListener('click', function () {
    var num = inputNum2.value;
    var base = 10;
    var convertedVal = (parseInt(num, base)).toString(2);  //toString -> will conver num to given base -> return STRING
    inputNum1.textContent = convertedVal;
    inputNum1.style.color = '#81C784';
    inputNum1.style.fontSize = "15px";
    inputNum1.style.fontWeight = 'bold';
})

// 10). For converting DECIMAL to OCTAL -  
swapBtn.addEventListener('click', function () {
    var num = inputNum2.value;
    var base = 10;
    var convertedVal = (parseInt(num, base)).toString(8);  //toString -> will conver num to given base -> return STRING
    inputNum1.textContent = convertedVal;
    inputNum1.style.color = '#81C784';
    inputNum1.style.fontSize = "15px";
    inputNum1.style.fontWeight = 'bold';
})

// 11). For converting DECIMAL to HEXADECIMAL -  
swapBtn.addEventListener('click', function () {
    var num = inputNum2.value;
    var base = 10;
    var convertedVal = parseInt(num, base).toString(16);  //toString -> will conver num to given base -> return STRING
    inputNum1.textContent = convertedVal.toUpperCase();
    inputNum1.style.color = '#81C784';
    inputNum1.style.fontSize = "15px";
    inputNum1.style.fontWeight = 'bold';
})

// 12). For converting DECIMAL to DECIMAL - (LOGIC NOT FOUND)

// 13). For converting OCTAL to BINARY -
swapBtn.addEventListener('click', function () {
    var num = inputNum2.value;
    var base = 8;
    var convertedVal = parseInt(num, base).toString(2);  //toString -> will conver num to given base -> return STRING
    inputNum1.style.fontWeight = 'bold';
    inputNum1.textContent = convertedVal;
    inputNum1.style.color = '#81C784';
    inputNum1.style.fontSize = "15px";
}) 

// 14). For converting OCTAL to DECIMAL -
swapBtn.addEventListener('click', function () {
    var num = inputNum2.value;
    var base = 8;
    var convertedVal = parseInt(num, base);  //toString -> will conver num to given base -> return STRING
    inputNum1.textContent = convertedVal;
    inputNum1.style.color = '#81C784';
    inputNum1.style.fontSize = "15px";
    inputNum1.style.fontWeight = 'bold';
})  

// 15). For converting OCTAL to HEXADECIMAL - 
swapBtn.addEventListener('click', function () {
    var num = inputNum2.value;
    var base = 8;
    var convertedVal = parseInt(num, base).toString(16);  //toString -> will conver num to given base -> return STRING
    inputNum1.textContent = convertedVal.toUpperCase();
    inputNum1.style.color = '#81C784';
    inputNum1.style.fontSize = "15px";
    inputNum1.style.fontWeight = 'bold';
})  

// 16). For converting OCTAL to OCTAL - (LOGIC NOT FOUND)