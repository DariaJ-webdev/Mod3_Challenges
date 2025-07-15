// 1. Create a function that takes two arguments as functions and returns their sum)
/*
function addition(num1, num2){
return (num1+num2);

}

console.log(addition(3,2));
console.log(addition (-3, -6)); 
console.log(addition(7, 3)); */

// 2. Create a function that converts hours into seconds
/*

function hoursIntoSeconds(hour){
    
    let seconds = hour * 3600;
    return seconds;
    
}
console.log(hoursIntoSeconds(2));
console.log(hoursIntoSeconds(10));
console.log(hoursIntoSeconds(24));

*/

// 3. Calculate the perimeter of a rectangle with length and width as arguments
/*

function perimeterOfRectangle(length, width){
    calcPerimeter = 2 *(length + width);
    return calcPerimeter;
}
console.log(perimeterOfRectangle(6,7));
console.log(perimeterOfRectangle(20,10));
console.log(perimeterOfRectangle(2, 9)); */

// 4. Creae a function to calculate the area of a triangle with base & height as arguments
/*
    function TriangleArea(base, height){
    calcTriangleArea = .5 *(base * height);
    return calcTriangleArea;
    }
    console.log(TriangleArea(3, 2));
    console.log(TriangleArea(10,10));
    console.log(TriangleArea(20, 20)); 
    */

    /* alternate answer 
    
     function TriangleArea(base, height){
    
    return calcTriangleArea = .5 *(base * height);
    }
    console.log(TriangleArea(3, 2));
    console.log(TriangleArea(10,10));
    console.log(TriangleArea(20, 20)); 
    
    */

       // Extend a String: write a fortune cookie function that accepts a string and adds 'in bed' onto the end of it//
       /*
    const fortune ="You will find great rewards with hard work"
    function fortuneCookie(fortune){

       }   
    console.log(fortune + ` in bed`) */
/*
    const fruit = "apple"; "grape"; "orange"

    function appendJuice(fruit ){
        return appendJuice = fruit + " juice";
    }
     console.log(appendJuice("apple"));
   // console.log(appendJuice("grape"));
   // console.log(appendJuice("orange"));
   */

   // 6. Create a function that when given two numbers, returns true if the sum of both numbers is greater than 100, otherwise return false//
/*
 function sumGreaterThan100(num1, num2) {
    if (num1 + num2 > 100) {
        return true;
    } else {
        return false;
    }
}

console.log(sumGreaterThan100(20,10));
console.log(sumGreaterThan100(50,60));
console.log(sumGreaterThan100(100,-50)); */

// 7. Write a function that accepts a number and returns true if it is less than or equal to zero, otherwise returns false
/*
function lessThanOrEqualToZero(num){
if(num <= 0){
    return true;
} else 
    return false;

}

console.log(lessThanOrEqualToZero(3));
console.log(lessThanOrEqualToZero(0));
console.log(lessThanOrEqualToZero(-2));
*/

// Repeat but with one line of code
/*
function lessThanOrEqualToZero(num){
    return num <= 0;
}
console.log(lessThanOrEqualToZero(3));
console.log(lessThanOrEqualToZero(0));
console.log(lessThanOrEqualToZero(-2));
*/

//Given a boolean of true or false, return the opposite boolean
/*
function iAmLying(){

    if (iAmLying === true){
        return false;
    } 
        return true;
    }
    
console.log(iAmLying(false));
console.log(!iAmLying(true)); */

//9. Given any element, return true if it is not the number 0
/*
function isNotZero(element){
    return element !== 0;
}
console.log(isNotZero(5));
console.log(isNotZero(0));
console.log(isNotZero(null));

*/

//Calculate the remainder given two numbers
/*
function calcRemainder(num1, num2){
    return num1 % num2;
}
console.log(calcRemainder(4,2));
console.log(calcRemainder(7,8));
console.log(calcRemainder(9,8));
*/
// Is the number odd? Given two numbers, return true if the number is odd//
/*
function isOdd(num){
    return num % 2 !== 0;
 
}
console.log(isOdd(1));
console.log(isOdd(2));
console.log(isOdd(3));
*/

// If a number is even, return 1, otherwise return -1
/*

function isEven(num){
    if(num % 2 === 0){
        return 1;
    } else {
        return -1;
    }
}
console.log(isEven(1));
console.log(isEven(2));
console.log(isEven(5));
*/

