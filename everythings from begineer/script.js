//Function to generate random hex color

function getRandomColor() {
    const letter = '0123456789ABCDEF';
    let color = "#";
    for (let i = 0; i <6; i++) {
        color += letter[Math.floor(Math.random() * 16)];

    }
    return color;

}

//Add click event listner to button
document.getElementById("colorBtn").addEventListener("click", function () {
    document.body.style.backgroundColor = getRandomColor();
});