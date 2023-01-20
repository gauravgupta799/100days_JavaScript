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

function addCountry(){
    countries.forEach(country =>{
        // console.log(country);
        let li = `<li onclick="updateName(this)">${country}</li>`;
        options.insertAdjacentHTML("beforeend", li);
    })
}
addCountry();

function updateName(selectedLi){
    // console.log(selectedLi.innerText);
    selectBtn.firstElementChild.innerText= selectedLi.innerText;
}

searchInput.addEventListener('keyup',() => {
    let arr =[];
    let searchVal = searchInput.value.toLowerCase();
    arr = countries.filter(data=>{
        return data.toLocaleLowerCase().startsWith(searchVal);
    })
})

selectBtn.addEventListener("click", () => {
    wrapper.classList.toggle("active");
});


