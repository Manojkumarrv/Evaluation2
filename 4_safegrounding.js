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