// Redo the last one but use a ternary operator
/*
function isEven(num){
  return num % 2 === 0? 1:-1;
}
console.log(isEven(1));
console.log(isEven(2));
console.log(isEven(5));
*/


//Create a function that checks if a user is logged in AND subscribed//
/* method 1 the long way
let LoggedIn = true;
let Subscribed = true;

function isLoggedInAndSubscribed(LoggedIn, Subscribed) {
    if(LoggedIn && Subscribed){
        return true;
    } else if (!LoggedIn && Subscribed) {
        return false;
    } else if (LoggedIn && !Subscribed) {
        return false;
    }

} 
    console.log(isLoggedInAndSubscribed(LoggedIn, Subscribed));
console.log(isLoggedInAndSubscribed(LoggedIn, !Subscribed));
console.log(isLoggedInAndSubscribed(!LoggedIn, Subscribed)); 
*/

    //method 2 the short way
/*
    let LoggedIn = true;
    let Subscribed = true;
    function isLoggedInAndSubscribed(isLoggedIn, isSubscribed){
    return isLoggedIn && isSubscribed;

    }

console.log(isLoggedInAndSubscribed(LoggedIn, Subscribed));
console.log(isLoggedInAndSubscribed(LoggedIn, !Subscribed));
console.log(isLoggedInAndSubscribed(!LoggedIn, Subscribed)); 
*/

/*method 3 the ternary way*/
/*

function isLoggedInAndSubscribed(isLoggedIn, isSubscribed) {
   
    return (isLoggedIn && isSubscribed) ? true : false;
}

let LoggedIn = true;
let Subscribed = true;
console.log(isLoggedInAndSubscribed(LoggedIn, Subscribed));
console.log(isLoggedInAndSubscribed(LoggedIn, !Subscribed));
console.log(isLoggedInAndSubscribed(!LoggedIn, Subscribed));  */

//Check if a user is logged in OR Subscribed
/*
function isLoggedInOrSubscribed(isLoggedIn, isSubscribed) {
  return isLoggedIn || isSubscribed;
}

// Test cases
console.log("Logged In: true, Subscribed: true ->", isLoggedInOrSubscribed(true, true));
console.log("Logged In: true, Subscribed: false ->", isLoggedInOrSubscribed(true, false));
console.log("Logged In: false, Subscribed: true ->", isLoggedInOrSubscribed(false, true));
console.log("Logged In: false, Subscribed: false ->", isLoggedInOrSubscribed(false, false));
*/
/*

// Intermediate: 
/* 1. Given 2 CSSFontFeatureValuesRule, return the first one if it is returnFirstIfFalsy, otherwise return the second one

function returnFirstIfFalsy(a, b) {
    return !a ? a:b;

}

console.log(returnFirstIfFalsy(0, 500));
console.log(returnFirstIfFalsy(false, 100));
console.log(returnFirstIfFalsy(true,'Dog'));
*/

//2. Return the length of any given array
/*
function getArrayLength(arr){
    return arr.length;
}

console.log(getArrayLength([1,2,3]));
console.log(getArrayLength([5,0,-4,1]));
console.log(getArrayLength([])); */

//3. Get the last element of an array
/*
function arrLastElement(arr) {
    return arr[arr.length - 1];
}

console.log(arrLastElement([3, 2, 0, 6, 2]));
console.log(arrLastElement(['dog', 'cat', 'ball']));
console.log(arrLastElement([null, 5, false]));
*/

//3A Get the first element of an array
/*
function arrFirstElement(arr) {
    return arr[0];
}

console.log(arrFirstElement([3, 2, 0, 6, 2]));
console.log(arrFirstElement(['dog', 'cat', 'ball']));
console.log(arrFirstElement([null, 5, false]));
//pay attention to the parentheses!!!

*/

// 3B Get the second element of an array
/*
function arrFirstElement(arr) {
    return arr[1];
}
console.log(arrFirstElement([3, 2, 0, 6, 2]));
console.log(arrFirstElement(['dog', 'cat', 'ball']));
console.log(arrFirstElement([null, 5, false]));
!!
//remember the array starts at index zero!!
*/
// 4. Find the sum of an array
/*
function arrSum(arr){

    return arr.reduce((total, num) => total + num, 0);
}

console.log(arrSum([2, 2, 2]));
console.log(arrSum([100, 200, 500]));
console.log(arrSum([0, -5, -10]));
*/

// 5. Add up the numbers from a single number i.e. given a number, add up all the numbers from one to the number that is given, like  sum factorial type shit//

