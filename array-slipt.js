const nums = [1,2,3,4,5,6,7,8,9];
// const part = nums.slice(2, 5);
// console.log(part);

const removed = nums.splice(2,5); /** delete */
console.log(removed);


const together = nums.join(',')
console.log(together);