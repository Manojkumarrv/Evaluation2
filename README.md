# Evaluation2

# 1QS

##ALGORITHM;

step 1:

step 2:

step 3:

step 4:

step 5:

##PSEUDOCODE;

```
LET prime1 = [];
LET l = 0;
LET m = 0;
LET k;
FUNCTION prime(number) {
    FOR (i = 2; i <= number; i++) {
        k = 2; 
        FOR (j = k; j <= i; j++) {

            IF (i % j === 0) {
                IF (i === 2) {
                    prime1[m] = i;
                    PRINT(prime1[m]);
                }
                l++
                BREAK;
            }

            IF (j === i - 1) {
                IF (i % j != 0) {
                    m++;
                    prime1[m] = i;
                    PRINT(prime1[m]);
                    BREAK;
                }
            }
        }
        ++k;
    }

}

prime(200);
END
```

# 2QS

##ALGORITHM;

step 1:

step 2:

step 3:

step 4:

step 5:

##PSEUDOCODE;

```
LET a = [1,2,3,4,5];
LET b = [2,3,5,7,8];
LET c = [];
LET k = 0;
FOR(i=0;i<a.length;i++){
    FOR(j=0;j<b.length;j++){
        IF(a[i] == b[j]){
            c[k] = b[j];
            k++;
        }
    }
}
PRINT(c);
END
```


# 3QS

##ALGORITHM;

step 1:

step 2:

step 3:

step 4:

step 5:

step 6:

##PSEUDOCODE;

```
FUNCTION anatomy(a,b){
    RETURN PRINT(a*b);
}
anatomy(2,3);

LET anonymous = function (){
    PRINT("anonym");
}
anonymous();

VAR assigning1 = function (a,b){
    PRINT('another',a+b,'example');
}
assigning1(2,5);
END
```

# 4QS

##ALGORITHM;

step 1:

step 2:

step 3:

step 4:

step 5:

##PSEUDOCODE;

```
CONST fun3 = function (){return "this is function ";};
FUNCTION fun2(func){
    IF(typeof func == "function"){
        PRINT(func());
    }
    ELSE {
        PRINT("this is not a function");
    }
}
fun2(fun3);
fun2();
END
```

# 5QS

##ALGORITHM;

step 1:

step 2:

step 3:

step 4:

step 5:

step 6:

##PSEUDOCODE;

```
FUNCTION funthis(name,age){
    THIS.name = name;
    THIS.age = age;
}
CONST THis1 = new funthis('kumar',90);
PRINT(THis1.name,THis1.age);
END
```

# 6QS

##ALGORITHM;

step 1:

step 2:

step 3:

step 4:

step 5:

step 6:

##PSEUDOCODE;

```
//function.this
VAR example = function () {
    PRINT(this);
  };
  
  VAR obj = new example();
  PRINT(obj);

  LET person = {
      name : "johnwicks",
      age : 50,
      town : "california",
      bio : function (){
         RETURN (this.name+'is'+this.age+'years old');
      }
      
  };
  PRINT(person.bio());

  //class.this
  CLASS TestClass {
    CONSTRUCTOR(myName) {
        THIS.name = myName;
    }

    updateName() {
        RETURN this.name;
    }
}

TestClass.updateName2 = FUNCTION() {
    //won't actually print the name variable set since not associated with an instance of the class?
    PRINT(this.name);
};

VAR test = new TestClass("Joe");

PRINT(test.updateName());

///////////////

TestClass.updateName2();
END
```

# 7QS

##ALGORITHM;

step 1:

step 2:

step 3:

step 4:

step 5:

##PSEUDOCODE;

```
//filter
CONST fruit = ['apple','orange','pineapple','peach','mango'];
LET filterfruit = fruit.FILTER(fruit => (fruit.length>5));
PRINT(filterfruit);

//map
CONST numbers = [1,2,3,4,5];
LET modifiednumber = numbers.MAP(numbers => (numbers*5));
PRINT(modifiednumber);

//reduce
LET Number = [2,3,4,5];
CONST sum = Number.REDUCE((accmulator,currentvalue) => {
    RETURN accmulator+currentvalue ; 
},0);
PRINT(sum);
END
```

