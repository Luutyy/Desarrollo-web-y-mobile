const imagen = document.getElementById("imagen");

imagen.addEventListener("mouseenter", () => {
    imagen.src = "https://preview.redd.it/rigby-the-cat-v0-xrtpidpxlfif1.jpg?width=640&crop=smart&auto=webp&s=c8847bebbce545fae8ee59fb574e7a7467c90bcb"
});

imagen.addEventListener("mouseleave", () =>{
    imagen.src ="https://static.wikia.nocookie.net/idkcatmemes/images/e/e6/Rigby_the_kitty.jpg/revision/latest/scale-to-width-down/1200?cb=20260110200119";
})