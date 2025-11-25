// script.js

let intervalId = null;


function formatTime(value) {
    return value < 10 ? '0' + value : String(value);
}

function updateClock() {
    const now = new Date();

    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    
    const timeString = 
        formatTime(hours) + ":" + 
        formatTime(minutes) + ":" + 
        formatTime(seconds);
    
    const days = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'];
    const months = [
        'Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 
        'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'
    ];
    
    const dayName = days[now.getDay()];
    const date = now.getDate();
    const monthName = months[now.getMonth()];
    const year = now.getFullYear();
    
    const dateString = dayName + ", " + date + " " + monthName + " " + year;
    
    $("#jam").text(timeString);
    $("#tanggalHari").text(dateString);
}

$(document).ready(function() {
    
    $("#toggleButton").on("click", function() {
        
        if (intervalId) {

            clearInterval(intervalId);
            intervalId = null;

            $(this).text("START");
            
        } else {
 
            updateClock(); 
            intervalId = setInterval(updateClock, 1000);
            
            $(this).text("STOP");
        }
    });
    $("#toggleButton").click(); 
});