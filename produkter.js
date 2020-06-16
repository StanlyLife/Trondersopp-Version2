const buttons = document.querySelectorAll(".modal-button-open");
const close = document.querySelector(".modal-button-close");

const modal = document.querySelector(".modal");
const modalGris = document.querySelector(".modal-soppgris");
const modalShi = document.querySelector(".modal-shiitake");
const modalKo = document.querySelector(".modal-kongeosters");

buttons.forEach((element) => {
  element.addEventListener("click", OpenModal);
});

close.addEventListener("click", CloseModal);

function OpenModal(e) {
  switch (e.target.value) {
    case "kongeosters":
      modal.style.display = "flex";
      modalKo.style.display = "flex";
      break;
    case "shiitake":
      modal.style.display = "flex";
      modalShi.style.display = "flex";
      break;
    case "gris":
      modal.style.display = "flex";
      modalGris.style.display = "flex";
      break;

    default:
      break;
  }
}

function CloseModal() {
  modal.style.display = "none";
  modalGris.style.display = "none";
  modalKo.style.display = "none";
  modalShi.style.display = "none";
}
