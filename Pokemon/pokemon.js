const typeColor = {
    bug:"#26de81", dragon:"#ffeaa7", electric:"#fed330", fairy:"#FF0069", 
    fighting:"#30336b",fire:"#f0932b", flying:"#81ecec", grass:"#00b894",
    ground:"#EBF549", ghost:"#a55eea", ice:"#74b9ff", poison:"#6c5ce7",
    noraml:"#95afc0", psychic:"#a29bfe", rock:"#2d3436", water:"#0190FF",
}

const url = "https://pokeapi.co/api/v2/pokemon/";
const Btn = document.querySelector("#btn")
const card = document.querySelector(".card");

let getPokemonData = () => {
    let id = Math.floor(Math.random() * 150) + 1;
    const finalUrl = url +  id;
    fetch(finalUrl)
    .then((response) => response.json())
    .then((data)=> {
        generateCard(data)
        // console.log("Data",data);
    })
}

// Generate Card
const  generateCard =(data)=>{
    const imgUrl = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT08DP--8QypERXzyHm3_0YiowJvvOI2TtTdA&usqp=CAU"
    const hp = data.stats[0].base_stat;
    const imgSrc = data.sprites.other.dream_world.front_default;
    // console.log(imgSrc);
    const pokemonName = data.name[0].toUpperCase() + data.name.slice(1);
    const statAttack = data.stats[1].base_stat;
    const statDefence = data.stats[2].base_stat;
    const statSpeed = data.stats[5].base_stat;

    // set themeColor based on pokemon type
    const themeColor = typeColor[data.types[0].type.name];

    card.innerHTML = ` 
        <p class="hp">
            <span>HP</span> ${hp}
        </p>
         <img src= ${imgUrl} alt="pokemon-pic">
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
    styleCard(themeColor)
}

let styleCard = (color)=>{
    card.style.background = `radial-gradient(circle at 50% 0%, ${color} 36%, #ffffff 36% );`
    card.querySelectorAll('.types span').forEach((typeColor)=>{
        typeColor.style.background = color;
    })
}

let appendTypes = (types)=>{
    types.forEach(item=>{
        let span = document.createElement("span");
        span.textContent = item.type.name;
        document.querySelector(".types").appendChild(span);
    })
}

Btn.addEventListener("click",  getPokemonData);
window.addEventListener("load", getPokemonData)