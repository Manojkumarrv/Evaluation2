# Evaluation2

# 1QS

## ALGORITHM;

step 1:start the program.create an empty array for the output.

step 2:create an function.use 'for' loop to define whether the condition is satisfied or not.

step 3:inside the external 'for' loop enter i and assign i is less than the given number.hence the condition is satisfied.

step 4:the it moves to the another 'for' loop if the condition is satisfied.

step 5:the values will move to k and kept in empty array.if the statement doesnot satisfy the condition the loop will break.

step 6:print the output.

step 7:stop.

## PSEUDOCODE;

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

## ALGORITHM;

step 1:start the program.create two arrays.

step 2:create an empty array.

step 3:use for loop to run the loop.store the values in K.

step 4:print the output.

step 5:stop.

## PSEUDOCODE;

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

## ALGORITHM;

step 1:start the program.enter the function.

step 2:call the argument.print the program.

step 3:create an anonymous function. call the function.

step 4:print the output.

step 5:create an function. call the function and assign values to the function.

step 6:print the output.

step 7:stop.

## PSEUDOCODE;

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

## ALGORITHM;

step 1:stert the program.enter CONST and create an function to define to that CONST. 

step 2:create another function.

step 3:use if statement to check the type of function.

step 4:return the function using the another function.

step 5:print the output.

step 6:stop.

## PSEUDOCODE;

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

## ALGORITHM;

step 1:start the program.enter the named function with params.

step 2:use 'this' to specify particurly the params.

step 3:create an CONST to define a new name and call the arguments. 

step 4:print the output.

step 5:stop.

## PSEUDOCODE;

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

## ALGORITHM;

step 1:start the program.enter the function.

step 2:use 'this' to define the specific function or the params.

step 3:print the output.

step 4:start the program.enter the class function.

step 5:use 'this' to define the specific values or to call several params into the class function.

step 6:print the output.

step 7:stop.

## PSEUDOCODE;

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

## ALGORITHM;

step 1:start the program.

step 2:enter the array values.

step 3:use filter,map,reduce methods to filter,modify and reduce the array.

step 4:print the output.

step 5:stop.

## PSEUDOCODE;

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

## ALGORITHM;

step 1:start the program.entet the start and end values.

step 2:use for loop to count the numbers and find the numbers with zeros.

step 3:seperate zeros from the 10,20,...and store the zeros in the count.

step 4:print the output.

step 5:stop.

## PSEUDOCODE;

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

## ALGORITHM;

step 1:start the program.enter an function.

step 2:form an emptuy array to store the values of the output.

step 3:use spread method to find the minimum and maximum values.use indexof and push method to find the missing values in array.

step 4:print the output.

step 5:stop.

## PSEUDOCODE;

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

## ALGORITHM;

step 1:start the program.enter an function.

step 2:get the new date and year using 'date' and 'getfullyear'

step 3:suntract the present year with the born year.

step 4:print the output.

step 5:stop.

## PSEUDOCODE;

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

## ALGORITHM;

step 1:start the program.enter the values in value_a.

step 2:then give value_b = value_a.

step 3:print the output.

step 4:using the different values write the program to call the reference.

step 5:print the output.

step 6:stop.

## PSEUDOCODE;

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

## ALGORITHM;

step 1:start the program.

step 2:enter an function .

step 3:use arity method to find the number of params.

step 4:call the arguments.print the program.

step 5:stop.

## PSEUDOCODE;

```
FUNCTION arity(a,b,c){
   LET length = arity.LENGTH;
    PRINT(length)
}
arity(5,6,7);
END
```

# 13QS

## ALGORITHM;

step 1:start the program .enter the function.

step 2:return functions inside the function.

step 3:return params and call the arguments.

step 4:print the program.

step 5:stop.

## PSEUDOCODE;

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

## ALGORITHM;

step 1:start the program.

step 2:write about ECMA6 as comments.

step 3:stop .


## PSEUDOCODE;

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

## ALGORITHM;

step 1:start the program.

step 2:enter the function without name and params.

step 3:return the function. 

step 4:print the program.

step 5:stop.

## PSEUDOCODE;

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

## ALGORITHM;

step 1:Start. Enter the named function

step 2:return function perameters.

step 3:call the values of the perameters .

step 4:print the output.

step 5:assign an variable .

step 6:enter the function .return the params.

step 7:assign the values .print the output.

step 8:end the program.

## PSEUDOCODE;

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

