// Ask the user for the month number
let month = prompt("Enter the month number (1-12):");

// Check if the month is February
if (month === "2") {
  // If it's February, ask for the year
  let year = prompt("Enter the year:");

  // Check if the year is a leap year
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    // If it's a leap year, February has 29 days
    alert("February " + year + " has 29 days.");
  } else {
    // If it's not a leap year, February has 28 days
    alert("February " + year + " has 28 days.");
  }
} else {
  // For all other months, determine the number of days
  let daysInMonth = new Date(2023, month, 0).getDate();
  alert("The month has " + daysInMonth + " days.");
}