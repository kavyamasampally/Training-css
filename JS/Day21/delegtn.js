let input=document.querySelector("input");
let addbtn=document.querySelector("button");
let ul=document.querySelector("ul");

addbtn.addEventListener("click",()=>{
    ul.innerHTML+=
    <li>
        <span>${input.value}</span>
        <button>Delete</button>
    </li>
    input.value=""

})

ul.addEventListener("click",(e)=>{
    if(e.target.innerText ==="delete"){
        e.target.parentElement.remove();
    }
})