const start = 1;
const end = 500;
         let count = 0;
        for(let i = start ; i <= end ; i++ ){
            const numberToString = i + "" ;
            count += numberToString.split("0").length - 1;
        }
        console.log(count);