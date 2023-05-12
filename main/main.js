// Getting started with javascript data structures
// lesson 1:Using Array to store data

const myArray = [24,"Dennis", true];
console.log(myArray);


// lesson 2:manipulating arrays with push()

// add new elements at the end of an array
 myArray.push(25,"August", 2023,"Birthday", true);
console.log(myArray);


// add elements at the beginning of an Array
// Unshift()

myArray.unshift("your birthday is in three months time");
console.log(myArray);


// Removing items with pop() and shift();
// at the end
myArray.pop();
console.log(myArray);

// at the beginning
 let removedElement = myArray.shift();
 console.log(removedElement + " was removed at the beginning");



//  remove items using splice()

const numbers = [10, 11, 12, 13,17,20,89,14, 15]; 
// numbers.splice(5,3);
let splicedNumbers = numbers.splice(4,3);
console.log(numbers);
console.log(splicedNumbers);


// add items using splice()
const numbers1 = [10, 11, 12, 13,17,20,89,14, 15]; 
numbers1.splice(7,8,90,91);
console.log(numbers1);



// copy items using slice()
// takes two parameters 
// index to start extraction
// index to end extraction(upto and not the element at the index)







