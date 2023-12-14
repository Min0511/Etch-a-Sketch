const rows = 16;
const cols = 16;
const container = document.querySelector(".container");
const resetBtn = document.querySelector(".reset")

for (let i = 0; i < rows * cols; i++) {
    const gridItem = document.createElement("div");
    gridItem.classList.add("items");
    container.appendChild(gridItem);
}

items = document.querySelectorAll(".items");

items.forEach(function(item) {
    item.addEventListener("mouseover",function(){
        item.style.backgroundColor = "black";
    });
});


resetBtn.addEventListener("click", ()=>{
    items.forEach((item)=>{
        item.style.backgroundColor = "white";
    });
});