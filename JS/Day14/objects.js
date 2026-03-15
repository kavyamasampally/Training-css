// literal way
let obj={}
console.log(obj);

let obj1={
    name1:"abc",
    color:"black",
    bname:"kavya magic car",
    price:"1cr",
    seats:"5"
}
console.log(obj1);
console.log(obj1.name1);
console.log(obj1.seats);
console.log(obj1.price);

// new
let obj2=new Object()
console.log(obj2);

// constructor
let obj3=Object()
console.log(obj3);

// function constructor
function demo(name1,id){
    console.log(this.name1=name1);
    console.log(this.id=id);
}
let a=new demo("xyz",698)
console.log(a);
console.log(demo);

let obj5={}
console.log(obj5);

// insertion of k and v
obj5.name1="xyz"
console.log(obj5);

obj5.role="web"
console.log(obj5);

// updation of v
obj5.name1="kavya"
console.log(obj5);
obj5.role="frontend dev"
console.log(obj5);

// delete
delete obj5.name1
console.log(obj5);

delete obj5.role
console.log(obj5);

let obj4={
    name1: "pqr",
    id:123,
    salary:"5lpa"
}
console.log(obj4);
let c=Object.keys(obj4)
console.log(c);
for(let i of c){
    console.log(i);
    
}
let d=Object.values(obj4)
console.log(d);
for(let i of d){
    console.log(i);
    
}

let obj6={
    name1:"rani",
    id:"raja",
    salary:50000,
    role:"dev"
}
console.log(obj6);
console.log(Object.isSealed(obj6));
Object.seal(obj6)
console.log(Object.isSealed(obj6));
// updation
obj6.name1="karthik"
console.log(obj6);

// insertion is not possible
obj6.address="hyd"
console.log(obj6);

// deletion is not possible
delete obj6.name1
console.log(obj6);

console.log(Object.isFrozen(obj6));
Object.freeze(obj6)
console.log(Object.isFrozen(obj6));

// updation is not possible
obj6.name1="Revathi"
console.log(obj6);

// insertion is not possible
obj6.address="hyd"
console.log(obj6);

// deletion is not possible
delete obj6.name1
console.log(obj6);

let q=Object.entries(obj6)
console.log(q);
for(let i of q){
    console.log(i);
}

let obj7={name:"Madhavi"}
let obj8={address:"hyd"}
console.log(obj7.name);

let k=Object.assign(obj8,obj7)
console.log(k);


























