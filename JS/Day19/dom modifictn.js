let b=document.body
console.log(b);

let t=document.createElement("table")
b.append(t)

t.setAttribute("border","2px solid")
t.style.height="200px"
t.style.width="200px"

let tr1=document.createElement("tr")
t.append(tr1)
let td1=document.createElement("td")
tr1.append(td1)
let td2=document.createElement("td")
tr1.append(td2)
let tr2=document.createElement("tr")
t.append(tr2)
let td3=document.createElement("td")
tr2.append(td3)
let td4=document.createElement("td")
tr2.append(td4)

td1.style.backgroundColor="red"
td2.style.backgroundColor="yellow"
td3.style.backgroundColor="blue"
td4.style.backgroundColor="aqua"

td1.setAttribute("colspan","2")
td2.remove()
td1.removeAttribute("colspan")

let i=document.createElement("img")
b.append(i)
i.style.height="150px"
i.style.width="150px"
i.setAttribute("src","./home-new-bg-free-img.jpg")

// i.remove()

