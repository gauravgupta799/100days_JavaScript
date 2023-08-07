// select all filter buttons and filerable cards
const filterBtns = document.querySelectorAll(".filter-btns button");
const filterableCards = document.querySelectorAll(".filterable_cards .card")

const filterCards = (e)=>{
    document.querySelector(".active").classList.remove("active");
    e.target.classList.add("active");

    // Iterate over each filterable card 
    filterableCards.forEach(card => {
        card.classList.add("hide");
        if(card.dataset.name === e.target.dataset.name || e.target.dataset.name === "all") {
            card.classList.remove("hide");
        }
    })
}

filterBtns.forEach(button => button.addEventListener("click", filterCards))