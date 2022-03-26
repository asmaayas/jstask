
//task1

function tellFortune (a,b,c,d){
console.log(`You will be a ${a} in ${b}, and married to ${c} with ${d} kids.`);
};
console.log(tellFortune('software engineer', 'Jordan', 'Alice', 3));


//task 2

function calculateDogAge (a){
    let age= a*7;
    console.log(`Your doggie is ${age} years old in dog years!`);
};
console.log(calculateDogAge(3));

//task3
function calculateSupply(a,b){
    let x = (100-a)*b*365;
    console.log(`You will need ${x} cups of tea to last you until the ripe old age of 100`);
};
console.log(calculateSupply(30, 3));


//task4
function greet (n) {
    return `HELLO ${n}`;
    
}
console.log(greet("Adam"));

/*
7
Write a function called cube that:
accept 1 parameter and calculate the cube of this number

Ex: cube(4)
=> 64
*/
function cube(n){
    return n*n*n
}
console.log(cube(8));
/*
Write a function called multiply that:
accept 2 parameters and calculate the multiply of these 2 numbers

Ex: multiply(3,4)
=> 12
Ex: multiply(5,4)
=> 20
*/
function multiply(w,z){
return w*z
}
console.log(multiply(5,4));
/*
9
Write a function called canIGetADrivingLicense that:
accept 1 parameter represent the age
and if the age greater than or equal to 20 return "yes you can"
otherwise return "please come back after X years to get one"

Ex: canIGetADrivingLicense(21)
=> "yes you can"

Ex: canIGetADrivingLicense(17)
=> "please come back after 3 years to get one"

Ex: canIGetADrivingLicense(20)
=> "yes you can"

*/
function canIGetADrivingLicense(a){
if (a >= 20){
    return "yes you can";
}
else  {
return `please come back after ${20-a} years to get one`;
}
}
console.log(canIGetADrivingLicense(15));

/*
10
Write a function called sameLength
that accepts two strings as arguments,
and returns true if those strings have the same length, and false otherwise.

**hint: how we can know string length   Ex: : "tree".length   => 4

Ex: sameLength("tree","clue")
=> true

Ex: sameLength("tree","car")
=> false
*/
function sameLength(a,b){
if (a.length === b.length){
    return true;
} else{
    return false;
}
}
console.log(sameLength("tree","clu"));



/*
11
Write a function called largerNubmer
that accept two numbers as arguments,
and return the first larger numbers

Ex: largerNubmer(5,6)
=> 6

Ex: largerNubmer(5,3)
=> 5
*/
function largerNubmer(a,b){
    if (a<b){
        return b
    }else{
        return a
    }

} 
console.log(largerNubmer(5,1));

/*
12
Write a function called smallerNubmer
that accept three numbers as arguments,
and return the first smaller number

Ex: smallerNubmer(8,6,7)
=> 6

Ex: smallerNubmer(5,99,34)
=> 5

Ex: smallerNubmer(5,99,3)
=> 3

Ex: smallerNubmer(5,3,3)
=> 3

*/
function smallerNubmer(a,b,c){
    if (a <= b){
        if (a <=c){
            return a;
        }else if(c <= a){
            return c
        }
    }else if (b <=c){
        return b;}
    }
    
        // if(a<c){
        //     return a;
        // }else if){
        //     return c;
        // }
    // }
    // if (a>b){
    //     if(b<c){
    //         return b;
    //     }else{
    //         return c;
    //     }
    // }

console.log(smallerNubmer(8,6,7));


/*
13
Write a function called shorterString
that accept five string as an arguments,
and return the first shorter string

Ex: shorterString("air","school","car","by","github")
=> by

Ex: shorterString("air","tr","car","by","github")
=> tr

Ex: shorterString("by","tr","car","air","github")
=> by

Ex: shorterString("air","by","car","school","github")
=> by

Ex: shorterString("air","tr","by","car","github")
=> by

Ex: shorterString("air","tr","car","github","by")
=> by

*/
function shorterString(a,b,c,d,e){
    if ((a.length<=b.length) && (a.length<=c.length) && (a.length<=d.length) && (a.length<=e.length) ){
        return a;
} if ((b.length<=a.length) && (b.length<=c.length) && (b.length<=d.length) && (e.length<=e.length) ){
    return b;
}
if ((c.length<=b.length) && (c.length<=a.length) && (c.length<=d.length) && (c.length<=e.length) ){
    return c;
}
if ((d.length<=b.length) && (d.length<=c.length) && (d.length<=a.length) && (d.length<=e.length) ){
    return d;
}
if ((e.length<=b.length) && (e.length<=c.length) && (e.length<=d.length) &&(e.length<=a.length) ){
    return e;
}
}

