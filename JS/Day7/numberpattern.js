let str=""
for(let i=1;i<=5;i++){
    for(let j=1;j<=5;j++){
        str+=j
    }
    str+="\n"
}
console.log(str);

let str1=""
for(let i=1;i<=5;i++){
    for(let j=1;j<=i;j++){
        str1+=j
    }
    str1+="\n"
}
console.log(str1);

let str2=""
for(let i=1;i<=5;i++){
    for(let j=1;j<=5-i;j++){
        str2+=" "
    }
    for(let k=1;k<=i;k++){
        str2+=k
    }
    str2+="\n"
}
console.log(str2);

let str3=""
for(let i=1;i<=5;i++){
    for(let j=1;j<=5-i;j++){
        str3+=" "
    }
    for(let k=i;k>0;k--){
        str3+=k
    }
    str3+="\n"
}
console.log(str3);

let str4="" ,space=8
for(let i=1;i<=5;i++){
    for(let o=1;o<=i;o++){
        str4+=o
    }
    for(let j=1;j<=space;j++){
        str4+=" "
    }
    space-=2
    for(let k=i;k>0;k--){
        str4+=k
    }
    str4+="\n"
}
console.log(str4);

for(let i=1;i<=5;i++){
    for(j=1;j<=5;j++){
        document.writeln("*")
    }
    document.writeln("<br>")
}
document.writeln("Hii")
document.writeln("Hello")
document.writeln("HTML")
document.writeln("<br>");

for(let i=1;i<=5;i++){
    for(j=1;j<=5;j++){
        document.writeln("*")
    }
    document.writeln("<br>")
}
document.writeln("Hii")
document.writeln("Hello")
document.writeln("HTML")
console.log("<br>");

document.write("<br><br>")

for(let i=1;i<=5;i++){
    for(let j=1;j<=5;j++){
        document.writeln(j)
    }
    document.writeln("<br>")
}




