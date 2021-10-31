const clock = document.querySelector("#clock");

function handleClock(){
    const date = new Date();
    const hours = String(date.getHours()).padStart(2,"0");
    const mins = String(date.getMinutes()).padStart(2,"0");
    const sec = String(date.getSeconds()).padStart(2,"0");

    clock.innerText = (`${hours}h ${mins}m ${sec}s`);
}

handleClock();
setInterval(handleClock, 1000);