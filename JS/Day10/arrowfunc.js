let a=()=>{
    console.log("hi arrow");  
}
a()

// implicit arrow fun
let s=()=>console.log("hii implicit");
s()
let q=x=>console.log("hi "+x);
q(10)
let q1=x=>x;
console.log(q1(10));

let q2=(x,y)=>x+y
console.log(q2(50,80));

// explicit arrow fun
let d=()=>{
    return "hii"
}
console.log(d());

let d1=(x,y)=>{
    console.log(x,y);
    return x+y
}
console.log(d1(10,40));

let d2=(x,y,g,h)=>{
    console.log(x,y,g,h);
    return x+y
}
console.log(d2(10,40));

let d3=(x,y)=>{
    console.log(x,y);
    // console.log(arguments);  
    return x+y
}
console.log(d3(10,40,67,89,97));

// let a1=new d3()
// console.log(Object.getprototyprof(a1)==d3.prototype);
console.log("prototype" in d3);

var b1=50
let r=()=>{
var b1=80
console.log(b1);
console.log(this.b1);
console.log(window.b1);
}
r()










