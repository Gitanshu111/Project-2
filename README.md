# Countdown Timer

A simple web-based countdown timer.

## Functionality

The countdown timer allows users to set a specific date and time, and it displays the remaining time in days, hours, minutes, and seconds. Once the countdown reaches zero, a playful message is displayed.

## Usage

1. Open `index.html` in a web browser.
2. Enter the desired date and time in the input field.
3. Click the "Start Countdown" button to initiate the countdown.
4. To reset the timer and clear the input field, click the "Reset" button.

## Code Overview

The main functionality is implemented in the `startCountdown()` function, which calculates the time difference between the user-provided date-time and the current time. The countdown is updated every second until it reaches zero. The `gta()` function resets the timer and clears the input field.

```javascript
function startCountdown() {
    // ... (your existing code)
}

function gta() {
    // ... (your existing code)
}

