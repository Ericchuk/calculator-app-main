let boxNum = document.querySelectorAll(".change p");
console.log(boxNum);
let article = document.querySelector("article");
let articleP = document.querySelectorAll("article p");
let ballBox = document.querySelector(".box");
let screenValue = document.querySelector("main h1");
let buttonBox = document.querySelector("main section");
let button = document.querySelectorAll("main section div");
let ballInBox = document.querySelector(".ball")
let buttonOp = document.querySelector(".operator");

for(let i = 0; i < boxNum.length; i++){
    function change(){
        if(boxNum[i].textContent == 1){
            console.log("111");
            ballBox.classList.remove("changeBg2Screen", "changeBg3Screen")
            ballInBox.classList.remove("change2Ball", "change3Ball");
            article.classList.remove("changeBg3", "changeBg2");
            articleP[0].classList.remove("changeBg3P", "changeBg2P");
            articleP[1].classList.remove("changeBg3P", "changeBg2P");
            articleP[2].classList.remove("changeBg3P", "changeBg2P");
            screenValue.classList.remove("changeBg3", "changeBg2Screen");
            article.classList.remove("changeBg3Screen", "changeBg2");
            button[0].classList.remove("changeBg3PBack", "changeBg2P");
            button[1].classList.remove("changeBg3PBack", "changeBg2P");
            button[2].classList.remove("changeBg3PBack", "changeBg2P");
            button[4].classList.remove("changeBg3PBack", "changeBg2P");
            button[5].classList.remove("changeBg3PBack", "changeBg2P");
            button[6].classList.remove("changeBg3PBack", "changeBg2P");
            button[7].classList.remove("changeBg3PBack", "changeBg2P");
            button[8].classList.remove("changeBg3PBack", "changeBg2P");
            button[9].classList.remove("changeBg3PBack", "changeBg2P");
            button[10].classList.remove("changeBg3PBack", "changeBg2P");
            button[11].classList.remove("changeBg3PBack", "changeBg2P");
            button[12].classList.remove("changeBg3PBack", "changeBg2P");
            button[13].classList.remove("changeBg3PBack", "changeBg2P");
            button[14].classList.remove("changeBg3PBack", "changeBg2P");
            button[15].classList.remove("changeBg3PBack", "changeBg2P");
            buttonBox.classList.remove("changeBg3", "changeBg2Screen");
        }else if(boxNum[i].textContent == 2){
            console.log("222");
            article.classList.add("changeBg2");
            ballBox.classList.add("changeBg2Screen");
            ballBox.classList.remove("changeBg1", "changeBg3")
            ballInBox.classList.add("change2Ball");
            ballInBox.classList.remove("change3Ball");
            articleP[0].classList.add("changeBg2P");
            articleP[1].classList.add("changeBg2P");
            articleP[2].classList.add("changeBg2P");
            articleP[0].classList.remove("changeBg3P", "changeBg1P");
            articleP[1].classList.remove("changeBg3P", "changeBg1P");
            articleP[2].classList.remove("changeBg3P", "changeBg1P");
            screenValue.classList.add("changeBg2Screen");
            button[0].classList.add("changeBg2P");
            button[0].classList.remove("changeBg3PBack");
            button[1].classList.add("changeBg2P");
            button[1].classList.remove("changeBg3PBack");
            button[2].classList.add("changeBg2P");
            button[2].classList.remove("changeBg3PBack");
            button[4].classList.add("changeBg2P");
            button[4].classList.remove("changeBg3PBack");
            button[5].classList.add("changeBg2P");
            button[5].classList.remove("changeBg3PBack");
            button[6].classList.add("changeBg2P");
            button[6].classList.remove("changeBg3PBack");
            button[7].classList.add("changeBg2P");
            button[7].classList.remove("changeBg3PBack");
            button[8].classList.add("changeBg2P");
            button[8].classList.remove("changeBg3PBack");
            button[9].classList.add("changeBg2P");
            button[9].classList.remove("changeBg3PBack");
            button[10].classList.add("changeBg2P");
            button[10].classList.remove("changeBg3PBack");
            button[11].classList.add("changeBg2P");
            button[11].classList.remove("changeBg3PBack");
            button[12].classList.add("changeBg2P");
            button[12].classList.remove("changeBg3PBack");
            button[13].classList.add("changeBg2P");
            button[13].classList.remove("changeBg3PBack");
            button[14].classList.add("changeBg2P");
            button[14].classList.remove("changeBg3PBack");
            button[15].classList.add("changeBg2P");
            button[15].classList.remove("changeBg3PBack");
            button[16].classList.add("changeBg2P");
            button[16].classList.remove("changeBg3PBack");
            button[17].classList.add("changeBg2P");
            button[17].classList.remove("changeBg3P");
            buttonBox.classList.add("changeBg2Screen");
            article.classList.remove("changeBg3", "changeBg1");
            screenValue.classList.remove("changeBg3", "changeBg1");
            article.classList.remove("changeBg3Screen", "changeBg1");
            buttonBox.classList.remove("changeBg3", "changeBg1");
        }else if(boxNum[i].textContent == 3){
            console.log("333");
            article.classList.add("changeBg3Screen");
            ballBox.classList.add("changeBg3");
            ballInBox.classList.add("change3Ball");
            ballInBox.classList.remove("change2Ball");
            articleP[0].classList.add("changeBg3P");
            articleP[1].classList.add("changeBg3P");
            articleP[2].classList.add("changeBg3P");
            screenValue.classList.add("changeBg3");
            screenValue.classList.remove("changeBg2Screen");
            button[0].classList.add("changeBg3PBack");
            button[1].classList.add("changeBg3PBack");
            button[2].classList.add("changeBg3PBack");
            button[4].classList.add("changeBg3PBack");
            button[5].classList.add("changeBg3PBack");
            button[6].classList.add("changeBg3PBack");
            button[7].classList.add("changeBg3PBack");
            button[8].classList.add("changeBg3PBack");
            button[9].classList.add("changeBg3PBack");
            button[10].classList.add("changeBg3PBack");
            button[11].classList.add("changeBg3PBack");
            button[12].classList.add("changeBg3PBack");
            button[13].classList.add("changeBg3PBack");
            button[14].classList.add("changeBg3PBack");
            button[15].classList.add("changeBg3PBack");
            buttonBox.classList.add("changeBg3");
        }
        
    }
    boxNum[i].addEventListener("click", change);
}



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

// let equal = document.querySelector("main div:last-child");
// function evaluate(){
//     if(holder != "" && holder2 != "" && operator != ""){
//         result = `${holder} ${operator} ${holder2}`
//         screen.textContent = result; 
//     }
// }
// equal.addEventListener("click", evaluate);
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