//I'm choosing to do this as a math forumla where sum = n*(n+1)/2, the video uses the for loop method
/*
function SumUpTo(n){
    return (n*(n+1) )/ 2;

}
console.log(SumUpTo(3));
console.log(SumUpTo(4));
console.log(SumUpTo(600)); */

// 6. Calculate the time
//Given a number in seconds, return this number in mm:ss format//
/*
function secondsToMmSs(seconds) {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
}

console.log(secondsToMmSs(66));  
console.log(secondsToMmSs(50));
console.log(secondsToMmSs(300));
*/

// 7. Find the largest number
//Given an array of numbers, return the largest number of that array

/*
function biggestNum(arr) {
    return Math.max(...arr);
}

console.log(biggestNum([5, 100, 0]));      
console.log(biggestNum([12, 10, -20]));    
console.log(biggestNum([-300, -100, -200]));
*/

//8. Reverse a string
//Given a string, return the string in reverse order
/* Method 1: Most common, preferred way
function reverseString(str) {
    return str.split('').reverse().join('');
}
console.log(reverseString("abc"));
console.log(reverseString("Daria"));
console.log(reverseString("This is cool"));

//8A uses incrementing for loop
function reverseStringIncrementingLoop(str) {
    let reversedStr = ''; // Initialize an empty string to build the reversed string
    // Loop through the input string from the first character to the last
    for (let i = 0; i < str.length; i++) {
        // Prepend the current character to the reversed string
        // This effectively builds the string in reverse order
        reversedStr = str[i] + reversedStr;
    }
    return reversedStr;
}

//8B uses decrementing for loop

function reverseStringDecrementingLoop(str) {
    let reversedStr = ''; // Initialize an empty string to build the reversed string
    // Loop through the input string from the last character down to the first
    for (let i = str.length - 1; i >= 0; i--) {
        // Append the current character to the reversed string
        // This directly builds the string in reverse order
        reversedStr += str[i];
    }
    return reversedStr;
}

// 8C uses the array method
function reverseStringArrayMethod(str) {
    // 1. Split the string into an array of individual characters.
    //    e.g., "hello" becomes ['h', 'e', 'l', 'l', 'o']
    const charArray = str.split('');

    // 2. Reverse the order of elements in the array in place.
    //    e.g., ['h', 'e', 'l', 'l', 'o'] becomes ['o', 'l', 'l', 'e', 'h']
    charArray.reverse();

    // 3. Join the elements of the array back into a single string.
    //    e.g., ['o', 'l', 'l', 'e', 'h'] becomes "olleh"
    return charArray.join('');
*/
    
// 9.Turn every element in an array into a 0: given an array of elements, return the same length array but filled with 0s
/*
//This is the array fill method 9B

function fillArrayWithZero(arr) {
    return Array(arr.length).fill(0);
}

console.log(fillArrayWithZero([5, 100, 0]));  
console.log(fillArrayWithZero([12]));  
console.log(fillArrayWithZero([1, 2,  3, 4, 5,]));

//This is the for loop method 9A

function fillArrayWithZero(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        result.push(0);
    }
    return result;
}

console.log(fillArrayWithZero([5, 100, 0]));  
console.log(fillArrayWithZero([12]));  
console.log(fillArrayWithZero([1, 2,  3, 4, 5,]));

//This is the array map method 9C

function fillArrayWithZero(arr) {
    return arr.map(() => 0);
}

console.log(fillArrayWithZero([5, 100, 0]));  
console.log(fillArrayWithZero([12]));  
console.log(fillArrayWithZero([1, 2,  3, 4, 5,]));

*/

//10. Filter out all the apples in the arrays
//Array filter method
 /*
function filterApples(arr){
    return arr.filter(item => item !== 'apple');

}

console.log(filterApples(['banana','apple','orange','apple']));
console.log(filterApples(['tomato','orange','banana']));
console.log(filterApples(['banana','orange','apple'])); */


//10 B For loop method
/*
function filterApples(arr) {
  const result = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 'apple') {
      result.push(arr[i]);
    }
  }

  return result;
}

console.log(filterApples(['banana','apple','orange','apple']));
console.log(filterApples(['tomato','orange','banana']));
console.log(filterApples(['banana','orange','apple']));
*/

// 11. Filter out all the falsy values
//A with an array filter
/*
function filterFalsy(arr){
     return arr.filter(item => Boolean(item));

}

console.log(filterFalsy(["", [], 0, null, undefined, "0"]));
console.log(filterFalsy(['tomato', 'orange', 'banana', false]));
console.log(filterFalsy(['banana', 'orange', 'apple']));
*/

