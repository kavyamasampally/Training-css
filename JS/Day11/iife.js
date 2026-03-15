(function demo(x,y){
    console.log("hi life");
    console.log(x,y);
    
})(10,20);

(()=>{
    console.log("hi arrow");
})()

let a=(function(){
    console.log("hi functn exprssn");
})()