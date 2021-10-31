const images= ["1.jpg","2.jpg","3.jpg","4.jpg"];
const chosenImage = images[Math.floor(Math.random() * images.length)];
const div = document.getElementById("bgImage");

const img = document.createElement("img");
img.src = `img/${chosenImage}`;
img.classList.add("bgSize");

console.log(img);

document.body.appendChild(img);