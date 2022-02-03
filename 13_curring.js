let curry = function(num1){
    return function(num2){
        return function(num3){
            return num1+num2+num3;
        }
    }
}
console.log(curry(6)(7)(8));

//||


let cur = (number1) => (number2) => (number3) => number1*number2*number3;

console.log(cur(3)(4)(5));
