let input = "great chin chunks"
const vowels = ['a', 'e', 'i', 'o', 'u'];
const resultArr = [];
for(let i=0; i<input.length; i++) {
  // console.log(i);
  for(let j=0; j<vowels.length; j++) {
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
