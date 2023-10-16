// ==========================
// #region Fundamentals
// ==========================

// The examples use generic number arrays, but feel free
// to use the following fruits array for more flavor :)

const fruits = ["blueberry", "strawberry", "blackberry", "grape", "orange", "banana"];
// console.log(fruits);
// console.log(fruits[1]);
// console.log(fruits.length);

function describeArray() {
 console.log(`the length of your array is ${fruits.length}`);
  console.log(`the max index of your array is ${fruits.length-1}`);
  console.log(`the last element is ${fruits[fruits.length-1]} `);
}
//describeArray(fruits);

//replace "strawberry" with "avacado"
// console.log(fruits);
// fruits[1] = "avacado"
// console.log(fruits);

//add "cucumbers" to the end of the array
//code here

//console.log(fruits.push("cucumbers"), fruits);

//remove the first index
// console.log(fruits);
// console.log(fruits.shift());
// //remove the last index
// console.log(fruits);
// console.log(fruits.pop());
// //remove grape and orange
// console.log(fruits);
// console.log(fruits.splice(2,2));
// console.log(fruits);

//log everything in the salad one at a time
// for (i= 0 ; i < fruits.length; i++) {
//     console.log(fruits[i])
// }

//create a new array with only fruits that start with b...
// const bFruits = [];
// for (let i=0; i<fruits.length;i++) {
//     const eachWord = fruits[i]
//     const firstLetter = eachWord[0]
//     console.log(fruits[i],fruits[i][0]);
// }

// num = 0

// //eat everything in the fruit salad...
// while (num<10) {
//   console.log("Still hungry? Try a", fruits.pop());
//   num++
// }
// console.log("You ate everything!")



// // **********************
// // DEMO - when arrays are passed to functions, they can be modified.. so be careful :)
// // **********************
// // **********************
// // Learning Objectives
// //  - functions can modify arrays
// // **********************

// function modifyArr(arr) {
//   return arr.pop();
// }

// console.log(fruits);
// console.log(modifyArr(fruits));
// console.log(fruits);

// // #endregion Fundamentals

// // ==========================
// // #region Guided Practice
// // ==========================
// // The following demos introduce concepts that students will be exploring in
// // the guided practice.

// // **********************
// // DEMO - we can generate an array of odd numbers
// // **********************
// // **********************
// // Learning Objectives
// //  - % operator to determine odd or even numbers
// // **********************

// const oddArray = [];
// for (let i = 1; i < 25; i++) {
//   if (i%2 !== 0) {
//     oddArray.push(i)
//   }
// }
// console.log(oddArray);

// // **********************
// // DEMO - create a function which generates an array of odd numbers
// // **********************
// // **********************
// // Learning Objectives
// //  - a function can return an array
// // **********************

// function generateOddArray(limit) {
//   const arr = [];
//   for (let i = 1; i < limit; i++) {
//     if (i%2 !==0) {
//      arr.push(i) ;
//     }
//   }
//   return arr;
// }

//  //const generatedOddArray = generateOddArray(100);
//  console.log(generateOddArray(1000));

// // **********************
// // DEMO - create a function which counts the odd or even numbers in an array
// // **********************
// // **********************
// // Learning Objectives
// //  - parameters (arrays as parameters)
// // **********************

// function countOdds(arr) {
//   let count =0;
//   for (let i = 0; i <arr.length; i++) {
//     if (arr[i]%2 !==0) {
//       count ++
//     }
//   }
//   return count;
// }

// const countOddsArray = [1, 2, 3];
// console.log(countOdds(countOddsArray));
// console.log(countOdds([2, 4, 6]));

// **********************
// DEMO - create a function which takes an array of numbers and returns a new array with only the even numbers
// **********************
// **********************
// Learning Objectives
//  - return a new array from a function
// **********************
// function onlyEvens(arr) {
//   const results = [] ;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i]%2 === 0 ) {
//       results.push(arr[i])
//     }
//   }
//   return results ;
// }
// const onlyEvensArray = [1, 2, 3, 4, 5, 6];
// const evens = onlyEvens(onlyEvensArray);
// console.log(evens);

// // **********************
// // DEMO - we can split a string into an array
// // **********************
// // **********************
// // Learning Objectives
// //  - split (a string into an array)
// // **********************

const str = "foo";
const letters = str.split("");
console.log(letters);

// // **********************
// // DEMO - we can create a function which splits strings into arrays
// // **********************
// // **********************
// // Learning Objectives
// //  - return an array from a function
// // **********************

function splitIt(str, delim) {
  return str.split(delim)
}

const strToSplit = "foo,bar,bazz";
const words = splitIt(strToSplit, ",");
console.log(words);

const anotherStrToSplit = "fizz|buzz";
const otherWords = splitIt(anotherStrToSplit, "|");
console.log(otherWords);