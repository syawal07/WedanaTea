let navbar = document.querySelector(".navbar");

document.querySelector("#menu-btn").onclick = () => {
  navbar.classList.toggle("active");
  searchForm.classList.remove("active");
  cartItem.classList.remove("active");
};

let searchForm = document.querySelector(".search-form");

document.querySelector("#search-btn").onclick = () => {
  searchForm.classList.toggle("active");
  navbar.classList.remove("active");
  cartItem.classList.remove("active");
};

let cartItem = document.querySelector(".cart-items-container");

document.querySelector("#cart-btn").onclick = () => {
  cartItem.classList.toggle("active");
  navbar.classList.remove("active");
  searchForm.classList.remove("active");
};

window.onscroll = () => {
  navbar.classList.remove("active");
  searchForm.classList.remove("active");
  cartItem.classList.remove("active");
};

function openModal(modalId) {
  // Prevent the body from scrolling when modal is open
  document.body.style.overflow = "hidden";

  // Get the modal element
  var modal = document.getElementById(modalId);

  // Set the display property to 'block'
  modal.style.display = "block";
}

function closeModal(modalId) {
  // Allow the body to scroll again
  document.body.style.overflow = "auto";

  // Hide the modal
  document.getElementById(modalId).style.display = "none";
}

// Close modal when clicking outside of the modal content
window.onclick = function (event) {
  const modals = document.querySelectorAll(".modal");
  modals.forEach((modal) => {
    if (event.target === modal) {
      closeModal(modal.id);
    }
  });
};

function openModal(productId) {
  document.getElementById(productId).style.display = "block";
}

function closeModal(productId) {
  document.getElementById(productId).style.display = "none";
}

window.onclick = function (event) {
  if (event.target.classList.contains("modal")) {
    event.target.style.display = "none";
  }
};

window.onload = function () {
  // Reset the form fields when the page loads
  document.getElementById("form").reset();
};
