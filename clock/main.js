const parentClock = document.getElementsByClassName("parentClock")[0]
const Clock = () => {
    let Data = new Date();
    console.log(Date);
    let date = Data.toDateString();
    let hours = Data.getHours();
    let min = Data.getMinutes();
    let sec = Data.getSeconds();
    let pmam= "PM"
    if (hours > 12) {
        hours -= 12
        pmam = "PM"
    }
    else {
        hours
        pmam = 'AM'
    }
    if (hours < 10) {
         hours = `0${hours}`
    }
    if (min < 10) {
       min = `0${min}`
    }
    if (sec < 10) {
        sec = `0${min}`
    }

    
  

    const DrowClock =
        `
 <div class="date">${date}</div>
        <div class="clock">${hours}:${min}: ${sec} ${pmam}</div>
    `;
    parentClock.innerHTML = DrowClock;
}

setInterval(Clock ,1000 )
