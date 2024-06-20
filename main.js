let header = document.querySelector("header");
let boxs = document.querySelectorAll(".box");

boxs.forEach((box) => {
    box.addEventListener("click", () => {
        header.style.background = box.getAttribute("dataColor");
    });
});