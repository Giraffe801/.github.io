const menuButton = document.getElementById('menu-button');
const menu = document.getElementById('menu');



menuButton.addEventListener('click', function () {

  menu.classList.toggle('active');
});


document.addEventListener("DOMContentLoaded", function() {
  // Get the embedded container and countdown timer elements
  var embeddedContainer = document.getElementById("embedded-container");
  var countdownTimer = document.getElementById("countdown-timer");

  // Specify the epoch time (in seconds)
  var epochTimeToShow = 1701547200; // Replace with your desired epoch time

  function updateTimer() {
      // Get the current time in seconds
      var currentTime = Math.floor(Date.now() / 1000);

      // Calculate the remaining time until the specified epoch time
      var remainingTime = epochTimeToShow - currentTime;

      // If the remaining time is greater than 0, update the timer
      if (remainingTime > 0) {
          var hours = Math.floor(remainingTime / 3600);
          var minutes = Math.floor((remainingTime % 3600) / 60);
          var seconds = remainingTime % 60;

          // Format the timer as HH:MM:SS
          var timerText = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
          
          // Update the timer text
          countdownTimer.innerText = "Time until display: " + timerText;

          // Update the timer every second
          setTimeout(updateTimer, 1000);
      } else {
          // If the remaining time is less than or equal to 0, show the embedded container and hide the timer
          embeddedContainer.classList.remove("hidden");
          countdownTimer.classList.add("hidden");
      }
  }

  // Show the countdown timer initially
  countdownTimer.classList.remove("hidden");

  // Start updating the timer
  updateTimer();
});

