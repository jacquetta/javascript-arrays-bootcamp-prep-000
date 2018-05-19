var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function accessElementInArray(c){
  return c[3];
}

var cat = [];
accessElementInArray(cat);


var meArray = [];
var brandArray;
function addElementToBeginningOfArray(a, b){
  brandArray = a.unshift(b);;
  return brandArray;


}
addElementToBeginningOfArray(meArray,);

var nextArray =[];
function destructivelyAddElementToBeginningOfArray(a, b){
    return a.unshift(b);

}
destructivelyAddElementToBeginningOfArray(nextArray, );

var getArray = [];
var updateArray;
function addElementToEndOfArray(a, b){
  updateArray = a.push(b);
  return updateArray;
}
addElementToEndOfArray(getArray,);

var lastArray = [];
function destructivelyAddElementToEndOfArray(){
  return a.push(b);
}
destructivelyAddElementToEndOfArray(lastArray,);
