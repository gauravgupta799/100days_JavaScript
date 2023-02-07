const tabsBox = document.querySelector(".tabs-container"),
arrowIcons = document.querySelectorAll(".icon i"),
allTabs = document.querySelectorAll(".tab");

let isDragging = false;

const handleIcons = ()=>{
    let scrollVal = Math.round(tabsBox.scrollLeft);
    let maxScrollableWidth = tabsBox.scrollWidth - tabsBox.clientWidth;
    arrowIcons[0].style.display = scrollVal > 0 ? "flex" : "none"
    arrowIcons[1].style.display = maxScrollableWidth > scrollVal ? "flex" : "none"
}
arrowIcons.forEach(icon=>{
    icon.addEventListener("click", ()=>{
        tabsBox.scrollLeft += icon.id === "left" ? -350 : 350;
        setTimeout(()=> handleIcons(), 50);
    })
})

allTabs.forEach(tab=>{
    tab.addEventListener("click", ()=>{
        tabsBox.querySelector(".active").classList.remove("active");
        tab.classList.add("active");
    })
})
const dragging =(e)=>{
    if(!isDragging){
        tabsBox.classList.add("dragging");
        tabsBox.scrollLeft = tabsBox.scrollLeft - e.movementX;
        handleIcons();
    }
}
const dragStop = () => {
    isDragging = false;
    tabsBox.classList.remove("dragging");
}
tabsBox.addEventListener("mousedown", () => isDragging = true)
tabsBox.addEventListener("mousemove", dragging);
tabsBox.addEventListener("mouseup", dragStop);

