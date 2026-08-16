function reverseString(text){
    let text2 = "";
    for (let i = text.length - 1; i >= 0 ; i--){
        text2 = text[i] + text2;
    }
    console.log(text2);
}

reverseString("Hola como estas")