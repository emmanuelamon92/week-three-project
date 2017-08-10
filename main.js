//Buttons inside a form?
let pickedNumber = "0";
let previousNumber = "0";
let operator = 0;
let maxlenth = "40";


function digitAddition(number) {

    // if(pickedNumber > maxlenth){
    //   pickedNumber = "err";
    // }else
    if ((eval(pickedNumber) == 0) && (pickedNumber.indexOf(".") == -1)){
      pickedNumber = number;
    }else{
      pickedNumber += number;
    }document.Calculator.inputDisplay.value = pickedNumber;
    // console.log("pickedNumber", pickedNumber);
    return pickedNumber;
}

function clear(zeroOut) {
  pickedNumber = "0";
  previousNumber = "0";
  document.Calculator.inputDisplay.value = pickedNumber;
}

function equals(){
    previousNumber = pickedNumber;
    let answer = "";
  if(operator == 1){
   answer = eval(pickedNumber) * eval(previousNumber);

 }else if (operator == 2) {
    answer = eval(pickedNumber) / eval(previousNumber);

  }else if (operator == 3){
  answer = eval(pickedNumber) + eval(previousNumber);

}else if (operator == 4){
  answer = eval(pickedNumber) - eval(previousNumber);
  }
  pickedNumber = "";
  previousNumber = "";
  document.Calculator.inputDisplay.value = answer;
  console.log("pickedNumber", pickedNumber)
  console.log("answer", answer);
  console.log("operator1", operator);
  return answer;

}


function operating(buttonHit) {
    previousNumber = pickedNumber;
    pickedNumber = "0";
    let displying = "";
  if(buttonHit == "*"){
    operator = 1;
    displying = "*";
  }else if (buttonHit == "/"){
    operator = 2;
    displying = "/";
  }else if (buttonHit == "+"){
    operator = 3;
    displying = "+";
  }else if (buttonHit == "-"){
    operator = 4;
    displying = "-";
  }
  // operator = 0;
  //previousNumber = "0";
  document.Calculator.inputDisplay.value = displying ;
  console.log("operator", operator);
  console.log("previousNumber", previousNumber)
  console.log("displying", displying)
  return operator;
}

// function operating() {
//   if(operator === "*"){
//       document.Calculator.inputDisplay.value = pickedNumber
//     previousNumber * pickedNumber;
//   }else if (operator === "/"){
//       document.Calculator.inputDisplay.value = pickedNumber
//   }else if (operator === "+"){
//       document.Calculator.inputDisplay.value = pickedNumber
//   }else if (operator === "-"){
//       document.Calculator.inputDisplay.value = pickedNumber
//   }operator = 0;
//   previousNumber = "0";
//   document.Calculator.inputDisplay.value = pickedNumber
// }

// let calcInput = document.querySelector (".wrapper");
//
// calcInput.addEventListener("click", numberToInput);
//
// function numberToInput() {
//     var btn = document.createElement("#operator");
//
//     calcInput.appendChild(btn);
//
// }
