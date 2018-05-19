var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function accessElementInArray(c){
  return c[3];
}

var cat = [];
accessElementInArray(cat);


function addElementToBeginningOfArray(a, b){
  return [b, ...a];
}
addElementToBeginningOfArray();

function desructiveAddElementToBeginningOfArray(a, b){
  return a = a.unshift(b);

}
descructiveAddElementToBeginningOfArray();

function addElementToEndOfArray(c, d) {
  return [...c, d];
}
addElementToEndOfArray();

function destructivelyAddElementToEndOfArray(c, d){
  return c = c.push(d);
}

destructivelyAddElementToEndOfArray();


function destructivelyRemoveElementFromBeginningOfArray(a){
  return a.shift();
}

destructivelyRemoveElementFromBeginningOfArray();

function destructivelyRemoveElementFromEndOfArray(b){
  return b.pop();
}
destructivelyRemoveElementFromEndOfArray();

function removeElementFromEndOfArray(j) {
  return j.slice(0, j.length - 1);
}

removeElementFromEndOfArray();
// var meArray = [];
// var brandArray;
// function addElementToBeginningOfArray(a, b){
//   brandArray = a.unshift(b);;
//   return brandArray;
//
//
// }
// addElementToBeginningOfArray(meArray,);
//
// var nextArray =[];
// function destructivelyAddElementToBeginningOfArray(a, b){
//     return a.unshift(b);
//
// }
// destructivelyAddElementToBeginningOfArray(nextArray, );
//
// var getArray = [];
// var updateArray;
// function addElementToEndOfArray(a, b){
//   updateArray = a.push(b);
//   return updateArray;
// }
// addElementToEndOfArray(getArray,);
//
// var lastArray = [];
// function destructivelyAddElementToEndOfArray(){
//   return a.push(b);
// }
// destructivelyAddElementToEndOfArray(lastArray,);
