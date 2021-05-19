// Question 1 - Write a function that parses (loops) through the below object and displays all of their favorite food dishes as shown:
let person3 = {
    pizza: ["Deep Dish", "South Side Thin Crust"],
    tacos: "Anything not from Taco bell",
    burgers: "Portillos Burgers",
    ice_cream: ["Chocolate", "Vanilla", "Oreo"],
    shakes: [{
        oberwise: "Chocolate",
        dunkin: "Vanilla",
        culvers: "All of them",
        mcDonalds: "Sham-rock-shake",
        cupids_candies: "Chocolate Malt"
    }]
}

for (var key of Object.keys(person3)) {
    console.log(person3[key])
}

// Question 2 Write an object prototype for a Person that has a name and age, has a
// printInfo method, and also has a method that 
// increments the persons age by 1 each time the method is called.
// Create two people using the 'new' keyword, and print 
// both of their infos and increment one persons
// age by 3 years. Use an arrow function for both methods

function Person(name, age) {
    return {
        name: name,
        age: age,
        ageUp: function ageUp() {
            this.age++;
        },
        printInfo: function printInfo() {
            console.log(this.name + "is"
                this.age + "years old");
        },
        changeName: function changeName(newName) {
            this.name = newName;
        }
    }
}

let Felix = new Person('Felix', 29);
Felix.printInfo();

Felix.ageUp();

let Liz = new Person('Liz', 27);
Liz.printInfo();

Liz.ageUp()

// Question 3

let length = 'supercalifragilisticexpialidocious'

const issumtingwong = (length) => {
    return new Promise((resolve, reject) => {
        if (len > 10) {
            resolve(length);
        } else {
            reject("And it's just short!");
        }
    })
}