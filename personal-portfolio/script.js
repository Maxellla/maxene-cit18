// Form validation
document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
  
    if (name && email && message) {
      alert("Thank you for reaching out! I'll get back to you soon.");
      this.reset(); // Clear form fields
    } else {
      alert("Please fill out all fields.");
    }
  });

  const toggleDarkMode = () => {
    document.body.classList.toggle("dark-mode");
  };
  
  const darkModeButton = document.createElement("button");
  darkModeButton.textContent = "Toggle Dark Mode";
  darkModeButton.onclick = toggleDarkMode;
  document.body.insertBefore(darkModeButton, document.body.firstChild);
  