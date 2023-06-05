// Get the button element and click count element
const button = document.getElementById('clickButton');
const clickCountElement = document.getElementById('clickCount');

// Initialize the variables
let clickCount = parseInt(localStorage.getItem('clickCount')) || 0;
let upgrade = parseInt(localStorage.getItem('upgrade')) || 50;
let addScore = parseInt(localStorage.getItem('addScore')) || 1;

// Update the click count on button click
button.addEventListener('click', function() {
  if (clickCount >= upgrade) {
    upgrade = upgrade * 5;
    addScore = addScore * 4;
    window.alert("Next upgrade at " + upgrade + "\nEarning " + addScore + " per click");
  }
  clickCount = clickCount + addScore;
  clickCountElement.textContent = clickCount;

  // Store the updated variables in localStorage
  localStorage.setItem('clickCount', clickCount);
  localStorage.setItem('upgrade', upgrade);
  localStorage.setItem('addScore', addScore);
});

// Display the stored variables on page load
clickCountElement.textContent = clickCount;
