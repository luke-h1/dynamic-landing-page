const time = document.getElementById('time');
const greeting = document.getElementById('greeting');
const name = document.getElementById('name');
const focus = document.getElementById('focus');

// show time
function showTime() {
  let today = new Date();
  let hour = today.getHours();
  let min = today.getMinutes();
  let sec = today.getSeconds();
  // set AM or PM
  const amPm = hour >= 12 ? 'PM' : 'AM';

  // 12 hour format
  hour = hour % 12 || 12;

  // output time in DOM
  time.innerHTML = `${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(
    sec
  )}`;
  setTimeout(() => {
    showTime();
  }, 1000);
}

// add zeros to numbers less than 10

function addZero(num) {
  return (parseInt(num, 10) < 10 ? '0' : '') + num;
}

// set background image & greeting

function setBgGreet() {
  let today = new Date();
  let hour = today.getHours();
  if (hour < 12) {
    // morning
    document.body.style.backgroundImage = 'url(img/morning.jpg)';
    greeting.textContent = 'Good Morning';
  } else if (hour < 18) {
    document.body.style.backgroundImage = 'url(img/evening.jpg)';
    greeting.textContent = 'Good Afternoon';
    // afternoon
  } else {
    // night
    document.body.style.backgroundImage = 'url(img/night.jpeg)';
    greeting.textContent = 'Good Night';
    document.body.style.color = '#fff';
  }
}

showTime();
setBgGreet();
