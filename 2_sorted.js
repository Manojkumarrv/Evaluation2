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