const price = document.querySelector(".judul-price");
const car = document.querySelector(".img-price");
const priceTag = document.querySelector(".price-tag");

const appear = () => {
    const price = document.querySelector("#price");
    const pricePos = price.getBoundingClientRect().top;
    const screenPos = window.innerHeight;
    if (pricePos < screenPos) {
        car.classList.add("appear");
        priceTag.classList.add("price-tag-appear");
    } else {
        car.classList.remove("appear");
        priceTag.classList.remove("price-tag-appear");
    }
};

window.addEventListener("scroll", appear);