//no parameters no arguments
// a() ## no hoisting (not possible)
let a=function(){
    console.log("hello fun exp");
}
a()

// parameters and Arguments
let a2=function(a,b){
    console.log(a,b);
    console.log(a+b);
}
a2(10,20)

//  No parameters with Arguments
let b=function(){
    console.log("hi demo2");
    console.log(arguments);
    console.log(arguments[0],arguments[1]);
    console.log(arguments[0]+arguments[1]);
}
b()

//  with parameters no Arguments
let c=function(a,b){
    console.log(a,b);
    console.log(a+b);
}
c()

// Less no of arguments more no of parameters
let d=function(a,b,c,d){
    console.log(a,b,c,d);
    console.log(b+c);
    console.log(a+b);
}
d(10,20)

// more no of args less no of parameters
let e=function(a,b){
    console.log(a,b);
    console.log(a+b);
    console.log(arguments);
}
e(10,20,50,80,90)

// return
let f=function(a,b){
    console.log("hii demo6");
    return a+b
    return "hello"
    console.log("hello");
}
console.log(f(50,10));
console.log(f);

// this
var a1=20
let g=function demo7(){
    var a=10
    console.log(a);//10
    console.log(this.a);
}
g()
console.log(window);


