// Get the button element and click count element
const button = document.getElementById('clickButton');
const clickCountElement = document.getElementById('clickCount');

// Initialize the click count
let clickCount = 0;
let test = 0;
let Upgrade = 10;
// Update the click count on button click, accidental infinite Button Event Listener things.
button.addEventListener('click', function() {
  if (clickCount >= 10) {
    button.addEventListener('click', function() {
      clickCount = clickCount + Upgrade
      clickCountElement.textContent = clickCount;
    });

  } else {
    clickCount++;
    clickCountElement.textContent = clickCount;
  }
});
