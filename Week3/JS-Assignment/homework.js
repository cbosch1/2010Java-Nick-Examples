//Testing calls
/* window.onload = function () {
    let testTitle = document.getElementById("testTitle");
    let testBody = document.getElementById("testBody"); */

/*     testTitle.innerHTML = "Problem 1";
    testBody.innerHTML = "Resulting fibonacci: " + fib(1); */

/*     testTitle.innerHTML = "Problem 2";
    testBody.innerHTML = "Bubble Sort returns: " + bubbleSort([3,5,1,5,0,9]); */

/*     testTitle.innerHTML = "Problem 3";
    testBody.innerHTML = "Reversed string Dudeman: " + reverseStr("Dudeman"); */

/*     testTitle.innerHTML = "Problem 4";
    testBody.innerHTML = "Factorial of 8: " + factorial(8);*/

/*     testTitle.innerHTML = "Problem 5";
    testBody.innerHTML = "Substring method with Flip the Script" + substring("Flip the Script", 6, 9);*/

/*     testTitle.innerHTML = "Problem 6";
    testBody.innerHTML = "Number " + 6 + " is even? " + isEven(6); */

/*     testTitle.innerHTML = "Problem 7";
    testBody.innerHTML = "Is palindrome a palindrome? " + isPalindrome("palindrome");
    testBody2.innerHTML = "How about racecar? " + isPalindrome("racecar");*/

/*     testTitle.innerHTML = "Problem 8";
    testBody.innerHTML = "Testing shape Square... "; printShape("Square", 3, '[]');
    testBody2.innerHTML = "Testing shape Triangle... "; printShape("Triangle", 3, '^');
    testBody3.innerHTML = "Testing shape Diamond... "; printShape("Diamond", 5, '+'); */

/*     testTitle.innerHTML = "Problem 9";
    someObj = {name : "Turkey", speed : "50ft", damage : "1d6", health : "28"};
    testBody.innerHTML = "Testing traverseObject: " + traverseObject(someObj);*/

/*     testTitle.innerHTML = "Problem 10";
    testBody.innerHTML = "See console for output."; deleteElement([1, 2, 3, 4, 5]);*/

/*     testTitle.innerHTML = "Problem 11";
    testBody.innerHTML = "See console for output."; spliceElement([1, 2, 3, 4, 5]); */

/*     testTitle.innerHTML = "Problem 12";
    testBody.innerHTML = "Creating person object..."; let john = new Person("John", 30);
    testBody2.innerHTML = "Object expected: John 30";
    testBody3.innerHTML = "Object actual: "+ john.name +" "+ john.age; */

/*     testTitle.innerHTML = "Problem 13";
    testBody.innerHTML = "Creating person object..."; let john = getPerson("John", 30);
    testBody2.innerHTML = "Object expected: John 30";
    testBody3.innerHTML = "Object actual: "+ john.objName +" "+ john.objAge; */
//}

/* -----------------------------------------------------------------------------------
PART I

Create a single Javascript file called homework.js to answer these questions.
Please put the question itself as a comment above each answer.
----------------------------------------------------------------------------------- */

/* 1. Fibonacci
Define function: fib(n) 
Return the nth number in the fibonacci sequence. */

n = 6;

let fib = function(n) {
    if (n == 1) {
        return 1;
    }
    let lastNum = 0;
    let currentNum = 1;
    let currentFib;

    let i;
    for (i = 1; i < n; i++){

        currentFib = lastNum + currentNum;
        
        lastNum = currentNum;
        
        currentNum = currentFib;

    }

    return currentFib;

}

/* 2. Bubble Sort
Define function: bubbleSort(numArray)
Use the bubble sort algorithm to sort the array.
Return the sorted array. */

let bubbleSort = function (numArray) {
    let left;
    let right;
    let temp;
    let swapped;
    let length = numArray.length;

    //Count through entire array from left to right
    for (left = 0; left < length -1; left++) {
        
        //For tracking if we've bubbled
        swapped = false;
        
        //Count through numbers right of current count 
        for (right = 0; right < length -left -1; right++) {

            //If current number is bigger than next, swap
            if (numArray[right] > numArray[right +1]) {

                //Grab current number
                temp = numArray[right];

                //Set current number to next number
                numArray[right] = numArray[right +1];

                //Set next number to old value of current number
                numArray[right +1] = temp;

                //Mark that a swap happened
                swapped = true;
            }
        }

        //If a swap didn't happen, then the rest of the list is in order so break
        if (!swapped) {
            break;
        }
    }

    return numArray;
}

