//find the larger number 
function largerNumber(){
    var num1 = parseInt(prompt("Enter the first number: "));
    var num2 = parseInt(prompt("Enter the second number: "));
    var output = ""
    if (num1 > num2){
output = num1;
} 
    else if (num1 == num2){
output = "Both numbers are equal";
} 
    else if (num1 < num2){
output = num2;  
} 
    else {
output = "Invalid answer"
}
document.getElementById("largerNum").innerHTML = output;
}

//Find the sign of the product
function signofProduct() {
    var num1 = parseInt(prompt("Enter the first integer: "));
    var num2 = parseInt(prompt("Enter the second integer: "));
    var num3 = parseInt(prompt("Enter the third integer: "));
    var x = num1*num2*num3
     if (x < 0) {
       output = "Sign is -";
   }
     if (x > 0) {
       output = "Sign is +";
   }
document.getElementById("productsign").innerHTML = output;
}

//Sort from least to greatest. source: 
function threeNumberSort(num1 , num2 , num3) { 
    var a = parseInt(prompt("Enter the first integer: "));
    var b = parseInt(prompt("Enter the second integer: "));
    var c = parseInt(prompt("Enter the third integer: "));
    if(a < b && b < c) {
        output = (a, b , c);
      } 
       else if (b < a && a < c) {
        output = (b, a, c);
      } 
      else if(b < a && c < a) {
        if(b < c){
          output = (b, c, a); 
        }
    }
      else if(b < a && c < a) {
        output = (b, c, a); 
      } 
      else if(c < a && a < b) {
        output = (c, a, b);
      } 
      else {
        output = (c, b , a);
      }
 document.getElementById("numbersort").innerHTML = output;
}

//Sums the multiples of 3 under 1000
function forSumThrees() {
}

//Project 5
function whileSumThrees() {
    alert("PROJECT 5 COMING SOON");
}

//Project 6
function tenFour() {
    alert("PROJECT 6 COMING SOON");
}

//What century is it?
function centuryFromYear() {
    var x = parseInt(prompt("Enter a year: "));
} 

//Find the third angle
function thirdAngle() {
    alert("PROJECT 8 COMING SOON");
}

//Project 9
function button9() {
    alert("PROJECT 9 COMING SOON");
}