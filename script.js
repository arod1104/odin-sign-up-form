document.addEventListener("DOMContentLoaded", () => {
  const passwordInput = document.getElementById("password");
  const confirmPasswordInput = document.getElementById("confirm-password");
  const message = document.createElement("div");
  message.style.color = "red";
  message.textContent = "* Passwords do not match";
  message.style.display = "none";
  confirmPasswordInput.parentNode.appendChild(message);

  function checkPasswordsMatch() {
    if (passwordInput.value !== confirmPasswordInput.value) {
      message.style.display = "block";
    } else {
      message.style.display = "none";
    }
  }

  passwordInput.addEventListener("input", checkPasswordsMatch);
  confirmPasswordInput.addEventListener("input", checkPasswordsMatch);
});
