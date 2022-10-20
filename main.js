const pass = document.querySelector(".password");
const show = document.querySelector(".show");
show.addEventListener("click", function () {
  if (pass.type === "password") {
    pass.type = "text";
    show.style.color = "#3498bd";
    show.textContent = "HIDE";
  } else {
    pass.type = "password";
    show.style.color = "#222";
    show.textContent = "SHOW";
  }
});
