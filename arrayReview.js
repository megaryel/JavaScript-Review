var threeItems = [1,2,3];
//create a function named 'last' that returns the last item from 'threeItems'
//alert the result of your function

  //code here
var last = function (x) {
	alert(x[x.length-1]);
};


/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */



//Loop through evenArray removing all values that aren't even 
var evenArray = [1,2,3,6,22,98,45,23,22,12];

  //code here
var loop = function(x) {
	for (var i = 0; i < x.length; i++)
		if (x[i] % 2 !== 0) {
			x.splice(i, 1);
			i--;
		}
	return x;
}

/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */



//below you're given a function that will return a random number between 0 and 30 and an array full or numbers 'randomArray'. Your job is to write a function that will get a random number, then loop through the array to see if that random number is in the array. If it is, alert true, if it's not, alert false
var getRandomArbitrary = function() {
  return Math.floor(Math.random() * (30 - 0) + 0);
}
var randomArray = [0,3,4,5,6,7,9,14,17,24,25,26,29,30];

  //code here
var checkRan = function(ranNum, array) {
	var num = ranNum();
	var flag = false;
	console.log(num);
	for (var i = 0; i < array.length; i++) {
		if (array[i] === num) {
			flag = true;
		}
	}
	alert(flag);
}

/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */



//Create a copy of first and save it into second. Then, add 6 and 7 to the end of second. When you run this, first should be just [1,2,3,4,5] and second will be [1,2,3,4,5,6,7] if you created your copy correctly.
var first = [1,2,3,4,5];
var second;

  //code here
var second = first.slice();
second.push(6,7);

alert(first) //[1,2,3,4,5];
alert(second) //[1,2,3,4,5,6,7];



/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */



//write a function called longest that takes in our sentence variable, and returns the longest word in that sentence.
var sentence = "Dev Mountain is the best"

  //code here

var longest = function (s) {
	var wordArr = s.split(" ");
	wordArr.sort(function(a, b) {
		return b.length - a.length;
	})
	return wordArr[0];
};

longest(sentence);


var longest = function(s) {
	var wordArr = s.split(" ");
	for (var i = 0; i < wordArr.length; i++) {
		var letterArr = wordArr[i].split("").length;
		// console.log(letterArr);
		var longestWord = Math.max.apply(Math, letterArr);
			for (var j = 0; j < letterArr.length; i++) {
				if (letterArr[j] === longestWord) {
					console.log(wordArr[j]);
				}
			}
	}
}

find the max value and then print the word

/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */



//write a function called capitalize that takes in the myPoem variable and capitalizes every word 
var myPoem = 'What is a jQuery but a misunderstood object?'
//What is a jQuery but a misunderstood object? --> What Is A JQuery But A Misunderstood Object?

  //code here

var toTitleCase = function(str) {
    return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});}

toTitleCase(myPoem);


/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */



var theOdyssey = "function expression or function declaration? Tis an obvious choice";
//Write a function called vowelCounter that takes in a string (theOdyssey) and returns how many vowels are in that string.

var vowelCounter = function(x) {
	counter = 0; 
	var letterArr = x.split("");
	for (var i = 0; i < letterArr.length; i++) {
		if(letterArr[i] === "a") {
			counter++;
		}
		if(letterArr[i] === "e") {
			counter++;
		}
		if(letterArr[i] === "i") {
			counter++;
		}
		if(letterArr[i] === "o") {
			counter++;
		}
		if(letterArr[i] === "u") {
			counter++;
		}
	}
	console.log(counter);
} 

var vowels = {
	a: true,
	e: true,
	i: true,
	o: true,
	u: true,
};

var vowelCounter = function(x) {
	counter = 0; 
	var letterArr = x.split("");
	for (var i = 0; i < letterArr.length; i++) {
		if(vowels[letterArr[i]]){
			counter++;
		}
	}
	return counter;
} 
// why doesnt this work?
