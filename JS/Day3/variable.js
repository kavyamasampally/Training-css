var a=10
console.log(a);

let a1=20
console.log(a1);

const a2=30
console.log(a2);

console.log(window);


//HOISTING
console.log(b);    //UNDEFINED
var b=40
console.log(b);

// console.log(b1);   //reference error
let b1=50
console.log(b1);


// console.log(b2);   //reference error
const b2=60
console.log(b2);

//DECLERATION & INITIALIZATION

var c=70
console.log(c);

let c1=80
console.log(c1);

const c2=90
console.log(c2);


//DECLERATION
var d
console.log(d);    //UNDEFINED

let d1
console.log(d1);    //UNDEFINED

// const d2    //syntax error
// console.log(d2);


//INITIALIZATION
d=11
console.log(d);

d1=12
console.log(d1);

d2=13
console.log(d2);  //not possible but by default it will take var



//RE-DECLERATION
var d=21
console.log(d);

// // let d1=22    //SYNTAX ERROR
// console.log(d1);

// const d2=23  
// console.log(d2);  //REFERENCE ERROR


//RE-INITIALIZATION
c=99
console.log(c);

c1=98
console.log(c1);

// c2=97
// console.log(c2);   //TYPE ERROR