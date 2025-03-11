document.addEventListener("DOMContentLoaded", () => {
    const gridContainer = document.getElementById("grid-container");
    
    function getRandomColor() {
        return `#${Math.floor(Math.random()*16777215).toString(16)}`;
    }
    
    function generateGrid() {
        gridContainer.innerHTML = "";
        for (let i = 0; i < 16; i++) {
            const div = document.createElement("div");
            div.className = "grid-item";
            div.style.backgroundColor = getRandomColor();
            div.innerText = i + 1;
            gridContainer.appendChild(div);
        }
    }
    
    generateGrid();
    setInterval(generateGrid, 3000);
});

