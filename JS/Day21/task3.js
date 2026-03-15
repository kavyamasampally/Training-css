// with event propogation

let ul=document.querySelector("ul");
ul.addEventListener("click",(e)=>{
    console.log(e.target);
    e.target.style.backgroundColor=e.target.innerText
})