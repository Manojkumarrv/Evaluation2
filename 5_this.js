// "this" keyword is used to specify the particular params or specific function in the code .

function funthis(name,age){
    this.name = name;
    this.age = age;
}
const THis1 = new funthis('kumar',90);
console.log(THis1.name,THis1.age);