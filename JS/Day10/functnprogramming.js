function demo(a,b,task){
    console.log(a,b);
    console.log(task);
    task(a,b)
    task(508,87798)
}
demo(10,20,function(e,f){
    console.log(e+f);
})

demo(10,20,function(i,j){
    console.log(i*j);
})

demo(10,2,function(e,f){
    console.log(e**f);
})

demo(10,5,function(e,f){
    console.log(e/f);
})

// functn programming using arrow functn 

function demo(a,b,task){
    console.log(a,b);
    console.log(task);
    task(a,b)
    task(508,87)
}
demo(10,20,(k,1) =>{
    console.log(k-1);
})

function demo(a,b,c){
    console.log(a,b,c);
    c(a,b)
}
demo(10,20,(e,f)=>{
    console.log(e+f);
    
})

function demo1(a,b,task){
    console.log(a,b,task);
    let s=task(a,b)
    console.log(s.next().value);
    console.log(s.next().value);
}
demo(50,)

