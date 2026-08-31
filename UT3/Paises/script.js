function fetchAmerica(){
    fetch('https://countries.dev/countries')
    .then((response)  => response.json())
    .then((data) => {
        const contenedor = document.getElementById("americaPaises");
        
        for(const pais of data){
            if(pais.region == "Americas"){
                console.log(pais)
                let div = document.createElement("div");
                let p = document.createElement("p");
                let img = document.createElement("img");
                div.className = "unPais"
                img.src = `${pais.flags.svg}`
                //img.width = 100;
                p.textContent = `${pais.alpha2Code}: ${pais.name}`;
                div.appendChild(p);
                div.appendChild(img);
                contenedor.appendChild(div)   
            }
        }
    }
)
}

function fetchAsia(){
    fetch('https://countries.dev/countries')
    .then((response)  => response.json())
    .then((data) => {
        const contenedor = document.getElementById("asiaPaises");
        
        for(const pais of data){
            if(pais.region == "Asia"){
                console.log(pais)
                let div = document.createElement("div");
                let p = document.createElement("p");
                let img = document.createElement("img");
                div.className = "unPais"
                img.src = `${pais.flags.svg}`
                //img.width = 100;
                p.textContent = `${pais.alpha2Code}: ${pais.name}`;
                div.appendChild(p);
                div.appendChild(img);
                contenedor.appendChild(div)   
            }
        }
    }
)
}

function fetchPolar(){
    fetch('https://countries.dev/countries')
    .then((response)  => response.json())
    .then((data) => {
        const contenedor = document.getElementById("polarPaises");
        
        for(const pais of data){
            if(pais.region == "Polar"){
                console.log(pais)
                let p = document.createElement("p");
                let img = document.createElement("img");
                img.src = `${pais.flags.svg}`
                img.width = 100;
                p.textContent = `${pais.alpha2Code}: ${pais.name}`;
                contenedor.appendChild(p)
                contenedor.appendChild(img)
                
            } 
        }
    }
)
}

function fetchEuropa(){
    fetch('https://countries.dev/countries')
    .then((response)  => response.json())
    .then((data) => {
        const contenedor = document.getElementById("europaPaises");
        
        for(const pais of data){
            if(pais.region == "Europe"){
                console.log(pais)
                let p = document.createElement("p");
                let img = document.createElement("img");
                img.src = `${pais.flags.svg}`
                img.width = 100;
                p.textContent = `${pais.alpha2Code}: ${pais.name}`;
                contenedor.appendChild(p)
                contenedor.appendChild(img)   
            }
        }
    }
)
}

function fetchOceania(){
    fetch('https://countries.dev/countries')
    .then((response)  => response.json())
    .then((data) => {
        const contenedor = document.getElementById("oceaniaPaises");
        
        for(const pais of data){
            if(pais.region == "Oceania"){
                console.log(pais)
                let p = document.createElement("p");
                let img = document.createElement("img");
                img.src = `${pais.flags.svg}`
                img.width = 100;
                p.textContent = `${pais.alpha2Code}: ${pais.name}`;
                contenedor.appendChild(p)
                contenedor.appendChild(img)   
            }
        }
    }
)
}

const americaCheck = document.querySelector("#americaCheck");
const americaCont = document.querySelector("#americaPaises");

americaCheck.addEventListener("change", function() {
    if(this.checked){
        fetchAmerica();
    } else{
        americaCont.innerHTML = "";
    }
})

const asiaCheck = document.querySelector("#asiaCheck");
const asiaCont = document.querySelector("#asiaPaises");

asiaCheck.addEventListener("change", function() {
    if(this.checked){
        fetchAsia();
    } else{
        asiaCont.innerHTML = "";
    }
})

const polarCheck = document.querySelector("#polarCheck");
const polarCont = document.querySelector("#polarPaises");

polarCheck.addEventListener("change", function() {
    if(this.checked){
        fetchPolar();
    } else{
        polarCont.innerHTML = "";
    }
})

const europaCheck = document.querySelector("#europaCheck");
const europaCont = document.querySelector("#europaPaises");

europaCheck.addEventListener("change", function() {
    if(this.checked){
        fetchEuropa();
    } else{
        europaCont.innerHTML = "";
    }
})

const oceaniaCheck = document.querySelector("#oceaniaCheck");
const oceaniaCont = document.querySelector("#oceaniaPaises");

oceaniaCheck.addEventListener("change", function() {
    if(this.checked){
        fetchOceania();
    } else{
        oceaniaCont.innerHTML = "";
    }
})