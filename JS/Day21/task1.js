let grandparent=document.getElementById("grandparent");
let parent=document.getElementById("parent");
let child=document.getElementById("child");

grandparent.addEventListener("click",(e)=>{
    e.stopPropagation();
    grandparent.style.backgroundColor= "red"
})

parent.addEventListener("click",(e)=>{
    e.stopPropagation();
    parent.style.backgroundColor= "green"
})

child.addEventListener("click",(e)=>{
    e.stopPropagation();
    child.style.backgroundColor= "blue"
})
