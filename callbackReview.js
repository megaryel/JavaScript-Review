/* Declare and Define the functions here that will make the function calls below work properly */



var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];
first(names, function(firstName){
  console.log('The first name in names is ', firstName)
});

var first = function (array, callBack) {
  callBack(array[0]);
}


/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */




var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];
last(names, function(lastName){
  console.log('The last name in names is ', lastName);
});

var last = function (array, callBack) {
  callBack(array[array.length - 1]);
}


/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */

//have the contains function return a boolean value for if the name is in the array or not.


var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];
contains('Colt', names, function(yes){
  if(yes){
    console.log('Colt is in the array');
  } else {
    console.log('Colt is not in the list');
  }
});

var contains = function(name, array, callBack) {
    if(array.indexOf(name) !== -1) {
      callBack(true);
    }
}



/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */




var numbers = [1,2,3,4,5];
//Produces a new array of values by mapping each value in list through a transformation function
map(numbers, function(num){
  return num * 2; //returns an array of [2,4,6,8,10]
});

var map = function(array, callBack) {
    var newNum = [];
    for(var i = 0; i < array.length; i++) {
      newNum.push(callBack(array[i]));
    }
    return newNum;
}



/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */




var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];

var uniq = function(array, callBack) {
  var uniqueArr = [];
  var obj = {};
  for(var i = 0; i < array.length; i++) {
    obj[array[i]] = 0;
  }
  for(var key in obj) {
    uniqueArr.push(key);
  }
  callBack(uniqueArr);
}

uniq(names, function(uniqArr){
  console.log('The new names array with all the duplicate items removed is ', uniqArr);
});




/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */




var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];

var each = function(array, callBack) {
  for (var i = 0; i < array.length; i++) {
    callBack(array[i], i);
  }
}

each(names, function(item, indice){
  console.log('The item in the ' + indice + ' position is ' + item)
});

/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */




var users = [
  {
    id: '12d',
    email: 'tyler@gmail.com',
    name: 'Tyler',
    address: '167 East 500 North'
  },
  {
    id: '15a',
    email: 'cahlan@gmail.com',
    name: 'Cahlan',
    address: '135 East 320 North'
  },
  {
    id: '16t',
    email: 'ryan@gmail.com',
    name: 'Ryan',
    address: '192 East 32 North'
  },
];

var getUserById = function(id, array, callBack) {
  for (var i = 0; i < array.length; i++) {
      if (array[i].id === id){
        callBack(array[i]);
      }
  }
}

getUserById('16t', users, function(user){
  console.log('The user with the id 16t has the email of ' + user.email + 'the name of ' + user.name + ' and the address of ' + user.address); 
});


/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */




//Looks through each value in the list, returning the first one that passes a truth test 
var numbers  = [1, 2, 3, 4, 5, 6];

var find = function(array, callBack) {
  for (var i = 0; i < array.length; i++)
    if (callBack(array[i]))
      return console.log(array[i]);
}

find(numbers, function(num){ 
  return num % 2 == 0; //should return 2
})


