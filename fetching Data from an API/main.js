// fetch - function used for making http request to fetch resources.(JSON style data ,images , files)
// simplifies asynchronous data fetching in javascript and used for interecting with api's o retrive and send data asynchronously over the web
// fetch(url,{options})

// fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
//     // .then(response => console.log(response))
//     .then(response => response.json())
//     .then(value => console.log(value.name))
//     .catch(error => console.error(error));


// fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
//     .then(response => {
//         if(!response.ok){
//             throw new Error("cant find data");
//         }
//         return response.json();
//     })
//     .then(data => console.log(data.name))
//     .catch(error => console.error(error));







// or by using async and await
// document.addEventListener("DOMContentLoaded",fetchData)

// async function fetchData(){

//     try{
//         const response = await fetch("https://pokeapi.co/api/v2/pokemon/pikachu");

//         if(!response.ok){
//             throw new Error("cant fetch the data.");
//         }
        
//         const pokemon = await response.json();
//         console.log(pokemon.name);
    
//     }
//     catch(error){
//         console.log(error);
//     }
// }




// pokemon photo fetching by their name 
async function fetchData(){
    try{
        const pokemonName = document.getElementById("pokemonName").value.toLowerCase();

        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);

        if(!response.ok){
            throw new Error("please Enter a Valid name.")
        }

        // console.log(response);
        const pokemon = await response.json();
        // console.log(pokemon);
        const pokemonSprite = pokemon.sprites.front_default;
        const imgElement = document.getElementById("pokemonSprite");

        imgElement.src = pokemonSprite;
        imgElement.style.display = "block";

    }
    catch(error){
        console.error(error);
    }
}