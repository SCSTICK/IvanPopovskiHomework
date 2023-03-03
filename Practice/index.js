class Character {
    constructor(name, health, level, position, damage){
        this.name = name;
        this.health = health;
        this.level = level;
        this.position = position;
        this.damage = damage;
        this.rank
    }
    calcRank() {
        if (this.level < 50){
            this.rank = "NOOB";
        } else if (this.level > 50 && this.level < 70 ){
            this.rank = "AMATER";
        } else if (this.level > 70 && this.level < 90 ){
            this.rank = "MEDIUM";
        } else if (this.level > 90 && this.level < 99 ){
            this.rank = "PRO";
        } else {
            this.rank = "LEGEND";
        }
        return this.rank
    } leaderboardCalc() {
            if (this.health === 100 && this.level === 100) {
              return `Winner is: ${this.name} (Platinum)`;
            } else {
                return `${this.name} does not meet the paramaters for (Platinum)`
            }
          }
    }

let myChar = new Character("Ghost", 100, 100, "Warlock", 9000);
let myChar1 = new Character("Ghost1", 10, 100, "Healer", 9000);
let myChar2 = new Character("Ghost2", 100, 78, "Warlock", 9000);
let myChar3 = new Character("Ghost3", 53, 99, "Warrior", 9000);
let myChar4 = new Character("Ghost4", 96, 57, "Tank", 9000);


console.log(myChar);
console.log(myChar1);
console.log(myChar.calcRank());
console.log(myChar1.calcRank());

console.log(myChar.leaderboardCalc());
console.log(myChar1.leaderboardCalc());
console.log(myChar2.leaderboardCalc());