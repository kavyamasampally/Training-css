let inc=document.querySelector("#inc")
let dec=document.querySelector("#di")
let num=document.querySelector("#num")
console.log(inc);
console.log(dec);
console.log(num.innerText);

inc.addEventListener("click",()=>{
    console.log(num.innerText++);
    
})
dec.addEventListener("click",()=>{
    if(num.innerText>1){
        console.log(num.innerText--);    
    }
})


let btn=document.querySelector("#num1")
let div=document.querySelector("div")
console.log(btn);
let num1=prompt("Enter your value")
btn.innerText=num1

btn.addEventListener("click",()=>{
    for(i=1; i<=10; i++){
        div.innerText+=`${num1}*${i}=${num1*i}`
        div.innerHTML+="<br>"
    }
})





