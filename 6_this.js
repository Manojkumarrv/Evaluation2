

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