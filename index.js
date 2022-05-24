//You can pass arguments to arrow functions, just as you would a regular function.

//So now, we have this regular functionwith arguments below:




/*
var myConcati = function(arr1, arr2)

{
    return arr1.concat(arr2);
};

console.log(myConcati([1, 2], [3, 4, 5]));
*/




//Switching that up to an 'arrow function' we have:

const myConcati = (arr1, arr2) => arr1.concat(arr2);
;

console.log(myConcati([1, 2], [3, 4, 5]));