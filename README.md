# Evaluation2

# 1QS

##ALGORITHM;

##PSEUDOCODE;
let prime1 = [];
// let Notprime = [];
let l = 0;
let m = 0;
let k;
function prime(number) {
    // k = 2;
    // console.log("2");
    for (i = 2; i <= number; i++) {
        k = 2; 
        for (j = k; j <= i; j++) {

            if (i % j === 0) {
                if (i === 2) {
                    prime1[m] = i;
                    console.log(prime1[m]);
                }
                l++
                break;
            }

            if (j === i - 1) {
                if (i % j != 0) {
                    m++;
                    prime1[m] = i;
                    console.log(prime1[m]);
                    break;
                }
            }
        }
        ++k;
    }
    // console.log(Notprime);

}

prime(200);

# 2QS

##ALGORITHM;

##PSEUDOCODE;
let a = [1,2,3,4,5];
let b = [2,3,5,7,8];
let c = [];
let k = 0;
for(i=0;i<a.length;i++){
    for(j=0;j<b.length;j++){
        if(a[i] == b[j]){
            c[k] = b[j];
            k++;
        }
    }
}
console.log(c);


# 3QS

##ALGORITHM;

##PSEUDOCODE;
function anatomy(a,b){
    return console.log(a*b);
}
anatomy(2,3);

let anonymous = function (){
    console.log("anonym");
}
anonymous();

var assigning1 = function (a,b){
    console.log('another',a+b,'example');
}
assigning1(2,5);

# 4QS

##ALGORITHM;

##PSEUDOCODE;
const fun3 = function (){return "this is function ";};
function fun2(func){
    if(typeof func == "function"){
        console.log(func());
    }
    else {
        console.log("this is not a function");
    }
}
fun2(fun3);
fun2();

# 5QS

##ALGORITHM;

##PSEUDOCODE;
function funthis(name,age){
    this.name = name;
    this.age = age;
}
const THis1 = new funthis('kumar',90);
console.log(THis1.name,THis1.age);

# 6QS

##ALGORITHM;

##PSEUDOCODE;
//function.this
var example = function () {
    console.log(this);
  };
  
  var obj = new example();
  console.log(obj);

  let person = {
      name : "johnwicks",
      age : 50,
      town : "california",
      bio : function (){
         return (this.name+'is'+this.age+'years old');
      }
      
  };
  console.log(person.bio());

  //class.this
  class TestClass {
    constructor(myName) {
        this.name = myName;
    }

    updateName() {
        return this.name;
    }
}

TestClass.updateName2 = function() {
    //won't actually print the name variable set since not associated with an instance of the class?
    console.log(this.name);
};

var test = new TestClass("Joe");

console.log(test.updateName());

///////////////

TestClass.updateName2();

# 7QS

##ALGORITHM;

##PSEUDOCODE;
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

# 8QS

##ALGORITHM;

##PSEUDOCODE;
const start = 1;
const end = 500;
         let count = 0;
        for(let i = start ; i <= end ; i++ ){
            const numberToString = i + "" ;
            count += numberToString.split("0").length - 1;
        }
        console.log(count);

# 9QS

##ALGORITHM;

##PSEUDOCODE;
function missing(array){
    let MissingArray = [];
    let MinmumNum = Math.min(...array);
    let MaximumNum = Math.max(...array);
    for(let i=MinmumNum;i<MaximumNum;i++){
        if(array.indexOf(i) < 0){
            MissingArray.push(i);
        }
    }
    return MissingArray;
}
console.log(missing([1,2,4,5,7]));	

# 10QS

##ALGORITHM;

##PSEUDOCODE;
const age = function (BornYear){
     let date = new Date();
     let presentyear = date.getFullYear();
     let Year = presentyear-BornYear;
      console.log(Year);
};
age(1998);

# 11QS

##ALGORITHM;

##PSEUDOCODE;
let value_a = 2;
let value_b = value_a;
value_a = 3;
console.log(value_b);
console.log(value_a);

let old_a = 2;
function update_a(b){
       b = 3;
      console.log(b);
}
update_a(old_a);
console.log(old_a);


var val_1 = {id : "good"};
var val_2 ;
val_2 = val_1;
val_1.id = "im good";
console.log(val_1);
console.log(val_2);



# 12QS

##ALGORITHM;

##PSEUDOCODE;

function arity(a,b,c){
   let length = arity.length;
    console.log(length)
}
arity(5,6,7);

# 13QS

##ALGORITHM;

##PSEUDOCODE;
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


# 14QS

##ALGORITHM;

##PSEUDOCODE;
//European Computer Manufacturer's Association.
//ES6 stands for ECMAScript 6. ECMAScript was created to 
//standardize JavaScript, and ES6 is the 6th version of ECMAScript, 
//it was published in 2015, and is also known as ECMAScript 2015.

//After ES6 specification introduced arrow functions to the language this
//statement is no longer true. Arrow functions cannot be used as object constructors.

//modules, class declarations, lexical block scoping, iterators and generators, promises .

//The let keyword
// The const keyword
// Arrow Functions
// For/of
// Map Objects
// Set Objects
// Classes
// Promises
// Symbol
// Default Parameters
// Function Rest Parameter
// String.includes()
// String.startsWith()
// String.endsWith()
// Array.from()
// Array keys()
// Array find()
// Array findIndex()
// New Math Methods
// New Number Properties
// New Number Methods
// New Global Methods

# 15QS

##ALGORITHM;

##PSEUDOCODE;
//anonymous functions donot have names with it.
let anonymous = function (){
    console.log("anonym");
}
anonymous();
//anonymous functions are arguments being passed to higher order functions.
//if afunction is used only one or limited number of times anonymous is used.
//it is lighter than named functions.
let random = function(){
    return console.log(Math.random());
}
random();
//(WHY DO WE USE)
//Anonymous functions are functions without names. 
//-Anonymous functions can be used as an argument to 
//-other functions or as an immediately invoked function execution.
//advantage of using anonymous function is that it dont want to be stored in an seperate file.
//anonymous functions is as arguments to other functions.as a closure, 
//for which see also the Closures chapter.
// Use as an argument to other functions: 
setTimeout(function() { console.log('hi'); }, 1000);

let argument = function (){
    console.log("hello");
}
argument();

# 16QS

##ALGORITHM;

##PSEUDOCODE;
//named function
function named(a,b){
    return console.log(a*b);
}
named(1, 2);


//assigning function
var assigning = (a,b) => {
    console.log('hi',a+b);
}

assigning(2,3);

var assigning1 = function (a,b){
    console.log('another',a+b,'example');
}
assigning1(2,5);

