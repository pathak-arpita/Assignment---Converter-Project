// Accessing All the Elements -
const textNo = document.getElementById('textNum');
const  optn = document.getElementById('base');
const conButn  = document.getElementById('bt-Convert');
const spanEle = document.getElementById('conv-Value');

// Add some Event's on convert Button -
conButn.addEventListener('click', function() {
      var  num = +textNo.value;   // for converting String -> Number
      var base = +optn.value;     // for converting String -> Number

    // If user enters invalid input(i.e Alphanumeric values) - 
    if(isNaN(num)) {
        spanEle.textContent = "Please Enter a valide NUMBER....";
        spanEle.style.color = '#FF2400';   //For printing that msg in Red color  
        spanEle.style.fontSize = "30px";
    }  
    else{
       var convertedVal = num.toString(base);  //toString -> will conver num to given base -> return STRING
       spanEle.textContent = convertedVal.toUpperCase();
       spanEle.style.color = '#81C784'; 
       spanEle.style.fontSize = "30px";
       spanEle.style.marginLeft = "530px";
       spanEle.style.fontWeight = 'bold';
    }
})
