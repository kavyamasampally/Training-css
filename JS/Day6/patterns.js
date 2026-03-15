for(let i=1;i<=5;i++){
    console.log("*");
}

let str=""
for(let i=1;i<=5;i++){
    str+="*"
}

let str1=""
for(let i=1;i<=5;i++){
    for(let j=1;j<=5;j++){
        str1+="*"
    }
    str1+="\n"
}
console.log(str1);

let str2=""
for(let i=1;i<=5;i++){
    for(let j=1;j<=i;j++){
        str2+="*"
    }
    str2+="\n"
}
console.log(str2);

let str3=""
for(let i=1;i<=5;i++){
    for(let j=1;j<=5-i;j++){
        str3+=""
    }
    for(let k=1;k<=i;k++){
        str3+="*"
    }
    str3+="\n"
}
console.log(str3);

let str4=""
for(let i=1;i<=5;i++){
    for(let j=1;j<=5-i;j++){
        str4+=" "
    }
    for(let k=1;k<=2*i-1;k++){
        str4+="*"
    }
    str4+="\n"
}
console.log(str4);

let str5="" ,star=1
for(let i=1;i<=5;i++){
    for(let j=1;j<=5-i;j++){
        str5+=" "
    }
    for(let k=1;k<=star;k++){
        str5+="*"
    }
    str5+="\n"
    star+=2
}
console.log(str5);

let str6=" " , space=4, Star=1
for(let i=1;i<=9;i++){
    for(let j=1;j<=space;j++){
        str6+=" "
    }
    for(let k=1;k<=Star;k++){
        str6+="*"
    }
    str6+="\n"
    if(i<5){
        space--
        Star+=2
    }
    else{
        space++
        Star-=2
    }
}
console.log(str6);

let str7=""
for(let i=1;i<=5;i++){
    for(let j=1;j<=5;j++){
    if(i==1||j==1||i==5||j==5){
        str7+="* "
    }
    else{
        str7+="  "
    }
}
str7+="\n"
}
console.log(str7);

let str8=""
for(let i=1;i<=5;i++){
    for(let j=1;j<=5;j++){
    if(i==j||i+j==6){
        str8+="* "
    }
    else{
        str8+="  "
    }
}
str8+="\n"   
}
console.log(str8);

let str9=""
for(let i=1;i<=5;i++){
    for(let j=1;j<=5;j++){
    if(i==1||j==1||i==5||j==5||i==j||i+j==6){
        str9+="* "
    }  
    else{
        str9+="  "
    }
}
str9+="\n"   
}
console.log(str9);

















