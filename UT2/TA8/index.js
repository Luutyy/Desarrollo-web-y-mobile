const people = [ 
      {name: "Carly", yearOfBirth: 1942, yearOfDeath: 1970}, 
      {name: "Ray", yearOfBirth: 1962, yearOfDeath: 2011}, 
      {name: "Jane", yearOfBirth: 1912, yearOfDeath: 1941}, 
    ] 

function findTheOldest(gente){
    const masViejo = gente.reduce(function(persona1, persona2){ // Reduce se va quedando con solo 1 y lo va comparando
        const edad1 = persona1.yearOfDeath - persona1.yearOfBirth;
        const edad2 = persona2.yearOfDeath - persona2.yearOfBirth;
        
        if(edad1 > edad2){
            return persona1;
        } else{
            return persona2;
        }
    });
    console.log(masViejo)
}

findTheOldest(people);