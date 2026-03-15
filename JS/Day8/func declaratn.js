//HOISTING
demo()
function demo(){
    console.log("hi");
}
demo()
demo()

// parameters and Arguments
function demo1(a,b){
    console.log(a,b);
    console.log(a+b);
    
}
demo1(10,20)

//  No parameters with Arguments
function demo2(){
    console.log("hi demo2");
    console.log(arguments);
    console.log(arguments[0],arguments[1]);
    console.log(arguments[0]+arguments[1]);
}
demo2(10,20)
demo2(30,40)

//  with parameters no Arguments
function demo3(a,b){
    console.log(a,b);
    console.log(a+b);
}
demo3()

// Less no of arguments more no of parameters
function demo4(a,b,c,d){
    console.log(a,b,c,d);
    console.log(b+c);
    console.log(a+b);
}
demo4(10,20)

// more no of args less no of parameters
function demo5(a,b){
    console.log(a,b);
    console.log(a+b);
    console.log(arguments);
}
demo5(10,20,50,80,90)

// return
function demo6(a,b){
    console.log("hii demo6");
    return a+b
    return "hello"
    console.log("hello");
}
console.log(demo6(50,10));
console.log(demo6);

// this
var a=20
function demo7(){
    var a=10
    console.log(a);//10
    console.log(this.a);
}
demo7()
console.log(window);

function demo8(a){
    var a=20
    console.log(a); 
}
demo8(40)

console.log("protype" in demo8);

let q=new demo8()
console.log(Object.getprototypeOf(q)==demo8.prototype);