# 8QS

##ALGORITHM;

step 1:

step 2:

step 3:

step 4:

step 5:

##PSEUDOCODE;

```
CONST start = 1;
CONST end = 500;
         LET count = 0;
        FOR(let i = start ; i <= end ; i++ ){
            CONST numberToString = i + "" ;
            CONST += numberToString.split("0").length - 1;
        }
        PRINT(count);
        END
```        

# 9QS

##ALGORITHM;

step 1:

step 2:

step 3:

step 4:

step 5:

##PSEUDOCODE;

```
FUNCTION missing(array){
    LET MissingArray = [];
    LET MinmumNum = MATH.min(...array);
    LET MaximumNum = MATH.max(...array);
    FOR(LET i=MinmumNum;i<MaximumNum;i++){
        IF(array.indexOf(i) < 0){
            MissingArray.PUSH(i);
        }
    }
    RETURN MissingArray;
}
PRINT(missing([1,2,4,5,7]));	
END
```

# 10QS

##ALGORITHM;

step 1:

step 2:

step 3:

step 4:

step 5:

##PSEUDOCODE;

```
CONST age = function (BornYear){
     LET date = new Date();
     LET presentyear = date.getFullYear();
     LET Year = presentyear-BornYear;
      PRINT(Year);
};
age(1998);
END
```

# 11QS

##ALGORITHM;

step 1:

step 2:

step 3:

step 4:

step 5:

##PSEUDOCODE;

```
LET value_a = 2;
LET value_b = value_a;
value_a = 3;
PRINT(value_b);
PRINT(value_a);

LET old_a = 2;
FUNCTION update_a(b){
       b = 3;
      PRINT(b);
}
update_a(old_a);
PRINT(old_a);


VAR val_1 = {id : "good"};
VAR val_2 ;
val_2 = val_1;
val_1.id = "im good";
PRINT(val_1);
PRINT(val_2);
END
```

# 12QS

##ALGORITHM;

step 1:

step 2:

step 3:

step 4:

step 5:

##PSEUDOCODE;

```
FUNCTION arity(a,b,c){
   LET length = arity.LENGTH;
    PRINT(length)
}
arity(5,6,7);
END
```

# 13QS

##ALGORITHM;

step 1:

step 2:

step 3:

step 4:

step 5:

##PSEUDOCODE;

```
LET curry = FUNCTION(num1){
    RETURN FUNCTION(num2){
        RETURN FUNCTION(num3){
            RETURN num1+num2+num3;
        }
    }
}
PRINT(curry(6)(7)(8));

//||


LET cur = (number1) => (number2) => (number3) => number1*number2*number3;

PRINT(cur(3)(4)(5));
END
```

# 14QS

##ALGORITHM;

step 1:

step 2:

step 3:

step 4:

step 5:

##PSEUDOCODE;

```
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
```

# 15QS

##ALGORITHM;

step 1:

step 2:

step 3:

step 4:

step 5:

##PSEUDOCODE;

```
//anonymous functions donot have names with it.
LET anonymous = FUNCTION (){
    PRINT("anonym");
}
anonymous();
//anonymous functions are arguments being passed to higher order functions.
//if afunction is used only one or limited number of times anonymous is used.
//it is lighter than named functions.
LET random = FUNCTION(){
    RETURN PRINT(Math.random());
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
setTimeout(FUNCTIONJ() { PRINT('hi'); }, 1000);

LET argument = FUNCTION (){
    PRINT("hello");
}
argument();
END
```

# 16QS

##ALGORITHM;

step 1:

step 2:

step 3:

step 4:

step 5:

##PSEUDOCODE;

```
//named function
FUNCTION named(a,b){
    RETURN PRINT(a*b);
}
named(1, 2);


//assigning function
VAR assigning = (a,b) => {
    PRINT('hi',a+b);
}

assigning(2,3);

VAR assigning1 = FUNCTION (a,b){
    PRINT('another',a+b,'example');
}
assigning1(2,5);
END
```

