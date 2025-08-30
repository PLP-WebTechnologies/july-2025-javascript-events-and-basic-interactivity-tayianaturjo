/*************************************************
 * Part 1: Event Handling
 *************************************************/

// Click event
document.getElementById("clickBtn").addEventListener("click", function() {
  document.getElementById("clickMsg").textContent = "✅ Button was clicked!";
});

// Keyboard input event
document.getElementById("keyInput").addEventListener("keyup", function(event) {
  document.getElementById("keyOutput").textContent = "You typed: " + event.target.value;
});

// Mouseover event
document.getElementById("hoverText").addEventListener("mouseover", function() {
  this.textContent = " You hovered over me!";
});
document.getElementById("hoverText").addEventListener("mouseout", function() {
  this.textContent = "Hover over me!";
});


/*************************************************
 * Part 2: Interactive Elements
 *************************************************/

// Light/Dark mode toggle
document.getElementById("modeToggle").addEventListener("click", function() {
  document.body.classList.toggle("dark-mode");
});

// Counter
let counter = 0;
const counterValue = document.getElementById("counterValue");

document.getElementById("incBtn").addEventListener("click", () => {
  counter++;
  counterValue.textContent = counter;
});

document.getElementById("decBtn").addEventListener("click", () => {
  counter--;
  counterValue.textContent = counter;
});

document.getElementById("resetBtn").addEventListener("click", () => {
  counter = 0;
  counterValue.textContent = counter;
});

// Dropdown Menu
document.getElementById("dropdownBtn").addEventListener("click", function() {
  document.getElementById("dropdownMenu").classList.toggle("hidden");
});


/*************************************************
 * Part 3: Form Validation
 *************************************************/
document.getElementById("signupForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Stop form submission
  let valid = true;

  // Clear previous errors
  document.getElementById("nameError").textContent = "";
  document.getElementById("emailError").textContent = "";
  document.getElementById("passwordError").textContent = "";
  document.getElementById("formMsg").textContent = "";

  // Name validation
  const name = document.getElementById("name").value.trim();
  if (name.length < 3) {
    document.getElementById("nameError").textContent = "Name must be at least 3 characters.";
    valid = false;
  }

  // Email validation with regex
  const email = document.getElementById("email").value.trim();
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    document.getElementById("emailError").textContent = "Enter a valid email address.";
    valid = false;
  }

  // Password validation
  const password = document.getElementById("password").value;
  if (password.length < 6) {
    document.getElementById("passwordError").textContent = "Password must be at least 6 characters.";
    valid = false;
  }

  // If valid, show success message
  if (valid) {
    document.getElementById("formMsg").textContent = "🎉 Form submitted successfully!";
    document.getElementById("signupForm").reset();
  }
});
