let a=10,b="20"
//implicit typecasting
console.log(b-a);
console.log(a*b);
console.log(a+b);
console.log(b/a);
console.log(b%a);
console.log(b++);
console.log(b);
console.log(a+b);
console.log(b);
console.log(b-a);

//explicit typecasting
let x=10,y="20"
console.log(x+Number(y));
console.log(String(x)+Number(y));
console.log(Boolean(x)+Number(y));
console.log(Boolean(x)+y);
console.log(y+undefined);
console.log(y*undefined);//nan

let res=5*"2"+true+false+"20"
console.log(res);

let res1=5%"20a"+Boolean("50")*80-60
console.log(res1);

















