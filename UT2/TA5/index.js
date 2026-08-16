function leapYears(ano){
    if((ano % 4 == 0) || ((ano % 100 == 0) && (ano % 400 == 0))){
        console.log(true);
    }else{
        console.log(false);
    }
}

leapYears(4) // true
leapYears(5) // false
leapYears(400) // true