let count = 0;
const myButton = document.getElementById('myButton');
const resetButton = document.getElementById('resetButton');

myButton.addEventListener('click', function() {
  count++;
  console.log(`Button clicked ${count} times`);
});

resetButton.addEventListener('click', function() {
  count = 0;
  console.log(`Count reset to ${count}`);
});