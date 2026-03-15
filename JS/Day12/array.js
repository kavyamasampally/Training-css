//literal
let arr=[]
console.log(arr);

//new keyword
let arr1=new Array()
console.log(arr1);

//constructor
let arr2=Array()
console.log(arr2);

let arr3=[10,20,"hi",true,NaN,null,undefined,50n]
console.log(arr3);
console.log(arr3[2]);

let arr4=[]
console.log(arr4);
arr4.push(50,60,70)
console.log(arr4);
arr4.push("hi",40)
console.log(arr4);

arr4.pop()
console.log(arr4);
arr4.pop()
console.log(arr4);

arr4.unshift(70,80)
console.log(arr4);
arr4.unshift("hello")
console.log(arr4);

arr4.shift()
console.log(arr4);
arr4.shift()
console.log(arr4);

console.log(arr4.length);

let arr5=[50,40,20,30,10]
console.log(arr5);
console.log(arr5.slice(2,3));
console.log(arr5);

console.log(arr5.slice(2,2,"hi"));

// slice: extact the particular element it will not modify original element
// splice: extact the particualr element it will modify original element

console.log(arr5);
arr5.splice(2,4)
arr5.splice(0)
console.log(arr5);

let arr6=[10,20,30,40,20,50]
arr6.splice(2,0,"hi")
console.log(arr6);

console.log(arr6.includes(40));
console.log(arr6.includes("hello"));
console.log(arr6.indexOf(5));
console.log(arr6.indexOf(20));
console.log(arr6.lastIndexOf(20));

let arr7=[10,20,30,40,50]
console.log(arr7);
for(let i of arr7){
    console.log(i);
}
for(let i in arr7){
    console.log(i); 
}

let a=arr7.reduce((acc,va)=>{
    console.log(acc,va);
    return acc+va  
})
console.log(a);
let b=arr7.reduce((acc,va) =>{
    console.log(acc,va);
    return acc+va   
},5)
console.log(b);

let arr8=[10,20,30,40,50]
console.log(arr8);

// let q=arr8.map((e)=>{
//     console.log(e,i);
//     return e-5
// })
// console.log(q);

let r=arr8.filter((e)=>{
    return e>20
})
console.log(r);

let w=arr8.sort((x,y)=>{
    return x-y
    // return y-x
})
console.log(w);

// reverse()
let arr9=[10,20,30,40,50]
console.log(arr9);
console.log(arr9.reverse());

// flat
let arr10=[[10,20],[[[50]]],[[[[40,80]]]],[[[[[[[[[60]]]]]]]]]]
console.log(arr10);
console.log(arr10.flat(1));
console.log(arr10.flat(3));
console.log(arr10.flat(Infinity));

// entries
let x=arr9.entries()
console.log(x);
for(let i of x){
    console.log(i);
}
console.log(arr9);

// for each
arr9.forEach((e,r)=>{
    console.log(e,r)
})

// find
let y=arr9.find((e)=>{
    return e>130
})
console.log(y);

let arr11=[10,50,40]
let arr12=["kavya","karthik","revathi"]
console.log(arr11.concat(arr12));

console.log(arr11);
console.log(arr11.join());




    












    

























