const numbers = [3, 5, 7, 8, 6];
const output = [];

// for( let i = 0; i< numbers.length; i++){
//     const element = numbers[i];
//     const result = element * element;
//     output.push(result);
// }
// console.log(output);


// function square (element){
//     return element * element;
// }

// const result = numbers.map(function(element){
//     return element * element;
// })

// const result = numbers.map(x => x * x)

// console.log(result);

const bigger = numbers.filter( x => x >5);
// console.log(bigger);

const isThere = numbers.find(x => x >5);
console.log(isThere);