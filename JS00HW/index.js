let fullName = "Ivan Popovski"; // User name
let age = 17; // User age
let jobTitle = undefined; // User employment status
let gender = "Male"; // User gender
let livesInSkopje = true; // Intrusive data to sell to the government!

let condensedInfoForStorage = {
    name1: fullName,
    age1: age,
    jobTitle1: jobTitle,
    gender1: gender,
    livesInSkopje1: livesInSkopje,
} // The data but now all together

console.log(condensedInfoForStorage); // Check console for secret stuff

function showVariables() {
    alert("Name: " + fullName + "\nAge: " + age + "\nJob Title: " + jobTitle + "\nGender: " + gender + "\nLives in Skopje: " + livesInSkopje);
  } // Press the cool button to get all of the sensitive data, how intuitive, eh?