console.log(shorterString("acss","school","cardd","bydd","github"));
/*
14
Write a function called longerString
that accept four string as an arguments,
and return the first longer string

Ex: longerString("air","school","car","github")
=> school

Ex: longerString("air","schoo","car","github")
=> github

try all the cases (change the order of the longestString)
*/
function longerString(a,b,c,d){
    if ((a.length>=b.length) && (a.length>=c.length) && (a.length>=d.length)){
        return a;
    }
    if ((b.length>=a.length) && (b.length>=c.length) && (b.length>=d.length)){
        return b;
    }
    if ((c.length>=b.length) && (c.length>=a.length) && (c.length>=d.length)){
        return c;
    }
    if ((d.length>=b.length) && (d.length>=c.length) && (d.length>=a.length)){
        return d;
    }

}
console.log(longerString("airasaf","school","car","githuba"));
/*
15
Write a function called isEven
that accept 1 argument as a number,
and return true if this number is even
and false if this number is odd

Ex: isEven(1)
=> false
Ex: isEven(2)
=> true

*/
function isEven(a){
    if (a%2===0){
        return true
    }else{
        return false
    }
}
console.log(isEven(1));
console.log(isEven(100));
/*
16
Write a function called isOdd
that accept 1 argument as a number,
and return true if this number is Odd
and false if this number is Even

Ex: isOdd(4)
=> false
Ex: isOdd(5)
=> true

*/
function isOdd(a){
    if(a%2!==0){
        return true;
    } else{
        return false;
    }

}
console.log(isOdd(1001));

/*
17
Write a function called positive
that accept 1 argument as a number,
and return the positive version of the number passed

Ex: positive(4)
=> 4
Ex: positive(-5)
=> 5

*/
function positive(a){
    if (a < 0){
        return a *-1;
    } else{
        return a;
    }
}
console.log(positive(-15));
/*
18
Write a function called fullName
that accept two parameters, firstName and lastName,
and returns the firstName and lastName concatenated
together with a space in between.

Ex: fullName("Adam","McCallen")
=> "Adam McCallen"
Ex: fullName("Alex", "Mercer")
=> "Alex Mercer"
*/

function fullName(a,b){
    return a + ' '+ b;
}
console.log(fullName("Alex", "Mercer"));
/*
19
Write a function called average
that takes five numbers as inputs
and returns the average of those numbers.

Ex: average(1,2,3,4,5)
=> 3

Ex: average(5,7,9,3,5)
=> 5.8

*/
function average(a,b,c,d,e){
let sum = a + b + c + d + e ;
return sum / 5;
}
console.log(average(5,7,9,3,5));
console.log(average(1,2,3,4,5));
/*
20
Write a function called randomNumber
that didnt takes any parameter
and returns a random number between 0-1
** hint: you can seacrh using MDN

Ex: randomNumber()
=> 0.2278

Ex: randomNumber()
=> 0.475

*/
function randomNumber(){
    let x=Math.random();
    return x;
}
console.log(randomNumber());
/*
21
Write a function called randomBetweenNumbers
that takes 2 parameters
and returns a random number between them
** hint: you can seacrh using MDN

Ex: randomBetweenNumbers(1,8)
=> 7.5412

Ex: randomBetweenNumbers(3,100)
=> 23

*/
function randomBetweenNumbers(a,b){
    let x = (Math.random()*(b-a))+a
    return x
}
console.log(randomBetweenNumbers(1,8));

/*
22
Write a function called scoreInUniversty
that takes 1 parameters
and returns the alpabet in the unevirsty
A => 95-100
B => 85-94
C => 70-84
D=> 50-69
F=> 0-49

Ex: scoreInUniversty(96)
=> "A"

Ex: scoreInUniversty(3)
=> "F"

Ex: scoreInUniversty(71)
=> "C"
*/
function scoreInUniversty(a){
    if ( a>=95){
        return 'A'
    }
    if (a <95 && a >= 85){
        return 'B'
    }
    if (a <85 && a >= 70){
        return 'C'
    }
    if (a <70 && a >= 50){
        return 'D'
    }
    if (a <50 ){
        return 'F'
    }
}
console.log(scoreInUniversty(95));

/*
23
Write a function called counter
that will returns a number bigger
than the one that returnd before
and start from 0

Ex: counter()
=> 1

Ex: counter()
=> 2

Ex: counter()
=> 3

*/
let abc=0;
function counter(){
   return abc++;
}
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());
/*
24
Write a function called resetCounter
that will reset the previuos function
and return the number before reset and
a string say that the counter reset

Ex: counter()
=> 1

Ex: counter()
=> 2

Ex: counter()
=> 3

Ex: resetCounter()
=> 3 and the counter reset now

Ex: counter()
=> 1

Ex: counter()
=> 2

Ex: resetCounter()
=> 2 and the counter reset now

Ex: counter()
=> 1
*/

function resetCounter(){
    x =abc++;
    abc=0;
    return`${x} and the counter reset now `
}

console.log(resetCounter());
console.log(counter());
console.log(counter());