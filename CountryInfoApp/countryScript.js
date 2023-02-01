const searchBtn = document.querySelector("#search-btn");
let countryInp = document.querySelector("#country-inp"),
result = document.querySelector("#result")


const url = "https://restcountries.com/v3.1/name/india?fullText=true"


const  getCountryInfo =(data)=>{
    // Top
    let flag = data.flags.svg;
    let name = data.name.common;
    let emblem = data.coatOfArms.svg;
    // Left Side
    let officialName = data.name.official;
    let capital = data.capital[0];
    let continent = data.continents[0];
    let currencyName = data.currencies[Object.keys(data.currencies)].name;
    let currency = Object.keys(data.currencies);
    let symbol = data.currencies[Object.keys(data.currencies)].symbol;
    let languages = Object.values(data.languages).toString().split(",").join(",");
    // Right Side
    let population = data.population;
    let borders = data.borders;
    let googleMap = data.maps.googleMaps;
    let altSpell = data.altSpellings;
    let timeZone = data.timezones[0];
    // Bottom
    let flagDesc = data.flags.alt;

   result.innerHTML = `
    <img src= ${flag} class="flag-img"/>
    <h2>${name}</h2>
    <img src=${emblem} alt="emblem-logo" id ="emblem"/>
    <div class="countryInfoWrapper">
      <section class="left-section">
        <div class="wrapper">
            <div class="data-wrapper">
                <h4>Official Name: </h4>
                <span>
                ${officialName}
                </span>
            </div>
        </div>
        <div class="wrapper">
            <div class="data-wrapper">
                <h4>Capital: </h4>
                <span>
                ${capital}
                </span>
            </div>
        </div>
        <div class="wrapper">
            <div class="data-wrapper">
                <h4>Continents: </h4>
                <span>
                ${continent}
                </span>
            </div>
        </div>
        <div class="wrapper">
            <div class="data-wrapper">
                <h4>Currency: </h4>
                <span>
                ${currencyName} - ${symbol} ${currency} 
                </span>
            </div>
        </div>
        <div class="wrapper">
            <div class="data-wrapper">
                <h4>Languages: </h4>
                <span>
                ${languages}
                </span>
            </div>
        </div>
      </section>

      <section class="right-section">
        <div class="wrapper">
            <div class="data-wrapper">
                <h4>Population: </h4>
                <span>
                ${population}
                </span>
            </div>
        </div>
        <div class="wrapper">
            <div class="data-wrapper">
                <h4>Border Countries : </h4>
                <span>
                ${borders} 
                </span>
            </div>
        </div>
        <div class="wrapper">
            <div class="data-wrapper">
                <h4>Alt Spell: </h4>
                <span>
                ${altSpell}
                </span>
            </div>
        </div>
        <div class="wrapper">
            <div class="data-wrapper">
                <h4>Time Zone : </h4>
                <span>
                ${timeZone }
                </span>
            </div>
        </div>
      </section>
    </div>  

    <div class="desc-wrapper">
        <h4>Flag Desc: </h4>
        <p id="desc">
        ${flagDesc}
        </p>
    </div>

   `
}

searchBtn.addEventListener('click', () => {
    let countryName = countryInp.value.toLowerCase();
    // let countryName = "india"
    let finalUrl = `https://restcountries.com/v3.1/name/${countryName}?fullText=true`
    fetch(finalUrl)
    .then((res) => res.json())
    .then((data) => {
        console.log(data[0]);
        getCountryInfo(data[0])
    }).catch((err) => {
        if(countryName.length == 0){
            result.innerHTML = `<h3>The input field cannot be empty.</h3>`
        }else{
            result.innerHTML = `<h3>Please enter a valid country name.</h3>`
        }
    })
});


{/* <div class="verticle"></div>
<div class="data-wrapper">
  <h4>Continent: </h4>
  <span>
   ${continents}
  </span>
</div> */}