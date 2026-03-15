let div=document.querySelector('div')
let btn1=document.getElementById('btn1')
let btn2=document.getElementById('btn2')
div.addEventListener("click",()=>{
btn1.addEventListener("click",()=>{
    console.log('div is clicked');
})
btn2.addEventListener("click",()=>{
    console.log('btn2 is clicked');    
})
document.body.addEventListener("click",()=>{
    console.log('body')
})
})