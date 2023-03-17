// Cars class
class Car {
    constructor(brand, year, horsepower) {
      this.brand = brand;
      this.year = year;
      this.horsepower = horsepower;
    }
  
    // Doing some calc on the age of the car
    getAge() {
      let currentYear = new Date().getFullYear();
      return currentYear - this.year;
    }
  
    // Checking what cars the user can drive based on age
    canUserDriveCar(userAge) {
      if (userAge > 25) {
        return true;
      } else if (this.horsepower <= 105) {
        return true;
      } else {
        return false;
      }
    }
  }
  
  // Just an alert that gathers the users name and age
  let userName = prompt("Please enter your name:");
  let userAge = parseInt(prompt("Please enter your age:"));
  
  // Where the users are stored (used for making the arr of what cars user can drive)
  let users = [{ fullName: userName, age: userAge }];
  
  // Random arr of cars
  let cars = [
    new Car("Ford", 2010, 120),
    new Car("Toyota", 2015, 95),
    new Car("Honda", 2005, 80)
  ];
  
  // This sees how old the user is, and depending on age it gives cars which the user can drive
  let userCars = [];
  for (let i = 0; i < cars.length; i++) {
    if (cars[i].canUserDriveCar(userAge)) {
      userCars.push(cars[i]);
    }
  }
  
  // The alert where you get to see what cars you can drive
  let message = `${userName}, you can drive:\n`;
  for (let i = 0; i < userCars.length; i++) {
    message += `- ${userCars[i].brand} (${userCars[i].horsepower}hp)\n`;
  }
  alert(message);
  