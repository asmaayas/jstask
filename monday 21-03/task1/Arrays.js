// task 3
let favFood=['burgar', 'pasta', 'mansf', 'beefsteak','Kabsa'];
let favSport=['yoga','walking','hiking']
let favMovie=['amelie','anthropoid','the imitation game', 'lady bird']


//task 4
function firstOfArray(array){
    return array[0];
}

//task5
function lastOfArray(arr){
return arr[arr.length-1]
}

//task6
let arre = [0,5,7,9];
arre.shift();
arre.shift();
arre.shift();
arre.unshift(1,3,4,6,8);
arre.push(10);
console.log(arre);

//task7
let array2 = [0,5,7,9];
array2.pop();
array2.pop();
array2.shift();
array2.push(9,-7,3.5);
console.log(array2);

//task8
function middleOfArray(a){
    if (a.length%2===0){
        let x= (a.length/2)
        return[a[x-1], a[x]];
    }else{
        let x= (a.length-1)/2
        return a[x];
    }
}
console.log(middleOfArray([1,2,3,4,5,6,7]));

//task9
let animals = ['cat', 'ele', 'bird'];
animals.pop();
animals[0]='zebra';
animals[1]='elephant';
console.log(animals);


//task 10
function indexOfArray(x,y){
    return x[y];
};
console.log(indexOfArray([1,2,3],1));4


//task11
function arrayExceptLast(n){
    n.pop()
return n;
};
console.log(arrayExceptLast([1,2,3,4,5]));


//task12
function addToEnd(n,m){
    n.push(m)
return n;
};
console.log(addToEnd([1,2],3));

//task13
function sumArray(aa){
let sum=0;
for(let i=0; i<aa.length;++i){
 sum = sum + aa[i];
};
return sum;
};
console.log(sumArray([1,2,3,4,5]));

function sumArray1(aa){
    let sum=0;
    let i=0;
    while( i<aa.length){
     sum = sum + aa[i];
     ++i;
    };
    return sum;
    };
    console.log(sumArray1([1,2,3,4,5]));



//task14
function minInArray(n){
    let min;
    for(let i=0; i<n.length;i++){
        if (min < n[i]){
            min = min;
        }else{
            min=n[i];
        };
    };
    return min

};
console.log(minInArray([10,2,3,4,5,0]));

function minInArray(n){
    let min;
    let i=0;
    while (i<n.length){
        if (min < n[i]){
            min = min;
            i++;
        }else{
            min=n[i];
            i++;
        };
    };
    return min

};
console.log(minInArray([10,2,3,4,5,0]));


//task15
function removeFromArray(a,x){
    for(let i=0; i<a.length; i++){
        if(a[i]===x){
          a.splice(i,1)
        }
    }
    return a
}
console.log(removeFromArray([10,2,3,4,5,0], 0));

//task16  /////wrong!!!
function oddArray(a){
    for(let i=0; i<a.length; i++){
        if(a[i] % 2 == 0){
          a.splice(i,1)
        }
    }
    return a
}
console.log(oddArray([10,4,3,4,5,0,7,10,9,20,12,13,30]));

//task17
function aveArray(a){
    let sum=0;
    for(let i=0; i<a.length;++i){
         sum=sum+a[i];
    }
    return sum/a.length
}
console.log(aveArray([1,2,3,4,5,6,7]));


//task18
function shorterInArray(a){
    let short=a[0]
    for (let i=0; i<a.length;++i){
        
        if (a[i].length < short.length){
            short = a[i];
        }
    }
    return short;
}
 
       

console.log(shorterInArray(["alex","mercer",'a',"madrasa","rashed2","emad","halas",'ha']));

//task19
function repeatChar(a,b){
    a.split();
    let sum=0;
    for(let i=0; i<a.length;++i){
       if(a[i]===b){
           sum=sum+1;
       } 
    }
    return sum;
};
console.log(repeatChar('aaaaabbcc','b'));

//task20 /////wrong!!!
function evenIndexOddLength(a){
    let e=[];
    for(let i=0; i< a.length;++i){
        if(i%2===0 && a[i].length !== 0 ){
            e.push(a[i])
        }
    }
    return e
}
console.log(evenIndexOddLength(["alex","mercer","madrasa","rashed2","emad","hala"]));


//task21
function powerElementIndex(a){
    for(let i=0; i<a.length;++i){
        a[i]=a[i]**i;
    }
   return a;
};
console.log(powerElementIndex([44, 5, 4, 3, 2, 10]));

//task22 /////wrong!!!
function evenNumberEvenIndex(a){
    let n=[];
    for (let i=0; i< a.length; ++i){
        if(a[i]%2===0 && a[i].length % 2===0){
            n.push(a[i]);
        }
    }
    return n;

}
console.log(evenNumberEvenIndex([5,2,2,1,8,66,55,77,34,9,55,1]));



