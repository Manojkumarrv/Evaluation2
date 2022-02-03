//filter
const fruit = ['apple','orange','pineapple','peach','mango'];
let filterfruit = fruit.filter(fruit => (fruit.length>5));
console.log(filterfruit);

//map
const numbers = [1,2,3,4,5];
let modifiednumber = numbers.map(numbers => (numbers*5));
console.log(modifiednumber);

//reduce
let Number = [2,3,4,5];
const sum = Number.reduce((accmulator,currentvalue) => {
    return accmulator+currentvalue ; 
},0);
console.log(sum);