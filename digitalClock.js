function updateTime() {
    var now = new Date(); 
    
    const hourDiv = document.getElementById("hours"); 
    const minDiv = document.getElementById("mins");
    const secDiv = document.getElementById("secs");
		
    currHour = now.getHours()
    currMin = now.getMinutes().toString();
    currSec = now.getSeconds().toString();

    // Adjusts clock to 12-hour time
    if (currHour > 12) {
        currHour = currHour - 12;
    } else if (currHour === 0) {
        currHour = 12; // Handle midnight display
    }
    
    // 0 padding is added to the numbers for single digit time values
    hourDiv.innerHTML = currHour.toString().padStart(2, '0');
    minDiv.innerHTML = currMin.padStart(2, '0');
    secDiv.innerHTML = currSec.padStart(2, '0');

    // make sure this update function is called every second
    setTimeout(updateTime, 1000);
}

updateTime();