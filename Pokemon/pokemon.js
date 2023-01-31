const url = "https://pokeapi.co/api/v2/pokemon/";
const Btn = document.querySelector("#btn")
const card = document.querySelector("#card");

let getPokemonData = () => {
    let id = Math.floor(Math.random() * 150) + 1;
    console.log(id);
    const finalUrl = url +  id;
    fetch(finalUrl)
    .then((response) => response.json())
    .then((data)=> {
        generateCard(data)
        console.log("Data",data);
    })
}

// Generate Card
const  generateCard =(data)=>{
    const hp = data.stats[0].base.stat;
    console.log("Hp", hp);
    const imgSrc = data.sprites.other.dream_world.front_default;
    const pokemonName = data.name;
    const statAttack = data.stats[1].base_stat;
    const statDefence = data.stats[2].base_stat;
    const statSpeed = data.stats[5].base_stat;
    
    card.innerHTML = `
        <p class="hp">
            <span>HP</span>
            ${hp}
        </p>
        <img src=${imgSrc } alt="pokemon-pic">
        <h2 class="poke-name">${pokemonName}</h2>
        <div class="types">
      
        </div>
        <div class="stats">
            <div>
                <h3>${statAttack}</h3>
                <p>Attack</p>
            </div>
            <div>
                <h3>${statDefence}</h3>
                <p>Defence</p>
            </div>
            <div>
                <h3>${statSpeed}</h3>
                <p>Speed</p>
            </div>
        </div>
    `
    appendTypes(data.types);
}

let appendTypes = (types)=>{
    console.log("Types", types);
    types.forEach(item=>{
        let span = document.createElement("SPAN");
        span.textContent = item.type.name;
        document.querySelector(".types").appendChild(span);
    })
}

Btn.addEventListener("click",  getPokemonData);
window.addEventListener("load", getPokemonData)