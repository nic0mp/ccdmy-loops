const input = "great chin chunks"
// create an array of vowels to be extracted from the input variable. 
// Set the array equal to a variable named vowels
const vowels = ['a', 'e', 'i', 'o', 'u'];
// Create a variable named resultArray and set it equal to an empty array: []. 
// This will serve as a place to store the vowels from the input string.
let resultArr = [];
// Create a loop to iterate through each letter of the input variable text
for(let i=0; i<input.length; i++) {
  // console.log(i);
// Create a nested for loop inside of the for loop 
// Make the inner loop iterate through the vowels
  for(let j=0; j<vowels.length; j++) {
// write a code block that compares the input letter to every letter in the vowels array.
    if(input[i] === vowels[j]) {
// Use the .push() method to add matching letters to resultArr
      resultArr.push(vowels[j]);
    }
// Write an if statement that checks if each letter in the input string is equal to 'e'. 
// If so, .push() input[i] to the resultArray
// this statement belongs after the inner for loop block because you only want to 
// perform this check once for every letter in the input
  } if (input[i] === 'e'){
    resultArr.push(input[i]);
  } if (input[i] === 'u'){
    resultArr.push(input[i]);
  }
}
console.log(resultArr.join('').toUpperCase());

