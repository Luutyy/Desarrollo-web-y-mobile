function reverseString(text){
    let text2 = "";
    for (let i = text.length - 1; i >= 0 ; i--){
        text2 = text[i] + text2;
    }
    let text3 = text.split("");
    let text4 = text3.reverse().join("");
    console.log(text2);
    console.log(text4);
}

reverseString("Hola como estas")