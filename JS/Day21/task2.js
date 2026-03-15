let btn1=document.getElementById("btn1")

btn1.addEventListener("click",()=>{
    console.log("one");
    
})
btn1.addEventListener("click",()=>{
    console.log("two");
    
})
btn1.addEventListener("click",(e)=>{
    e.stopImmediatePropagation();
    console.log("three");
    
})
btn1.addEventListener("click",()=>{
    console.log("four");
    
})