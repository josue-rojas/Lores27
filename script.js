// on ready function using vanilla javascript
document.addEventListener("DOMContentLoaded", function (event) { 
    // do work
  console.log("DOM fully loaded and parsed");
});

const PASSWORD = "LorenasBirthday";

// function to check input box #password for correct password
function verifyPassword () {
  const password = document.getElementById("password");
  const text = password.value;

  if (text === PASSWORD) {
    const hidden = document.querySelectorAll(".hide");
    hidden.forEach(function (element) {
      element.classList.remove("hide");
    });
    document.getElementById("secret").classList.add("hide");
  }
}
