document.getElementById("login-btn").addEventListener("click", function () {
  const email = document.getElementById("email-field").value;
  const password = document.getElementById("password-field").value;
  if (email === "alli@nixon.com" && password === "secret") {
    window.location.href = "../money.html";
  } else {
    alert("invalid username or incorrect password");
  }
});
