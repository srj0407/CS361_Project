// Toggle On/Off button functionality
let isOn = false;
document.getElementById("toggle-button").addEventListener("click", () => {
  isOn = !isOn;
  document.getElementById("toggle-button").innerText = isOn ? "On" : "Off";
  chrome.storage.sync.set({ isOn });
});

// Settings button functionality
document.getElementById("settings-button").addEventListener("click", () => {
  alert("Settings functionality coming soon!");
});

// Open website button functionality
document.getElementById("website-button").addEventListener("click", () => {
  chrome.tabs.create({ url: "https://example.com" }); // Replace with your target URL
});

// Help button functionality
document.getElementById("help-button").addEventListener("click", () => {
  alert("For questions or help, please contact support@example.com"); // Customize as needed
});

// Restore the toggle state from storage when the popup opens
chrome.storage.sync.get("isOn", (data) => {
  isOn = data.isOn || false;
  document.getElementById("toggle-button").innerText = isOn ? "On" : "Off";
});
