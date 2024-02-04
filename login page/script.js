const loginForm = document.getElementById("loginForm");
const userInput = document.getElementById("user");
const passInput = document.getElementById("pass");

function validateForm() {
  const user = userInput.value.trim();
  const pass = passInput.value.trim();

  if (user && pass) {
    if (
      /^[0-9a-zA-Z._%+-]+@[0-9a-zA-Z.-]+\.[a-zA-Z]{2,}$/.test(user) ||
      /^[0-9]{10}$/.test(user) ||
      /^[a-zA-Z0-9_]{1,}$/.test(user)
    ) {
      localStorage.setItem("user", user);
      localStorage.setItem("pass", pass);
      localStorage.setItem("firstVisit", false); // Set the flag to false
      window.location.href = "/home page/index.html";
    } else {
      alert("Invalid phone number, username, or email.");
    }
  } else {
    alert("Please enter your phone number, username, or email and password.");
  }
}

// Check if the user has visited the site before
if (localStorage.getItem("firstVisit") === null) {
  // If the flag is not set, it means the user is visiting the site for the first time
  validateForm(); // Call the validation function
} else {
  // If the flag is set, it means the user has visited the site before
  // You can add any code here to handle the case when the user visits the site for the 2nd time or more
  alert("welcome back");
}

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  validateForm();
});
