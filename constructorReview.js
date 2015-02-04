//Create a Animal Constructor that has the following parameters. species, name, legs, color, food (which is an array of foods they can eat).

  //code here
var animal = function(species, name, legs, color, food) {
  this.species = species;
  this.name = name;
  this.legs = legs;
  this.color = color;
  this.food = food;
}

//Now create a person function that creates an object and returns it (not in constructor form) that has the following parameters. name, age, height, gender

  //code here

  var person = function(name, age, height, gender) {
      var obj = {};
      obj.name = name;
      obj.age = age;
      obj.height = height;
      obj.gender = gender;
      return obj;
  }

//Create a animal array and a person array.

  //code here
var animals = [];
var people = [];

//Create two instances of Animal and push those into your animal array

  //code here
var coyote = new animal("coyotine", "coyote", 4, "brown", ["muskrats", "weeds", "dogs"]);
var elephant = new animal("Elephas maximus", "elephant", 4, "gray", ["fruit", "vegetables"]);
animals.push(coyote);
animals.push(elephant);

//Create two instances of person and push those into your person array.

  //code here
var Jen = person("Jen", 13, "4'5", "female");
var Jake = person("Jake", 56, "5'4", "male");
people.push(Jen);
people.push(Jake);

//Now we want every instance of Animal to have a eat method. This method will choose a random item in that instances food array, then alert "(name) ' ate ' (whichever food was chosen)".

  //code here

var animal = function(species, name, legs, color, food) {
  this.species = species;
  this.name = name;
  this.legs = legs;
  this.color = color;
  this.food = food;
  this.eat = function() {
    var foodEaten = this.food[Math.floor(Math.random()*this.food.length)];
    alert(this.name + " ate " + foodEaten);
  }
}

coyote.eat();


//At this point, if we wanted to add something to every istance of person could we? 

  //Yes or no? and why or why not?

Sure, we would just add another property to the object OR maybe we would use a prototype here?

/*
  1) What happens when you use the 'new' keyword to call a Constructor function?
  You create a new instance of that function, without having to actually duplicate the code
  2) What's a good way to describe the keyword 'this'
  Placeholder for the new instances of that function
  3) Can a normal function which creates an object and then returns that object use the prototype?
  Yes 
  4) What happens if you forget to use 'new' when calling a constructor?
  It doesn't work, it just shows the function but doesnt actually make a new copy with the proper values in their places.
*/




__________

ATTEMPTS = 

animal.prototype.eat = function() {
  var foodEaten = this.food[Math.floor(Math.random()*this.food.length)];
  alert(name + " ate " + foodEaten)
}