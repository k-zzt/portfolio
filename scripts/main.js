//finds the larger number out of two numbers
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

//Find the sign of the product of three integers
function signofProduct() {
    var int1 = parseInt(prompt("Enter the first integer: "));
    var int2 = parseInt(prompt("Enter the second integer: "));
    var int3 = parseInt(prompt("Enter the third integer: "));
    var x = int1*int2*int3
     if (x < 0) {
       output = "Sign is -";
   }
     if (x > 0) {
       output = "Sign is +";
   }
document.getElementById("productsign").innerHTML = output;
}

//Sorts three numbers from least to greatest. 
function threeNumberSort(num1 , num2 , num3) { 
    var x = parseInt(prompt("Enter the first integer: "));
    var y = parseInt(prompt("Enter the second integer: "));
    var z = parseInt(prompt("Enter the third integer: "));
    if (x < y && y < z) {
        output = (x + "," + y + "," + z);
    }
    if (x < z && z < y) {
        output = (x + "," + z + "," + y);
    }
    if (y < x && x < z) {
        output = (y + "," + x + "," + z);
    }
    if (y < z && z < x ) {
        output = (y + "," + z + "," + x);
    }
    if (z < y && y < x) {
        output = (z + "," + y + "," + x);
    }
    if (z < x && x < y) {
        output = (z + "," + x + "," + y);
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

//Finds the third angle with two angles of a triangle
function thirdAngle() {
    var angle1 = parseInt(prompt("Enter Angle one: "));
    var angle2 = parseInt(prompt("Enter Angle two: "));
    var angletotal = 180 - angle1 - angle2;
    if (angletotal <= 180) {
       output = angletotal;
    }
    if (angle1 < 0) {
        output = "Invalid. Enter two angles of a triangle";
    }
    if (angle2 < 0) {
        output = "Invalid. Enter two angles of a triangle";
    }
    if (angletotal < 0) {
        output = "Invalid. Enter two angles of a triangle";
    }
document.getElementById("angles").innerHTML = output;
}

//Project 9
function button9() {
    alert("PROJECT 9 COMING SOON");
}