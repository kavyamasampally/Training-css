let a=20,b=30

//ARITHMETIC OPERATOR
console.log(a+b);   //50
console.log(a-b);   //-10
console.log(a*b);   //600
console.log(a/b);   //0.66
console.log(a%b);   //20
console.log(2**4);  //16
console.log(a++);   //21
console.log(a);     //20
console.log(++a);   //22
console.log(b--);   //30
console.log(b);     //30
console.log(--b);   //28



//ASSIGNMENT OPERATOR
a+=5
console.log(a);  //27

a-=2
console.log(a);   //25

a%=5
console.log(a);   //0

b/=2
console.log(b);    //14
console.log(b**2);   //196


//RELATONAL OPERATOR
console.log(5>6);   //false
console.log(5<6);   //true
console.log(5<=6);  //true
console.log(5>=6);  //false
console.log(5==6);  //false
console.log("5"==5);  //true
console.log(5!=6);  //true
console.log(5===5);  //true
console.log("5"===5);  //false
console.log("5"!==5);   //true
console.log(5>5);  //false
console.log(5<5);  //false



//LOGICAL OPERATOR
console.log(5<6 && 15>2);  //t t t
console.log(5>6 && 15>2);  //f t f
console.log(5<6 && 15<2);  //t f f
console.log(5>6 && 15<2);  //f f f

console.log(5<6 || 15>2);  //t t t
console.log(5>6 || 15>2);  //f t t
console.log(5<6 || 15<2);  //t f t
console.log(5>6 || 15<2);  //f f f

let x=true
console.log(x);  //true
console.log(!x); //false