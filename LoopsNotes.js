// For Loops
for (let nums=5; nums<=10; nums++) {
    console.log(nums)
  };
  
// Reverse Loop/ Descending order  
for (let counter = 3; counter >= 0; counter--){
    console.log(counter);
  }

//   Looping through Arrays
const vacationSpots = ['Bali', 'Paris', 'Tulum'];
for (let i = 0; i < vacationSpots.length; i++) {
  console.log(vacationSpots[i]);
}
// OUTPUT: 
// Bali
// Paris
// Tulum

// Nested loops
const myArray = [6, 19, 20];
const yourArray = [19, 81, 2];
for (let i = 0; i < myArray.length; i++) {
  for (let j = 0; j < yourArray.length; j++) {
    if (myArray[i] === yourArray[j]) {
      console.log('Both loops have the number: ' + yourArray[j])
    }
  }
};

// ______________
const bobsFollowers = ['Jill','Phil','Bill','Neil'];
const tinasFollowers = ['Jill','Ron','Bill'];
const mutualFollowers = []
for (let i=0; i<bobsFollowers.length; i++){
  for (let j=0; j<tinasFollowers.length; j++){
   
    if (bobsFollowers[i] === tinasFollowers[j]){
      mutualFollowers.push(bobsFollowers[i])
    }
  }
}
console.log(mutualFollowers)