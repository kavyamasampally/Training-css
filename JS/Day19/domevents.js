function demo(){
    console.log("hello hieee");   
}
function randomcolor(){
    let b=document.body
    // console.log(Math.random()*255);
    

    let red=Math.round(Math.random()*255);
    let green=Math.round(Math.random()*255);
    let blue=Math.round(Math.random()*255);
        b.style.backgroundColor=rgb('${red},${green},${blue}')
}

let rt=document.getElementById("rt")
let div=document.querySelector("div")
rt.onclick=(e)=>{
    console.log(e.target);
    console.log(e.target.innerText);
    console.log(e.clientX);
    console.log(e.clientY);
    let r=Math.floor(Math.random()*20)
    console.log(r);

    for(let i=1;i<=10;i++){
        // console.log(${r}*${i}=${r*i});
        div.innerHTML+=`${r}*${i}=${r*i}`
        div.innerHTML+="<br>"
        
    }
    
}

let btn=document.getElementById("btn")
btn.addEventListener("click",(e)=>{
    console.log("hi event handler");
    console.log(e.target);
    
    
})