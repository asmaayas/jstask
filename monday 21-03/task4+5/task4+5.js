//task 4

let star= ''
for (let i=0; i<5; ++i){
star= star+'*'
console.log(star);
}


//task 5
function grade(a){
    let sum=0;
    let avarge=0;
    let grd='';
    for (let i=0; i<a.length;++i){
        sum= sum+a[i]
    }
   avarge= sum / a.length;
if (avarge>=90){
    grd='A';
}
if (avarge>=80 && avarge<90){
    grd='B';
}
if (avarge>=70 && avarge<80){
    grd='C';
}
if (avarge>=60 && avarge<70){
    grd='D';
}
if (avarge<60){
    grd='F';
}

    return` THE AVARGE = ${avarge} , THE GRADE = ${grd}`
}
console.log(grade([70,75,71,72]));