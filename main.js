const clock = document.querySelector(".clock");

function timer() {
  const time = new Date();
  const hours = time.getHours().toString().padStart(2, "0");
  const minutes = time.getMinutes().toString().padStart(2, "0");
  const seconds = time.getSeconds().toString().padStart(2, "0");

  clock.textContent = `${hours}:${minutes}:${seconds}`;
}

timer();
setInterval(timer, 1000);
