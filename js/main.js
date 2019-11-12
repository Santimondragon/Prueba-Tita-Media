let menu = document.getElementById("menu");
let burguer = document.querySelector(".burguer");
let slides = document.querySelector(".images img");
let slidePosition = 0;

burguer.addEventListener("click", () => {
    if (menu.className === "open") {
        menu.className = "close";
    } else {
        menu.className = "open";
    }
});

async function getImages() {
    const response = await fetch("http://127.0.0.1:5500/js/images.json");
    const data = await response.json();
    console.log(data);

    slides.src = data[slidePosition].image;
}

setInterval(() => {
    getImages();
    if (slidePosition >= 2) {
        slidePosition = 0;
    } else {
        slidePosition ++;
    }
}, 5000);