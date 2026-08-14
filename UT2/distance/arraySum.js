function arraySum(ns){
    let result = 0;
    for(let i; i < ns.length; i++){
        if(typeof(ns[i]) != Number){
            return NaN;
        } else{
            result += ns[i]
        }
    }
    return result;
}

function arraySum2(ns){
    return ns.reduce((s,n) => s + n, 0) // 0 es el valor inicial, s es el acumulador y n es el numero n que se va recorriendo, establecemos que lo que se hace con ese numero es sumarlo a n.
}