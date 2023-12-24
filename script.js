function startCountdown() {
    const userDateTime = document.getElementById('datetime').value;
    const countdownDate = new Date(userDateTime).getTime();

    
    const countdownInterval = setInterval(function () {
        
        const now = new Date().getTime();

        
        const distance = countdownDate - now;

    
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        const countdownElement = document.getElementById('countdown');
        countdownElement.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

        
        if (distance < 0) {
            clearInterval(countdownInterval);
            countdownElement.innerHTML = "Kuchh To Thik Likh Lo :) Baklol!";
        }
    }, 1000);
}
function gta(){
    const countdownElement = document.getElementById('countdown');
    countdownElement.innerHTML = "";
    document.getElementById('datetime').value = "";
    clearInterval(countdownInterval);
}
