document.addEventListener("DOMContentLoaded", () => {
    const button = document.getElementById("colorButton");
    const colors = ["red", "green", "blue", "yellow"];
    let currentColorIndex = 0;

    button.addEventListener("click", () => {
        currentColorIndex = (currentColorIndex + 1) % colors.length;
        const newColor = colors[currentColorIndex];
        document.body.style.backgroundColor = newColor;
        button.textContent = `Background Color: ${newColor}`;
        
        if (newColor === "yellow") {
            button.style.color = "black";
            button.style.backgroundColor='yellow';
        } else {
            button.style.color = "white";
            button.style.backgroundColor = newColor;
        }
    });
});
