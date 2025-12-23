chrome.runtime.onMessage.addListener((request) => {
  if (request.action === "AUTOFILL_FORM") {
    autofillForm();
  }
});

function autofillForm() {
  const data = {
    name: "Anjali",
    email: "anjali@example.com",
    phone: "9876543210",
    skills: "HTML, CSS, JavaScript, React, Basic Software Testing"
  };

  const inputs = document.querySelectorAll("input, textarea");

  inputs.forEach((input) => {
    const name = input.name?.toLowerCase() || "";
    const placeholder = input.placeholder?.toLowerCase() || "";

    if (name.includes("name") || placeholder.includes("name")) {
      input.value = data.name;
    }

    if (name.includes("email") || placeholder.includes("email")) {
      input.value = data.email;
    }

    if (
      name.includes("phone") ||
      name.includes("mobile") ||
      placeholder.includes("phone")
    ) {
      input.value = data.phone;
    }

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
