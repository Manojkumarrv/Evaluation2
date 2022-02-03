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