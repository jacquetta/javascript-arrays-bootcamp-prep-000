var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function accessElementInArray(c, b){
  return c[b];
}

accessElementInArray();


function addElementToBeginningOfArray(a, b){
  return [b, ...a];
}
addElementToBeginningOfArray();



function destructivelyAddElementToBeginningOfArray(a, b){
  return  a.unshift(b);

}
destructivelyAddElementToBeginningOfArray();



function addElementToEndOfArray(c, d) {
  return [...c, d];
}
addElementToEndOfArray();



function destructivelyAddElementToEndOfArray(c, d){
  return c.push(d);
}

destructivelyAddElementToEndOfArray();


function destructivelyRemoveElementFromBeginningOfArray(g){
  return g.shift();
}
destructivelyRemoveElementFromBeginningOfArray();


function removeElementFromBeginningOfArray(a){
  return a.slice();
}
removeElementFromBeginningOfArray();




function destructivelyRemoveElementFromEndOfArray(b){
  return b.pop();
}
destructivelyRemoveElementFromEndOfArray();




function removeElementFromEndOfArray(j) {
  return j.slice(0, j.length - 1);
}

removeElementFromEndOfArray();
