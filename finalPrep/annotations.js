// Add your annotations, line by line, to the code below using code comments.
// Use the double // to create a new comment

//Build a Bear
// declare a function called buildABear and add 5 parameters
function buildABear(name, age, fur, clothes, specialPower) {

// declare a variable greeting that returns a string which interpolates the bear name
  var greeting = `Hey partner! My name is ${name} - will you be my friend?!`;
//declare a variable that returns an array with the bear's name and age
  var demographics = [name, age];
// declare a variable that returns a string that states the bear's special power
  var powerSaying = "Did you know that I can " + specialPower + " ?";
// declare a variable assigned to an object with several key-value pairs that define the bear
  var builtBear = {
    basicInfo: demographics,
    clothes: clothes,
    exterior: fur,
    cost: 49.99,
    sayings: [greeting, powerSaying, "Goodnight my friend!"],
    isCuddly: true,
  };

// returns variable builtBear and includes each key-value pair
  return builtBear
}

// defines 2 bears with different parameters.
buildABear('Fluffy', 4, 'brown', ['pants', 'jorts', 'tanktop'], 'give you nightmares');
buildABear('Sleepy', 2, 'purple', ['pajamas', 'sleeping cap'], 'sleeping in');



//FizzBuzz

//declare a function called fizzBuzz containing 3 parameters
function fizzBuzz(num1, num2, range) {
//create a for loop with a condition counter containing initialization, condition and update
  for (var i = 0; i <= range; i++) {
//if there is a remainder of 0 when you divide i by num1 and num2, log 'fizzbuzz'
    if (i % num1 === 0 && i % num2 === 0) {
      console.log('fizzbuzz');
// if only num1 has a remainder of 0, log 'fizz'
    } else if (i % num1 === 0) {
      console.log('fizz');
// if only num2 has a remainder of 0, log 'buzz'
    } else if (i % num2 === 0) {
      console.log('buzz');
// if neither have a remainder of 0, log i
    } else {
      console.log(i);
    }
  }
}

fizzBuzz(3, 5, 100);
fizzBuzz(5, 8, 400);
