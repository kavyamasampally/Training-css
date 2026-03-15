//simple if
if(15>8){
    console.log("hello!!");
}
//if else
if(5>8){
    console.log("hello!!");
}
else{
    console.log("tata bye bye");
}
//ele-if-ladder
if(5>8){
    console.log("hello html");
}
else if(5==8){
    console.log("hello css");
}
else if(5<9){
    console.log("hello js");
}
else{
    console.log("bye bye");
}
//nested if
if(5<7){
    if(4==6){
        console.log("hii");   
    }
    else{
        console.log("hello");
    }
}
else{
    console.log("tata");   
}

//switch
let a="z"
switch(a){
    case "a":console.log("it is a vowel");
    case "e":console.log("it is a vowel");
    case "i":console.log("it is a vowel");
    case "o":console.log("it is a vowel");
    case "u":console.log("it is a vowel");
    default:console.log("it is a consonent");
}

for(let i=1;i<=5;i++){
    if(i==3){
        // break;
        continue
    }
    console.log(i); 
}