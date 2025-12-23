// Get the Autofill button and listen for click
document.getElementById("autofillBtn").addEventListener("click", () => {

  // Get the currently active tab in the current window
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {

    // Send a message to the content script in that tab
    chrome.tabs.sendMessage(tabs[0].id, {
      action: "AUTOFILL_FORM"
    });
  });
});

