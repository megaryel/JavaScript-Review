/* Make sure you do these last */

/*

Write a function that takes an array of integers and returns the sum of the integers after adding 1 to each.

plusOneSum([1, 2, 3, 4]); // 14

*/

var plusOneSum = function(array) {
	var arr = [];
	for(var i = 0; i < array.length; i++) { 
		arr.push(array[i] + 1);
	};
	alert(eval(arr.join('+')));
}

// why didnt it work when i did array[i]++?

/*

Write a function that accepts a multi dimensional array and returns a flattened version.

flatten([1, 2, [3, [4], 5, 6], 7]) // [1, 2, 3, 4, 5, 6, 7]

*/

var flatten = function(array) {
	var merged = [];
	merged = merged.concat.apply(merged, array);
	var mergedSecond = [];
	mergedSecond = mergedSecond.concat.apply(mergedSecond, merged);
	console.log(mergedSecond);
}

flatten([1, 2, [3, [4], 5, 6], 7])

/*

Given an array [a1, a2, ..., aN, b1, b2, ..., bN, c1, c2, ..., cN] convert it to [a1, b1, c1, a2, b2, c2, ..., aN, bN, cN]

Given an array [a1, a2, aN, b1, b2, bN, c1, c2, cN] convert it to [a1, b1, c1, a2, b2, c2, aN, bN, cN]

Given an array ["a1", "a2", "aN", "b1", "b2", "bN", "c1", "c2", "cN"] convert it to ["a1", "b1", "c1", "a2", "b2", "c2", "aN", "bN", "cN"]
*/


/*

There is an array of non-negative integers. A second array is formed by shuffling the elements of the first array and deleting a random element. Given these two arrays, find which element is missing in the second array.
*/
var firstFirst = [1, 2, 3, 4, 5, 6];
var first = [1, 2, 3, 4, 5, 6];

function shuffle(o){ //v1.0
    for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    var ri = Math.floor(Math.random() * my_array.length);
	o.splice(ri, 1); 
    return o;
};

var second = shuffle(first);
// why does this affect the original array?

Array.prototype.diff = function(a) {
    return this.filter(function(i) {return a.indexOf(i) < 0;});
};

firstFirst.diff(second);

/*

Write a function that returns the longest word(s) from a sentence. The function should not return any duplicate words (case-insensitive).

Example

longestWords("You are just an old antidisestablishmentarian") // ["antidisestablishmentarian"]
longestWords("I gave a present to my parents") // ["present", "parents"]
longestWords("Buffalo buffalo Buffalo buffalo buffalo buffalo Buffalo buffalo") // ["buffalo"] or ["Buffalo"]

*/
// var longest = function (s) {
// 	var wordArr = s.split(" ");
// 	wordArr.sort(function(a, b) {
// 		return b.length - a.length;
// 	})
// 	var longestWords = [];

// 	return longestWords;
// };

// var longestWords = function() {

// }

var str = "i gave a present to my parents";
var longestWords = function(str) {
	str = str.split(" ");
	var longest = [];
	var count = 0;
	for (var i = 0; i < str.length; i++) {
		if(str[i].length === count) {
			longest.push(str[i]);
		}
		else if (str[i].length > count) {
			longest = [];
			count = str[i].length
			longest.push(str[i]);
		}
	}
	return longest;
}

longestWords(str);

/*

If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Find the sum of all the multiples of 3 or 5 below 1000.

*/
var thouSum = function() {
	var arr = [];
	for (var i = 1; i <= 1000; i++) {
		if (i % 3 === 0 || i % 5 === 0) {
			arr.push(i);
		}
	}
	alert(eval(arr.join('+')));
}

/*

Remove duplicate characters in a given string keeping only the first occurrences. For example, if the input is ‘tree traversal’ the output will be "tre avsl".

*/
// var original = function(str) {
// 	var arr = [];
// 	var obj = {};
// 	var letterArr = str.split('');
// 	for (var i = 0; i < letterArr.length; i++) {
// 		obj[letterArr[i]] = 0; 
// 		arr.push(obj[i]);
// 	}
// 	console.log(arr);
// }

// var original = function(str) {
// 	var arr = [];
// 	var obj = {};
// 	var letterArr = str.split('');
// 	for (var i = 0; i < letterArr.length; i++) {
// 		obj[letterArr[i]] = 0; 
// 	}
// 	for (i in obj) {
// 		arr.push(i);
// 	}
// 	console.log(arr);
// }

// var letterArr = str.split('');

var original = function(str) {
	var array = str.split('');
	var arr = [];
	var obj = {};
	for (var i = 0; i < array.length; i++) {
		obj[array[i]] = 0; 
	}
	for (i in obj) {
		arr.push(i);
	}
	console.log(arr.join(''));
}

/*
Write a sum method which will work properly when invoked using either syntax below.

console.log(sum(2,3));   // Outputs 5
console.log(sum(2)(3));  // Outputs 5

*/

var sum = function(a, b) {
  if (a, b) {
  	return a + b;
  } 
  else {
  	function inside (b) {
  		return a + b
  	}
  	return inside
 }


  var arr = [a, b];
  return eval(arr.join('+'));
} 
