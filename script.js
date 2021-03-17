const imageContainer = document.querySelector(".fox-image");
const btn = document.querySelector(".btn");

const renderImage = function (url) {
    imageContainer.innerHTML = "";
    const imgElement = document.createElement("img");
    imgElement.alt = "A cute picture of a fox";
    imgElement.src = url;
    imageContainer.insertAdjacentElement("beforeend", imgElement);
}

const generateRandomFox = function () {
    fetch("https://randomfox.ca/floof/")
        .then((response) => response.json())
        .then((data) => {
            renderImage(data.image);
        });
}

btn.addEventListener("click", generateRandomFox);

generateRandomFox();