/* 3. Reverse String
Define function: reverseStr(someStr)
Reverse and return the String. */

let reverseStr = function (someStr) {

    //Converts to string array, reverses array, joins array back together.
    return someStr.split("").reverse().join("");

}

/* 4. Factorial
Define function: factorial(someNum)
Use recursion to compute and return the factorial of someNum. */

let factorial = function (someNum){

    if (someNum == 1) {
        return someNum;
    }
     else {
        return someNum * factorial(someNum-1);
    }
}

/* 5. Substring
Define function substring(someStr, length, offset)
Return the substring contained between offset and (offset + length) inclusively.
If incorrect input is entered, use the alert function and describe why the input was incorrect. */

let substring = function (someStr, length, offset){

    let arrayString = someStr.split("");
    //console.log(arrayString)
    let subStr = "";

    if(offset > arrayString.length){
        alert("Cannot offset farther than the string length")
        return "";
    }

    if(arrayString.length < offset + length){
        alert("Inputed offset and length do not correlate to a substring of " + someStr);
        return "";
    }
    //console.log("Passed if's")
    let i;

    for(i = 0; i < length; i++) {
        subStr += arrayString[offset + i];
        //console.log("Substring at " + i + ": " + subStr);
    }

    return subStr;
}

/* 6. Even Number
Define function: isEven(someNum)
Return true if even, false if odd.
Do not use % operator. */

let isEven = function (someNum){

    if (someNum == 0) {
        return true;
    }

    someNum = someNum/2;
    if (someNum - Math.floor(someNum) == 0) {
        return true;
    }

    return false;
}

/* 7. Palindrome
Define function isPalindrome(someStr)
Return true if someStr is a palindrome, otherwise return false */

let isPalindrome = function (someStr){
    
    arrayStr = someStr.split("");

    let i;
    for (i = 0; i < arrayStr.length; i++) {

        let charFirst = arrayStr[i];
        let charLast = arrayStr[arrayStr.length -i -1];

        if (charFirst != charLast) {
            return false;
        }
    }

    return true;
}

/* 8. Shapes
Define function: printShape(shape, height, character)
shape is a String and is either "Square", "Triangle", "Diamond".
height is a Number and is the height of the shape. Assume the number is odd.
character is a String that represents the contents of the shape. Assume this String contains just one character.
Use a switch statement to determine which shape was passed in.
Use the console.log function to print the desired shape.
Example for printShape("Square", 3, "%");
%%%
%%%
%%%
Example for printShape("Triangle", 3, "$");
$
$$
$$$
Example for printShape("Diamond", 5, "*");
  *
 ***
*****
 ***
  * */

let printShape = function (shape, height, character){
    
    switch (shape){

        case "Square":
            //Iterates through each row setting it.
            for (i = 0; i < height; i++){

                let rowStr = "";
                //Iterates through each column of the row, adding the char.
                for (j = 0; j < height; j++){
                    rowStr += character;
                }
                console.log(rowStr);
            }
            break;

        case "Triangle":

            let row = 1;

            //Iterates through the height of the triangle
            for (i = 0; i < height; i++){

                let rowStr = "";
                //Keeps a count of rows and only adds that many char.
                for (j = 0; j < row; j++){
                    rowStr += character;
                }
                console.log(rowStr);
                row += 1;
            }
            break;

        case "Diamond":
            let rowUp = 1;
            let rowDn = height -2;
            
            //Iterates through all rows
            for (i = 0; i < height; i++){

                let rowStr = "";
                
                //If counting up on the rows
                if (rowUp <= height) {

                    //Add white space as necessary 
                    for (w = 0; w < (height - rowUp) /2; w++){
                        rowStr += " ";
                    }

                    //Add characters determined by how many rows traveled.
                    for (j = 0; j < rowUp; j++){
                        rowStr += character;
                    }
                    console.log(rowStr);
                    rowUp += 2;

                } else {//If counting down the rows

                    //Add white space as necessary 
                    for (w = 0; w < (height - rowDn) /2; w++){
                        rowStr += " ";
                    }

                    //Add characters determined by how many rows traveled.
                    for (k = 0; k < rowDn; k++){
                        rowStr += character;
                    }
                    console.log(rowStr);
                    rowDn -= 2;
                }
            }
            break;

        default:
            return "Error while parsing shape to print";
    }   
}

