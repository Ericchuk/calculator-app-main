let boxNum = document.querySelectorAll(".change p");
console.log(boxNum);
let article = document.querySelector("article");
// let articleP = document.querySelectorAll("article p");
let ballBox = document.querySelector(".box");
let screenValue = document.querySelector("main h1");
let buttonBox = document.querySelector("main section");
let numbers = document.querySelectorAll("main .number");

for(let i = 0; i < boxNum.length; i++){
    function change(){
        if(boxNum[i].textContent == 1){
            console.log("111");
            article.classList.add("changeBg1");
            // articleP.classList.add("changeBg3P")
            screenValue.classList.add("changeBg1");
            article.classList.add("changeBg1Screen");
            buttonBox.classList.add("changeBg1");
            article.classList.remove("changeBg3", "changeBg2");
            // articleP.classList.add("changeBg3P")
            screenValue.classList.remove("changeBg3", "changeBg2");
            article.classList.remove("changeBg3Screen", "changeBg2");
            buttonBox.classList.remove("changeBg3", "changeBg2");
        }else if(boxNum[i].textContent == 2){
            console.log("222");
            article.classList.add("changeBg2");
            // articleP.classList.add("changeBg3P")
            screenValue.classList.add("changeBg2");
            article.classList.add("changeBg2Screen");
            buttonBox.classList.add("changeBg2");
            article.classList.remove("changeBg3", "changeBg1");
            // articleP.classList.add("changeBg3P")
            screenValue.classList.remove("changeBg3", "changeBg1");
            article.classList.remove("changeBg3Screen", "changeBg1");
            buttonBox.classList.remove("changeBg3", "changeBg1");
        }else if(boxNum[i].textContent == 3){
            console.log("333");
            // article.style.backgroundColor = "var(--Dark-violet-key-background)";
            // bottonBox.style.backgroundColor = "var(--Very-dark-violet-key-background)";
            article.classList.add("changeBg3");
            // articleP.classList.add("changeBg3P")
            screenValue.classList.add("changeBg3");
            article.classList.add("changeBg3Screen");
            buttonBox.classList.add("changeBg3");
        }
        
    }
    boxNum[i].addEventListener("click", change);
}



let ball = document.querySelector(".ball");
let box = document.querySelector(".box");
let screen = document.querySelector("h1");
// let numbers = document.querySelectorAll("main .number");
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