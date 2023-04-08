        function logValues() {
			let firstName = document.getElementById("first-name").value;
			let lastName = document.getElementById("last-name").value;
			console.log("First Name: " + firstName);
			console.log("Last Name: " + lastName);
			let lis = document.querySelectorAll("li");
			for (let i = 0; i < lis.length; i++) {
				lis[i].textContent += " - " + firstName + " " + lastName;
			}
		}