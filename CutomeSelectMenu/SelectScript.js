const wrapper = document.querySelector(".wrapper"),
selectBtn = document.querySelector(".select-btn"),
options = document.querySelector(".options"),
searchInput = document.querySelector("input")

const countries = ["India","America","New York",
"Canada",
"Germany",
"Australia",
"Denmark",
"Saudi",
"Shrilank",
'Indonesia'

]
// Looping on the array of countries.
function addCountry(selectedCountry){
    countries.forEach(country =>{
        let isSelected = country === selectedCountry ? 'selected':"";
        let li = `<li onclick="updateName(this)" class="${isSelected}">${country}</li>`;
        options.insertAdjacentHTML("beforeend", li);
    })
}
addCountry();

//Upadating the select country box with value
function updateName(selectedLi){
    // console.log(selectedLi.innerText);
    searchInput.value = "";
    addCountry(selectedLi.innerText);
    wrapper.classList.remove('active');
    selectBtn.firstElementChild.innerText = selectedLi.innerText;
}

// Search functionality of countries
searchInput.addEventListener('keyup',() => {
    let arr =[];
    let searchVal = searchInput.value.toLowerCase();
    // console.log(searchVal);
    arr = countries.filter(data=>{
        return data.toLocaleLowerCase().startsWith(searchVal);
    }).map(country => `<li onclick="updateName(this)">${country}</li>`).join("");
    options.innerHTML = arr ? arr : `<p>Opps! Counrty not found.</p>`
    // console.log(arr);
})

// Toggling the li options
selectBtn.addEventListener("click", () => {
    wrapper.classList.toggle("active");
});


