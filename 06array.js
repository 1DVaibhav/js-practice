//array in js are mutable;

var myArray = [1, 2, 3, 4];
//printing original array
console.log(myArray);
myArray[0] = 0;
//printing updated array;
console.log(myArray);

//using push function on array;
myArray.push(5);
//printing myArray after pushing element at last;
console.log(myArray);
//pushing multiple elements;
myArray.push(6, 7, 8, 9);
console.log(myArray);

//removing last element;
myArray.pop();
console.log(myArray);

//removing element at index;
myArray.splice(7); //Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.
console.log(myArray);

//slice() method returns a new array containing a portion of the array on which it is implemented
const newArray = myArray.slice(0, 5);
console.log(newArray);

//removing first element of array by using shift();
var ourArray = [["Vai",25],["Ani",25],["Uda",24]];
var ourNewArray = ourArray.shift();
console.log(ourNewArray);//prints removed array["Vai",25];
console.log(ourArray);//prints remaining array ["Ani",25],["Uda",24];
