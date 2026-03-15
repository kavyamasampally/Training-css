var a=80
function demo(){
    var a=10
    function d1(){
        var a=50
        console.log("hi d1");
        console.log(a);
        console.log(this.a);
    }
    function d2(){
        console.log("hi d2");
        console.log(a);
    }
    d1()
    d2()
    // return d1
    // return[d1,d2]
    // return demo()
}
demo()
// demo()()                 
// demo()[0]()
// demo()[1]()