//11.B with a for loop
/*
function filterFalsy(arr) {
  const result = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i]) {
      result.push(arr[i]);
    }
  }

  return result;
}

console.log(filterFalsy(["", [], 0, null, undefined, "0"]));
console.log(filterFalsy(['tomato', 'orange', 'banana', false]));
console.log(filterFalsy(['banana', 'orange', 'apple']));

*/

//12  Truthy to true, Falsy to false
/*Given an array of truthy and falsy values, return the same array of elements into its boolean value hint:USE ARR.MAP*/
/*
function convertToBoolean(arr){
     return arr.map(item => Boolean(item));
}

console.log(convertToBoolean(["", [], 500, 0, null ])); */


//Javascript Challenges-Hard

//1. Show rating. Given a rating, display a star (*) for each full rating and a full stop (.) for each half rating
/*
function showRating(rating) {
    let stars = '';
    const fullStars = Math.floor(rating);
    const hasHalf = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
        stars += '*';
    }

    if (hasHalf) {
        stars += '.';
    }

    return stars;
}


console.log(showRating(3));
console.log(showRating(4.5));
console.log(showRating(.5));
*/

//2. Sort by lowest to highest price
//Given an array of  numbers, return the prices sorted by low to high
/*
function sortLowToHigh(arr) {
  return arr.sort((a, b) => a - b);
}


console.log(sortLowToHigh([20, 40, 10, 30, 50, 10]));
console.log(sortLowToHigh([5, 10, 0, -5]));
console.log(sortLowToHigh([3,2,1,0]));
*/

//3. Given an array of objects, return the prices sorted by high to low//Sort by highest to lowest price

/*
function sortHighToLow(arr) {
  return arr.sort((a, b) => b - a);
}

console.log(sortHighToLow([50, 30, 60, 10]));
*/
// David's method from video
/*
function sortHighToLow(numbers){
    return numbers.sort((a, b) => b.price - a.price);
}

console.log(
    sortHighToLow([
    {id:1, price:50},
    {id:2, price:30},
    {id:3, price:60},
    {id:4, price:10}
])
);

*/
//5. Find all the posts by a single user
//calls this API "https://jsonplaceholder.typicode.com/posts"
//return all the posts by any given user ID
/*
async function getPostsByUser(userID) { //fetch all post by userID

    const apiUrl = `https://jsonplaceholder.typicode.com/posts?userId=${userID}`;

    console.log(`Attempting to fetch posts for ${userID}`);

    try{
    const response = await fetch(apiUrl); //make the API call
        if(!response.ok){ //handle the API response if it's not ok
            throw new Error(`HTTP error! status: ${response.status}`);

        }

        const allPosts = await response.json();  // parse the response as JSON
        console.log(`Successfully fetched posts for user ${userID}`);

        const userPosts = allPosts.filter(post => post.userId === userID); //filter the posts by userID
        console.log(`Found ${userPosts.length} posts for user ${userID}`);
        return userPosts; //return the filtered posts
    } catch(error) {
        console.error(`Error fetching posts for user ${userID}:`, error);
        return []; //return an empty array in case of error
    }

}
console.log("\n---Posts for User ID 4 ---")
getPostsByUser(4)
    .then(posts => {
        if (posts.length > 0) {
            console.log("Posts by User 4 :", posts.slice(0, 5));
            console.log("Total posts for User 4:", posts.length);
        } else {
            console.log("No posts found for User 4 or an error occurred.");
        }
    })
    .catch(error => console.error("Unhandled promise rejection:", error));

    */

    //6. Call this API "https://jsonplaceholder.typicode.com/todos" and return the first 6 incomplete todos from the result.
/*
  async function getFirstSixIncompleteTodos() {
  const apiUrl = "https://jsonplaceholder.typicode.com/todos";
  console.log("Attempting to fetch incomplete todos...");

  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const allTodos = await response.json();
    console.log("Successfully fetched todos");

    const incompleteTodos = Array.isArray(allTodos)
      ? allTodos.filter(todo => !todo.completed).slice(0, 6)
      : [];

    console.log(`Found ${incompleteTodos.length} incomplete todos`);
    return incompleteTodos;
  } catch (error) {
    console.error("Error fetching todos:", error);
    return [];
  }
}

getFirstSixIncompleteTodos().then(todos => console.log(todos)); //this line test your code and gets the results
*/
