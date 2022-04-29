// Pure Fuctions is also called as Callback function and its a intresting and easiet function in javascript
// To remember this fuction we must know a symple syntax like  : functionname = () =>()

const add = (x,y)=>(x+y);
console.log(add(5,4));

const name = (first,last) => (`${first} ${last}`);
console.log(name("Abdul","Shakir"));

// Rule Number 1 : A pure Function Should have Atlear one parameter

var arr = () => ("Hello");
var arr = "Hello";

// No side effect 
// The Below code will become Impure Because z in outside the  lexical scope
const z = 5;
const s = (x,y) => (x+y+z);
console.log(s(2,2));

// Actually impure functions are very very necessery Becuase
// Using Pure funstion we cant accesss database,API,DOM Even we cant log in to the console
// Thats why impure functions also important


// Impure Fuctions Example 1
// The Output for the Below code is 
//2
//2
// Here the value of x is mutated
let x = 1;
const increment = () => (x+=1);
console.log(increment());
console.log(x);

// Impure Fuctions Example 2
// Output Will be
// [ 1, 2, 3, 8 ]
//[ 1, 2, 3, 8 ]
// In this case also my array is mutated

const myarray = [1,2,3];
const addtoarray = (array,data)=>{
    array.push(data);
    return array;
}

console.log(addtoarray(myarray,8));
console.log(myarray);


// Refactoring the impure function // Convertiong impure functions to pure function
// The output for below is 
//3
//2
// Because It converted from impure to pure function
const converting = (num) => (num+=1);
console.log(converting(x));
console.log(x);
// Refracting Example number : 2
// Output of Below Code is
// [ 1, 2, 3, 8, 5 ]
// [ 1, 2, 3, 8 ]

// Here also the array is not mutated then we can simply say its converted to pure function
const addtoarray1 = (array,data)=>[...array,data];

console.log(addtoarray1(myarray,5));
console.log(myarray);


// High Order Functions

const onetofive = [1,2,3,4,5];
const addtofive = onetofive.filter(elem => elem % 2 !== 0);
console.log(addtofive);

const doubled = onetofive.map((ele)=>(ele * 2));
console.log(doubled);

const summed = onetofive.reduce((acc,elem) => (acc+elem));
console.log((summed));

console.log(onetofive);