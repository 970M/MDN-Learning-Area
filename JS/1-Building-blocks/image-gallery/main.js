const displayedImage = document.querySelector(".displayed-img");
const thumbBar = document.querySelector(".thumb-bar");

const btn = document.querySelector("button");
const overlay = document.querySelector(".overlay");

/* Declaring the array of image filenames */

let pics = ["pic1.jpg", "pic2.jpg", "pic3.jpg", "pic4.jpg", "pic5.jpg"];

/* Looping through images */

for (const pic of pics) {
    let picSrc = "images/" + pic;

    // Methode 1
    // thumbBar.innerHTML += `<img class="displayed-img" src=${picSrc}>`;

    // Methode 2
    const newImage = document.createElement("img");
    newImage.setAttribute("src", picSrc);
    thumbBar.appendChild(newImage);

    newImage.addEventListener("click", (event) => {
        displayedImage.src = event.target.src;
    });
}

/* Wiring up the Darken/Lighten button */
btn.addEventListener("click", (event) => {
    const btnClass = btn.getAttribute("class");
    if (btnClass === "dark") {
        btn.setAttribute("class", "light");
        btn.textContent = "Lighten";
        overlay.style.backgroundColor = "rgba(0,0,0,0.5)";
    } else {
        btn.setAttribute("class", "dark");
        btn.textContent = "Darken";
        overlay.style.backgroundColor = "rgba(0,0,0,0)";
    }
});
