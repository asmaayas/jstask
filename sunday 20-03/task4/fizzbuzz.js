"use strict";
let x=prompt('please inter a number');
let y=prompt('please inter another number');
let z=prompt('please inter another number');
let num1= Number(x);
let num2= Number(y);
let num3= Number(z);

 
if ((x%3==0) || (y%3==0) ||(z%3==0)){
    if ((x%5==0) || (y%5==0) ||(z%5==0)) {
        console.log('fizzbuzz');
        document.write('fizz buzz');
    } else{
    console.log('fizz');
    document.write('fizz');
}}
 else if((x%5==0) || (y%5==0) ||(z%5==0)){
     console.log('buzz');
     document.write('buzz');
 } 