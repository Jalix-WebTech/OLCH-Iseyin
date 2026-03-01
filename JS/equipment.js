


// Certificate starts here

const modal = document.getElementById("imageModal");
const modalImage = document.getElementById("modalImage");
const closeBtn = document.querySelector(".close");

document.querySelectorAll(".view-btn").forEach(button => {
  button.addEventListener("click", () => {
    modalImage.src = button.dataset.image;
    modal.style.display = "flex";
    document.body.style.overflow = "hidden";
  });
});

closeBtn.addEventListener("click", closeModal);
modal.addEventListener("click", e => {
  if (e.target === modal) closeModal();
});

function closeModal() {
  modal.style.display = "none";
  modalImage.src="../images/app.jpeg";
  document.body.style.overflow = "";
}

// Certificate ends here