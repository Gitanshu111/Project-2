function startCountdown() {
    // Get the user-selected date and time
    const userDateTime = document.getElementById('datetime').value;

    // Set the countdown date
    const countdownDate = new Date(userDateTime).getTime();

    // Update the countdown every 1 second
    const countdownInterval = setInterval(function () {
        // Get the current date and time
        const now = new Date().getTime();

        // Calculate the remaining time
        const distance = countdownDate - now;

        // Calculate days, hours, minutes, and seconds
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Display the countdown
        const countdownElement = document.getElementById('countdown');
        countdownElement.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

        // If the countdown is over, display a message and clear the interval
        if (distance < 0) {
            clearInterval(countdownInterval);
            countdownElement.innerHTML = "Kuchh To Thik Likh Lo :) Baklol!";
        }
    }, 1000);
}
function gta(){
    const countdownElement = document.getElementById('countdown');
    countdownElement.innerHTML = "";

    // Clear the countdown date
    document.getElementById('datetime').value = "";

    // Clear any existing countdown interval
    clearInterval(countdownInterval);
}