/* 9. Object literal
Define function traverseObject(someObj)
Print every property and it's value. */

let traverseObject = function (someObj){
    return JSON.stringify(someObj);
}

/* 10. Delete Element
Define function deleteElement(someArr)
Print length
Delete the third element in the array.
Print length
The lengths should be the same. */

let deleteElement = function (someArr){

    console.log("Start length: " + someArr.length);
    delete someArr[2];
    console.log("End length: " + someArr.length);
    
}

/* 11. Splice Element
Define function spliceElement(someArr)
Print length
Splice the third element in the array.
Print length
The lengths should be one less than the original length. */

let spliceElement = function (someArr){

    console.log("Start length: " + someArr.length);
    someArr.splice(2, 1);
    console.log("End length: " + someArr.length);
    
}

/* 12. Defining an object using a constructor
Define a function Person(name, age)
The following line should set a Person object to the variable john:
	var john = new Person("John", 30); */

function Person(name, age){
    this.name = name;
    this.age = age;
}

/* 13. Defining an object using an object literal
Define function getPerson(name, age)
The following line should set a Person object to the variable john:
	var john = getPerson("John", 30); */
 
let getPerson = function (name, age){

    return {objName : name, objAge: age};
}
 
 
 
/* -----------------------------------------------------------------------------------
PART II

Part II will focus on Javascript's ability to manipulate the DOM.
Use the provided index.html
Put your Javascript in the provided <script> element at the bottom of the page.
Please put the question itself as a comment above each answer.

----------------------------------------------------------------------------------- */
window.onload = function(){
    //getUSA();
    //getPeopleInSales();
    //getAnchorChildren();
    //getHobbies();
    //getCustomAttribute();
    //initializeSumEvent();
    //initializeSkillsEvent();
    //initializeColorEvent();
    //initializeShowHide();
    //initializeCurrentTime();
    //initializeDelay();
    //walkTheDOM(document, console.log);
    //walkTheDOMNoParents(document, console.log);
}

/* 1. USA
Define function getUSA()
Find the html element that contains "USA".
Print that element's contents. */

let getUSA = function() {
    for (let test of document.querySelectorAll("h1")) {
        if (test.textContent.includes("USA")) {
            console.log(test.textContent);
        }
    }
}
  
/* 2. Sales
Define function getPeopleInSales()
Print the names of all the people in the sales department. */

let getPeopleInSales = function() {

    let tableRows = document.getElementsByTagName("td");
    
    for (i = 0; i < tableRows.length -1; i++){
        if (tableRows[i+1].innerText == "Sales") {
            console.log(tableRows[i].innerText);
        }
    }
}
  
/* 3. Click Here
Define function getAnchorChildren()
Find all anchor elements with a <span> child.
Print the contents of <span> */

let getAnchorChildren = function() {
    for (let anchor of document.querySelectorAll("a")) {
        if (anchor.hasChildNodes) {
            for (let child of anchor.querySelectorAll("span")) {
                console.log(child.innerText);
            }
        }
    }
}
  
/* 4. Hobbies
Define function getHobbies()
Find the checked option in the 'hobbies' select element.
Print the value and the contents. */

let getHobbies = function() {
    let select = document.getElementsByTagName("select").namedItem("hobbies");
    let options = select.querySelectorAll("option");

    options.forEach(node => {
        if (node.selected){
            console.log(node.innerHTML + " has been selected.");
        }});

    options.forEach(node => {
        console.log("Value: "+ node.value +" Contents: " + node.innerHTML);
    });
}
  
/* 5. Custom Attribute
Define function getCustomAttribute()
Find all elements with "data-customAttr" attribute
Print the value of the attribute.
Print the element that has the attribute. */

let getCustomAttribute = function () {
    let dataCustoms = document.querySelectorAll("*[data-customAttr]");
    dataCustoms.forEach(elm => {
        console.log("Attribute value: "+ elm.getAttribute("data-customAttr") +", Element: "+ elm.tagName);
    });
}

