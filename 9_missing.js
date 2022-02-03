
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

