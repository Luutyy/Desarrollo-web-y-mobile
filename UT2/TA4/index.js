function sumAll(a, b){
    let sum = 0;
    if(a < b){
        for (let i = a; i <= b; i++ ){
            sum += i;
        }
    } else{
        console.log("B es mayor a A");
    }
    console.log(sum);
}

sumAll(3,5);