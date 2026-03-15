let a=document.body
console.log(a);
console.log(a.firstElementChild);
console.log(a.firstElementChild.firstElementChild);
console.log(a.lastElementChild);
console.log(a.lastElementChild.previousElementSibling);
console.log(a.firstElementChild.lastElementChild);
console.log(a.firstElementChild.firstElementChild.nextElementSibling);
console.log(a.firstChild);
console.log(a.firstElementChild.firstChild);
console.log(a.firstElementChild.firstElementChild.nextElementSibling.nextSibling);

console.log(a.firstElementChild.lastChild);
console.log(a.firstElementChild.lastChild.previousSibling.previousSibling);
let q=a.firstElementChild.lastChild.previousElementSibling.previousSibling
console.log(q.parentElement.parentElement);
console.log(q.parentNode);
console.log(a.firstElementChild.children);
console.log(a.firstElementChild.childNodes);
let x=a.firstElementChild.childNodes
console.log(x[0]);
console.log(x[3]);
console.log(a.firstElementChild.childElementCount);

