/* 6. Sum Event
NOTE: Write unobtrusive Javascript
Regarding these elements:
	<input id="num1" class="nums" type="text"/>
	<input id="num2" class="nums" type="text"/>
	<h3>Sum: <span id="sum"></span></h3>

Define onchange event handler.
Add <input> element values.
Put the sum in the <span> element.
If values cannot be added, put "Cannot add" in the <span> element */
let initializeSumEvent = function () {

    let inputNum1 = document.getElementById("num1");
    let inputNum2 = document.getElementById("num2");

    let setSum = function() {
        let num1 = parseInt(inputNum1.value);
        let num2 = parseInt(inputNum2.value);
        let sumCont = document.getElementById("sum");

        if (isNaN(num1) || isNaN(num2)) {
            sumCont.innerHTML = "Cannot add";
        } else {
            sumCont.innerHTML = num1 + num2;
        }
    }

    inputNum1.addEventListener('input', setSum);
    inputNum2.addEventListener('input', setSum);
}


/* 7. Skills Event
NOTE: Write unobtrusive Javascript
When user selects a skill, create an alert with a message similar to:
	"Are you sure CSS is one of your skills?"
NOTE: no alert should appear when user deselects a skill. */

let initializeSkillsEvent = function() {

    let skills = document.querySelector('[name="skills"]');

    skills.addEventListener('change', function () {
        alert("Are you sure "+ skills[skills.selectedIndex].innerText +" is one of your skills?");
    });
}

/* 8. Favorite Color Event
NOTE: Write unobtrusive Javascript
NOTE: This is regarding the favoriteColor radio buttons.
When a user selects a color, create an alert with a message similar to:
	"So you like green more than blue now?"
In this example, green is the new value and blue is the old value.
Make the background color (of all favoriteColor radio buttons) the newly selected favoriteColor */

let initializeColorEvent = function () {
    let colors = document.querySelectorAll('[name="favoriteColor"]');
    let oldColor;
    let newColor;

    colors.forEach(color => color.addEventListener('change', function () {
        if (oldColor == null){
            oldColor = color;
        } else {
            newColor = color;
            alert("So you like "+ newColor.value +" more than "+ oldColor.value +" now?"); 
        }
    }));
}

/* 9. Show/Hide Event
NOTE: Write unobtrusive Javascript
When user hovers over an employees name:
	Hide the name if shown.
    Show the name if hidden. */
let initializeShowHide = function() {

    let empNames = document.querySelectorAll('*.empName');

    empNames.forEach(name => name.addEventListener('mouseover', function () {
        if (name.style.opacity == 0) {
            name.style.opacity = 100;
        } else {
            name.style.opacity = 0;
        }
    }));
}

/* 10. Current Time
Regarding this element:
	<h5 id="currentTime"></h5>
Show the current time in this element in this format: 9:05:23 AM
The time should be accurate to the second without having to reload the page. */

let initializeCurrentTime = function() {
    let currentTime = document.getElementById("currentTime");
    currentTime.innerText = new Date().toLocaleTimeString();
    setTimeout(initializeCurrentTime, 1000);
}

/* 11. Delay
Regarding this element:
	<p id="helloWorld">Hello, World!</p>
Three seconds after a user clicks on this element, change the text to a random color. */

let initializeDelay = function() {
    let helloWorld = document.getElementById("helloWorld");

    helloWorld.addEventListener('click', function() {
        setTimeout(function(){
            helloWorld.style.color = getRandomColor();
        }, 3000);
    })
}

let getRandomColor = function() {
    let letters = "0123456789ABCDEF";
    let color = "#";
    
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    
    return color;
}

/* 12. Walk the DOM
Define function walkTheDOM(node, func)
This function should traverse every node in the DOM. Use recursion.
On each node, call func(node). */

let walkTheDOM = function (node, func) {
    let childCount = node.children.length;
    let traversed = 0;

    while (childCount > traversed) {
        walkTheDOM(node.children[traversed], func);
        traversed++;
    }
    func(node);
}

/* let walkTheDOMNoParents = function (node, func) {
    let childCount = node.children.length;
    let traversed = 0;

    while (childCount > traversed) {
        walkTheDOMNoParents(node.children[traversed], func);
        traversed++;
    }

    if (childCount === 0) {
        func(node);
    }
} */
