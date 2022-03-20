"use strict";
let x= prompt('please inter an operation( / * - + ) ');
let y= prompt('please inter  a number');
let z= prompt('please inter  a number');
let num1=Number(y);
let num2=Number(z);
switch (x){
    case '/':
        console.log(`the operation ${y} / ${z} = ${num1/num2}`);
        document.write(`the operation ${y} / ${z} = ${num1/num2}`);
        break;
    case '*':
        console.log(`the operation ${y} * ${z} = ${num1*num2}`);
        document.write(`the operation ${y} * ${z} = ${num1*num2}`);
        break;
    case '+':
        console.log(`the operation ${y} + ${z} = ${num1+num2}`);
        document.write(`the operation ${y} + ${z} = ${num1+num2}`);
        break;
    case '-':
        console.log(`the operation ${y} - ${z} = ${num1-num2}`);
        document.write(`the operation ${y} - ${z} = ${num1-num2}`);
        break;
}