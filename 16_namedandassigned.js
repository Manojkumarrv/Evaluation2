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

