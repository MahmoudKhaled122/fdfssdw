var fristHeading = document.querySelector(".responsive-simple-calculator-container .responsive-simple-calculator-heading-container #mainHeading");
// console.log(fristHeading);
var fristDescription = document.querySelector(".responsive-simple-calculator-container .responsive-simple-calculator-heading-container #mainDescription");
// console.log(fristDescription);
var userName = window.prompt("Please Enter The User Name Is : ")
// console.log(userName);
if(!userName){
    userName = "guest";
}
// console.log(userName);
function displayingMainDescription(){
    fristHeading.addEventListener("click" , function(){
        fristDescription.style.display="block";
        fristDescription.innerHTML = `hello everyone! , and welcome \"${userName}\" to the responsive simple calculator , you can solve different mathimaticas equations by using simple calculator`;
    });
};
displayingMainDescription();
var displayingUserValue = document.querySelector(".responsive-simple-calculator-container .responsive-simple-calculator-buttons-container #displayingValue");
// console.log(displayingUserValue);
function appendUserValue(displayValue){
    displayingUserValue.value += displayValue;
};
function clearingUserValue(){
    displayingUserValue.value="";
};
function calculatingMathimaticasEquations(){
    try{
        displayingUserValue.value = eval(displayingUserValue.value);
    }
    catch{
        displayingUserValue.value="mathimaticas syntax error";
    };
};