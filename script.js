let ball = document.querySelector(".ball");
let box = document.querySelector(".box");
let screen = document.querySelector("h1");
let numbers = document.querySelectorAll("main .number");
let keys = document.querySelectorAll("main .number").textContent;
let operator = document.querySelectorAll("main .operator");
let opKeys = document.querySelectorAll("main .operator").textContent;
let holder = "";
let holder2 = '';
let operatorHolder = "";
let result = null;
let haveDecimalPoint = false;
// console.log(numbers);
for(let i = 0; i < numbers.length; i++){
    function eachValuetoscreen(){
        if(numbers[i].textContent === "." && !haveDecimalPoint){
            haveDecimalPoint = true;
        }else if(numbers[i].textContent === "." && haveDecimalPoint){
            return;
        }
        holder += numbers[i].textContent;
        // eval(holder);/
        screen.textContent = holder;
        // screen.textContent = numbers[i].textContent;
        // console.log(numbers[i].textContent);
    }

    numbers[i].addEventListener("click", eachValuetoscreen);
}

let equal = document.querySelector("main div:last-child");
function evaluate(){
    if(holder != "" && holder2 != "" && operator != ""){
        result = `${holder} ${operator} ${holder2}`
        screen.textContent = result; 
    }
}
equal.addEventListener("click", evaluate);
// for(let i = 0; i < operator.length; i++){
//     function useOperator(){
//         if(!holder){
//             return;
//         }
//         haveDecimalPoint = false;
//         const operationName = operator[i].textContent;
//         if(holder && holder2 && operatorHolder){
//             mathOperation();
//         }else{
//             result = parseFloat(holder);
//         }
//         clearVar(operationName);
//         console.log(result)
//     }
//     operator[i].addEventListener("click", useOperator);
// }

// function clearVar(name = ""){
//     holder2 += `${holder} ${name} `;

// }