// Listen for messages sent from popup.js
// This runs when the popup button is clicked
chrome.runtime.onMessage.addListener((request) => {

  // Check if the message action is "AUTOFILL_FORM"
  if (request.action === "AUTOFILL_FORM") {

    // Call the function that fills the form
    autofillForm();
  }
});


// Function to automatically fill form fields
function autofillForm() {

  // Data that will be inserted into the form fields
  const data = {
    name: "Anjali",
    email: "anjali@example.com",
    phone: "9876543210",
    skills: "HTML, CSS, JavaScript, React, Basic Software Testing"
  };

  // Select all input and textarea elements on the webpage
  const inputs = document.querySelectorAll("input, textarea");

  // Loop through each input and textarea field
  inputs.forEach((input) => {

    // Get the input's name attribute (if available)
    // Convert to lowercase for easier comparison
    const name = input.name?.toLowerCase() || "";

    // Get the placeholder text (if available)
    // Convert to lowercase for easier comparison
    const placeholder = input.placeholder?.toLowerCase() || "";

    // If the field looks like a name field, fill full name
    if (name.includes("name") || placeholder.includes("name")) {
      input.value = data.name;
    }

    // If the field looks like an email field, fill email
    if (name.includes("email") || placeholder.includes("email")) {
      input.value = data.email;
    }

    // If the field looks like a phone/mobile field, fill phone number
    if (
      name.includes("phone") ||
      name.includes("mobile") ||
      placeholder.includes("phone")
    ) {
      input.value = data.phone;
    }

    // If the field looks like skills or experience, fill skills text
    if (
      name.includes("skill") ||
      name.includes("experience") ||
      placeholder.includes("skill") ||
      placeholder.includes("experience")
    ) {
      input.value = data.skills;
    }
  });
}

