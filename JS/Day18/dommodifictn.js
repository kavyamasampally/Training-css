let h1=document.querySelector("h1")
console.log(h1);

console.log(h1.innerText);
console.log(h1.textContent);
console.log(h1.innerHTML);
h1.innerText="hii"
console.log(h1.innerText);
console.log(h1.textContent);
console.log(h1.innerHTML);
h1.innerText+="css"
h1.textContent="tata bye bye css"
h1.innerText="<span>hello span</span>"
h1.textContent="<b> hello span</b>"
h1.innerHTML="<b> hello span</b>"
let b=document.body
console.log(b);
let x=b.innerHTML=`<table border=2px solid height=200px width=200px>
                <tr>
                    <td></td>
                    <td></td>    
                </tr>
                <tr>
                    <td></td>
                    <td></td> 
                </tr>
            </table>`
// console.log(x.firstElementChild.firstElementChild.firstElementChild);
console.log(typeof x);
console.log(x);

let t=document.createElement("table")
console.log(t);
b.append(t)

let tr1=document.createElement("tr")
t.append(tr1)
let tr2=document.createElement("tr")
t.append(tr2)

let td1=document.createElement("td")
tr1.append(td1)
let td2=document.createElement("td")
tr1.append(td2)
let td3=document.createElement("td")
tr2.append(td3)
let td4=document.createElement("td")
tr2.append(td4)

td1.innerText="😊hello"
td2.textContent="html👌"
td3.innerHTML="tata💕"
td4.innerHTML="<i>bye!😍</i>"




                



