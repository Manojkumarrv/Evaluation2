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

