//old method of writing function;
var arrowFunc = function (arr1, arr2) {
    return arr1.concat(arr2);    
};
console.log(arrowFunc([1,2,3],[4,5,6]))

//convering same function into arrow function;
const ARROWFUNC = (arr1, arr2) => arr1.concat(arr2);

console.log(ARROWFUNC([1,2],[3,4,5]));