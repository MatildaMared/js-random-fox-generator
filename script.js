const imageContainer = document.querySelector(".fox-image");

const renderImage = function (url) {
    const imgElement = document.createElement("img");
    imgElement.alt = "A cute picture of a fox";
    imgElement.src = url;
    imageContainer.insertAdjacentElement("beforeend", imgElement);
}

fetch("https://randomfox.ca/floof/")
    .then(response => response.json())
    .then(data => {
        renderImage(data.image);
    });