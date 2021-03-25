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
 
//For loop to Sum the multiples of 3 under 1000. source:https://www.w3schools.com/js/js_loop_for.asp
function forSumThrees() {
    var x = 0;
for (i = 0; i < 1000; i++) {
    if(i % 3 === 0) {
        output = x += i;
    }
}
document.getElementById("sumthrees").innerHTML = output;
}

//While loop to sum the multiples of 2 under 1000. source: https://www.w3schools.com/js/js_loop_while.asp
function whileSumThrees() {
    var x = 0
    while (i < 1000) {
     if (i % 3 === 0) {
        output = x += i;
        i++;
 }
    }
document.getElementById("whileloop").innerHTML = output;
}

//Reiterates integers fron 1-100 (multiples of 4 = FOUR , multiples of 10 = TEN, multiples of 4&10 = TenFour!)
//logs all output to console. The way this code runs similar to the for loop forsumofthrees().
function tenFour() {
    for (i = 1; i <= 100; i++) {
        if (i % 4 === 0 && i % 10 === 0) {
            console.log("TenFour!");
        }
        else if (i % 4 === 0) {
            console.log("FOUR");
        }
        else if (i % 10 === 0) {
            console.log("TEN");
        }
        else {
            console.log(i);
        }
    }
}

//Finds what century it is with a given year
function centuryFromYear() {
    var x = parseInt(prompt("Enter a year: "));
    if (x >= 0 && x <= 100) {
        output = 1;
    }
    if (x >= 101 && x <= 200) {
        output = 2;
    }
    if (x >= 201 && x <= 300) {
        output = 3;
    }
    if (x >= 301 && x <= 400) {
        output = 4;
    }
    if (x >= 401 && x <= 500) {
        output = 5;
    }
    if (x >= 501 && x <= 600) {
        output = 6;
    }
    if (x >= 601 && x <= 700) {
        output = 7;
    }
    if (x >= 701 && x <= 800) {
        output = 8;
    }
    if (x >= 801 && x <= 900) {
        output = 9;
    }
    if (x >= 901 && x <= 1000) {
        output = 10;
    }
    if (x >= 1001 && x <= 1100) {
        output = 11;
    }
    if (x >= 1101 && x <= 1200) {
        output = 12;
    }
    if (x >= 1201 && x <= 1300) {
        output = 13;
    }
    if (x >= 1301 && x <= 1400) {
        output = 14;
    }
    if (x >= 1401 && x <= 1500) {
        output = 15;
    }
    if (x >= 1501 && x <= 1600) {
        output = 16;
    }
    if (x >= 1601 && x <= 1700) {
        output = 17;
    }
    if (x >= 1701 && x <= 1800) {
        output = 18;
    }
    if (x >= 1801 && x <= 1900) {
        output = 19;
    }
    if (x >= 1901 && x <= 2000) {
        output = 20;
    }
    if (x >= 2001 && x <= 2100) {
        output = 21;
    }
document.getElementById("century").innerHTML = output;
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