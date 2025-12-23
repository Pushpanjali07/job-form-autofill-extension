// Listen for message from popup.js
chrome.runtime.onMessage.addListener((request) => {

  // Run autofill when action matches
  if (request.action === "AUTOFILL_FORM") {
    autofillForm();
  }
});

// Autofills detected form fields
function autofillForm() {

  // Data to insert into form fields
  const data = {
    name: "Anjali",
    email: "anjali@example.com",
    phone: "9876543210",
    skills: "HTML, CSS, JavaScript, React, Basic Software Testing"
  };

  // Select all inputs and textareas
  const inputs = document.querySelectorAll("input, textarea");

  // Loop through each field
  inputs.forEach((input) => {

    // Get name and placeholder safely
    const name = input.name?.toLowerCase() || "";
    const placeholder = input.placeholder?.toLowerCase() || "";

    // Fill name field
    if (name.includes("name") || placeholder.includes("name")) {
      input.value = data.name;
    }

    // Fill email field
    if (name.includes("email") || placeholder.includes("email")) {
      input.value = data.email;
    }

    // Fill phone number
    if (name.includes("phone") || name.includes("mobile") || placeholder.includes("phone")) {
      input.value = data.phone;
    }

    // Fill skills or experience
    if (name.includes("skill") || name.includes("experience") ||
        placeholder.includes("skill") || placeholder.includes("experience")) {
      input.value = data.skills;
    }
  });
}


