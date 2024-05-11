const popup = document.querySelector(".popup");
const images = [...document.querySelectorAll(".img")];
const popupImg = document.querySelector(".popup-img");
const close = document.querySelector(".close");
const activate = document.querySelector(".activate");

images.forEach((item) => {
  item.addEventListener("click", (e) => {
    popup.classList.add("activate");
    popupImg.setAttribute("src", e.target.src);
  });
});

close.addEventListener("click", () => {
  console.log("ok");
  popup.classList.remove("activate");
});

function printMousePos(event) {
  return {
    clientX: event.clientX,
    clientY: event.clientY,
  };
}
