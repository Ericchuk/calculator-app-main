let boxNum = document.querySelectorAll(".change p");
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
let screen2 = document.querySelector(".holder2");
let numbers = document.querySelectorAll("main .number");
let keys = document.querySelectorAll("main .number").textContent;
let sign = document.querySelectorAll("main .sign");
let opKey = document.querySelector(".operator2");
let del = document.querySelector(".del");

let haveDecimalPoint = false;
screen.textContent = "";
for(let i = 0; i < numbers.length; i++){
    function eachValuetoscreen(){
        if(numbers[i].textContent === "." && !haveDecimalPoint){
            haveDecimalPoint = true;
        }else if(numbers[i].textContent === "." && haveDecimalPoint){
            return;
        }

        screen.textContent += numbers[i].textContent;
        // screen.textContent = holder
    }

    numbers[i].addEventListener("click", eachValuetoscreen);
}

for(let i = 0; i < sign.length; i++){
    
    function putSIgn(){
        screen.textContent += sign[i].textContent;
        haveDecimalPoint = false;
    }

    sign[i].addEventListener("click", putSIgn)
}

let equalBtn = document.querySelector(".equal");
function equal(){
    let result = eval(screen.textContent);
    screen.textContent = result;
}

equalBtn.addEventListener("click", equal);

function reset(){
    screen.textContent = "";
}
opKey.addEventListener("click", reset);

function delFunc(){
       screen.textContent = screen.textContent.slice(0, -1);
}

del.addEventListener("click", delFunc)