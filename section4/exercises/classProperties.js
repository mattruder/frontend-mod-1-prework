/*
In the exercise below, write your own code where indicated
to achieve the desired result.

Make sure to run the file with node in your command line.
*/

//-------------------
// Part 1: Syntax and Naming Conventions
//-------------------

// For each prompt:
  // Write a class skeleton
  // Create 2 object instances and store in variables
  // Log each variable to the console.
  // You do not need any proerties at this time!!

// Prompt 1: Dog

class Dog {
}

var boris = new Dog();
console.log(boris);

var barry = new Dog();
console.log(barry);


// Prompt 2: Snack

class Snack {

}

var pringles = new Snack();
console.log(pringles);

var twizzlers = new Snack();
console.log(twizzlers);


// Prompt 3: Shirt

class Shirt {

}

var shortSleeve = new Shirt();
console.log(shortSleeve);

var longSleeve = new Shirt();
console.log(longSleeve);

//-------------------
// Part 2: Properties
//-------------------

// For each prompt:
  // Write a class skeleton
  // Add a constructor method
  // Assign 3 properties (names and values of your choice) to each class
  // Create an object instance and store in variable
  // Log that variable to the console.

// Prompt 1: Dog

class Dog1 {
  constructor(){
    this.fur = "brown";
    this.weight = "50 lbs";
    this.bark = "loud";
  }
}

var boris = new Dog1();
console.log(boris);

// Prompt 2: Snack

class Snack1 {
  constructor(){
    this.name = "Pringles";
    this.flavor = "BBQ";
    this.size = "Large";
  }
}

var pringles = new Snack1();
console.log(pringles);

// Prompt 3: Shirt

class Shirt1 {
  constructor(){
    this.size = "Medium";
    this.color = "Red";
    this.sleeves = "Long";
  }
}

var redShirt = new Shirt1();
console.log(redShirt);

//-------------------
// Part 3: Dynamic Properties
//-------------------

// For each prompt:
  // Write a class skeleton
  // Add a constructor method
  // Declare 3 parameters in the consutructor
  // Assign 3 properties (names and values of your choice), using the parameters
  // Create 2 object instances and store in variables (passing in different arguments)
  // Log those variables to the console.

// Prompt 1: Dog

class Dog2 {
  constructor(fur, weight, bark){
    this.fur = fur;
    this.weight = weight;
    this.bark = bark;
  }
}

var newDog = new Dog2("black", "75lbs", "loud");
console.log(newDog);

// Prompt 2: Snack

class Snack2 {
  constructor(name, flavor, size){
    this.name = name;
    this.flavor = flavor;
    this.size = size;
  }
}

var morePringles = new Snack2("Pringles", "Ranch", "Small");
console.log(morePringles);

// Prompt 3: Shirt

class Shirt2 {
  constructor(size, color, sleeves){
    this.size = size;
    this.color = color;
    this.sleeves = sleeves;
  }
}

var blueShirt = new Shirt2("Small", "Blue", "Short");
console.log(blueShirt);
