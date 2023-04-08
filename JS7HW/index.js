let timer;
let count = 0;
const startButton = document.getElementById('startButton');
const pauseButton = document.getElementById('pauseButton');
const stopButton = document.getElementById('stopButton');

function startTimer(delay, target) {
  setTimeout(function() {
    if (!timer) {
      timer = setInterval(function() {
        count++;
        console.log(`Count: ${count}`);
        if (count === target) {
          clearInterval(timer);
          timer = null;
          count = 0;
        }
      }, 1000);
    }
  }, delay * 1000);
}

startButton.addEventListener('click', function() {
  startTimer(5, 10); // start timer after 5 seconds, count to 10
});

pauseButton.addEventListener('click', function() {
  clearInterval(timer);
  timer = null;
});

stopButton.addEventListener('click', function() {
  clearInterval(timer);
  timer = null;
  count = 0;
}); 