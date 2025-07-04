function sendButton(event) {
  event.preventDefault();

  const email = document.querySelector(".email");
  const errorMessage = document.querySelector(".error-message");

  let hasError = email.value.trim() === "";

  if (email.value.trim() !== "") {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    hasError = !emailPattern.test(email.value.trim());
  }

  if (hasError) {
    email.style.borderColor = "var(--Soft-Red)";
    email.style.backgroundImage = "url('./assets/images/icon-error.svg')";
    email.style.backgroundRepeat = "no-repeat";
    email.style.backgroundPosition = "75% 50%";
    errorMessage.textContent = "Please provide a valid email";
    errorMessage.style.visibility = "visible";
  } else {
    email.style.borderColor = "var(--Desaturated-Red)";
    email.style.backgroundImage = "none";
    errorMessage.style.visibility = "hidden";
    alert("Thanks for subscribing!");
    email.value = "";
  }
}

document.querySelector(".email").addEventListener("input", function() {
  const email = this;
  const errorMessage = document.querySelector(".error-message");

  email.style.borderColor = "var(--Desaturated-Red)";
  email.style.backgroundImage = "none";
  errorMessage.style.visibility = "hidden";
})