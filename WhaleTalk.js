let input = "great chin chunks"
// need an array of vowels to be extracted from the input variable
const vowels = ['a', 'e', 'i', 'o', 'u'];
//Create a variable named resultArray and set it equal to an empty array
const resultArr = [];
// Create a loop to iterate through each letter of the input variable text
for(let i=0; i<input.length; i++) {
  // console.log(i);
// Create a nested for loop inside of the for loop you just wrote. 
// Make the inner loop iterate through the vowels array each time the outer loop runs.  
// To check each letter of input against all the vowels elements during each iteration.
  for(let j=0; j<vowels.length; j++) {
//  write a code block that compares the input letter to every letter in the vowels array
    if(input[i]===vowels[j]) {
      if(input[i] === 'e'){
        resultArr.push('ee')
      } else if(input[i] === 'u'){
        resultArr.push('uu')
      }
      else {
        resultArr.push(input[i])
      }
    }
  }
}
console.log(resultArr.join('').toUpperCase())
