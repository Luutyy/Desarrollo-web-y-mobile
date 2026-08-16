function getSum(nums){
    result = nums.reduce(function(aux, numero){
        return aux + numero; 
    });
    console.log(result);
}

getSum([10, 10, 20, 30, 15 , 15])
/* Aca reduce haria, 
aux = 0, num = 10. 
Aux = 10, num = 10. 
Aux = 20, num = 20. 
Aux = 40, num = 30.
Aux = 70, num = 15.
Aux = 85, num = 15.
Aux = 100, return 100.
*/