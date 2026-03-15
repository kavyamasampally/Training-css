function*demo(){
    console.log("helloo gen fun");
    yield "helo"
    yield "bye"
    console.log("hello gen fun1");
    yield "hi"
}
let a=demo()
console.log(a.next().value);
console.log(a.next().value);
console.log(a.next().value);

let b=function*(){
    yield "hi1"
    yield "html"
    yield "css"
    yield "js"
}

let x=b()
console.log(x.next().value);
console.log(x.next().value);
console.log(x.next().value);
console.log(x.next().value);
console.log(x.next().done);

// parameters and Arguments
function*demo1(a,b){
    console.log(a,b);
    console.log(a+b);   
}
let c=demo1(10,30)
console.log(c.next().value);

//  No parameters with Arguments
function*demo2(){
    console.log("hi demo2");
    console.log(arguments);
    console.log(arguments[0],arguments[1]);
    console.log(arguments[0]+arguments[1]);
}
let d=demo2(10,20)
console.log(d.next().value);


