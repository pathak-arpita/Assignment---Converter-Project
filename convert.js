"use strick"

// Accessing All the Elements -
const num1 = document.getElementById('base-1');           // for selecting ->  FROM options
const num2 = document.getElementById('base-2');           // for selecting ->  TO options
const inputNum1 = document.getElementById('text-1')       // for selecting ->  FROM Text Block
const inputNum2 = document.getElementById('text-2')       // for selecting ->  TO Text Block
const conBtn = document.getElementById('convert');       // CONVERT Button
const swapBtn = document.getElementById('swap');             // SWAP Button


// Add some Event's on CONVERT Button -
conBtn.addEventListener('click', function () {

    // 1). For converting DECIMAL to other forms - 
    var num = +inputNum1.value;   // for converting String -> Number
    var base = +num2.value;     // for converting String -> Number

    // If user enters invalid input(i.e Alphanumeric values) - 
    if (isNaN(num)) {
        inputNum2.textContent = "Please Enter a valide NUMBER....";
        inputNum2.style.color = '#FF2400';   //For printing that msg in Red color  
        inputNum2.style.fontSize = "15px";
    }
    else {
        var convertedVal = num.toString(base);  //toString -> will conver num to given base -> return STRING
        inputNum2.textContent = convertedVal.toUpperCase();
        inputNum2.style.color = '#81C784';
        inputNum2.style.fontSize = "15px";
        //  inputNum2.style.marginLeft = "530px";
        inputNum2.style.fontWeight = 'bold';
    }
})

// Add some Event's on SWAP Button -
swapBtn.addEventListener('click', function () {

    // 1). For converting DECIMAL to other forms - 
    var num = +inputNum2.value;   // for converting String -> Number
    var base = +num1.value;     // for converting String -> Number

    // If user enters invalid input(i.e Alphanumeric values) - 
    if (isNaN(num)) {
        inputNum1.textContent = "Please Enter a valide NUMBER....";
        inputNum1.style.color = '#FF2400';   //For printing that msg in Red color  
        inputNum1.style.fontSize = "15px";
    }
    else {
        var convertedVal = num.toString(base);  //toString -> will conver num to given base -> return STRING
        inputNum1.textContent = convertedVal.toUpperCase();
        inputNum1.style.color = '#81C784';
        inputNum1.style.fontSize = "15px";
        //  inputNum2.style.marginLeft = "530px";
        inputNum1.style.fontWeight = 'bold';
    }
})


