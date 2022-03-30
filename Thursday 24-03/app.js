//task1
let me={
    fristName: "ro'a",
    lastName:'yaseen',
    age:27,
    dot:'9-April-1994',
    favoritefood:['brugar', 'pasta', 'mansaf'],
    favoritemovie:['amelie','anthropoid','the imitation game', 'lady bird']
}


let persons = [
    { name: { first: 'John', last: 'Hob' }, age: 35 },
    { name: { first: 'Alex', last: 'Mercer' }, age: 25 },
    { name: { first: 'Alice', last: 'Zaheer' }, age: 24 },
    { name: { first: 'Zues', last: 'Odin' }, age: 55 },
    { name: { first: 'Soso', last: 'Al-Amora' }, age: 67 }
  ];
  console.log(persons[0].name.first.length + persons[0].name.last.length)

//task2
function firstName(p){
    let x=[];
    for(let i=0; i< p.length; ++i){
         x[i]=p[i].name.first;
    }
    return x;
}
console.log(firstName(persons));



//task3
function averageAge(aa){
     let av=0;
    for(let i=0;i<aa.length;++i){
        av = av + aa[i].age;
        
    }
   return av/aa.length;
}
console.log(averageAge(persons));


///task4
function olderPerson(b){
    let x=0;
    for(i=0; i< b.length;++i){
        
        if(b[i].age > x){
           x=b[i].age;
        }
    }
    return x;
}
console.log(olderPerson(persons));



//task5

function longestName(c){
    let m= 0;
    for(let i=0; i<c.length;i++){
        if(m <c[i].name.first.length + c[i].name.last.length){
            m= c[i].name.first.length + c[i].name.last.length;
        }
    }
    return m;
}
console.log(longestName(persons));


//task7
function repeatWord(s){
    let x=s.toLowerCase().split(' ');
    let y={};
    
    console.log(x);
    for(let i=0; i<s.length; ++i){
       let z=y[x[i]]
       let e = z ? z :0;
       y[x[i]] =e +1

       }
       return y
    

}
console.log(repeatWord("My name is alex mercer class name B baba mama hello Hello HELLO"));



//task8
function repeatChar(s){
    let x=s.toLowerCase().split('');
    let y={};
    
    console.log(x);
    for(let i=0; i<s.length; ++i){
       let z=y[x[i]]
       let e = z ? z :0;
       y[x[i]] =e +1

       }
       return y
    

}


console.log(repeatChar('mamababatetacedo'));


// function repeatChar(string){
//     let subSting=string.toLowerCase(); // To count Uppercase and Lowercase
//     var obj={}
//     for(let i = 0, length = subSting.length; i < length; i++) {
//         var objIndex = subSting.charAt(i)
//         obj[objIndex] = (isNaN(obj[objIndex]) ? 1 : obj[objIndex] + 1); //Another way to write if statment
//     } 
//     return obj;
// }



//task9
let x = { a:10 ,b:9}
console.log(x.length, 'roa');

function selectFromObject(x,y){
    let obj = {}
        for(let i =0 ; i<y.length ; i++)
        {
            // console.log(Object.keys(x)[0]);
            // console.log(y[0]);
            if(Object.keys(x)[i]==y[i])
            {
                console.log(x[y[i]]);
                obj[y[i]] = x[y[i]];
            }
        }
    return obj
    }
    

    
   
   



//task10
function objectToArray(z){
    let x= Object.keys(z);
    let y = Object.values(z);
    f= x.concat(y);
    console.log(Array.isArray(f),10);
    return f
}
console.log(objectToArray({firstName:"Moh",age:24}));


//task11
function arrayToObject (arr){
    let obj = {};
    for (let i = 0; i < arr.length; ++i){
        obj[arr] = arr[i];}
    return obj;
    

}
console.log(arrayToObject(["firstName","Moh","age",24]),111);


// function arrayToObject (arr){
//     let obj = {};
//     for (let i = 0; i < arr.length; ++i){
//         obj[arr] = arr[i];}
//     return obj;
    

// }

//task12
function onlyNumber(o){
    let x= Object.keys(o);
    let y = Object.values(0);
    f= x.concat(y)
    let p ={};
    for (let i = 0; i < y.length; ++i){
        if (typeof(y[i]) === number){
            p[i]= y[i];
        }
    }
    return p;
}
console.log(onlyNumber({firstName:"Moh",age:24,movies:[1,5,"string"]}),122222);

//task(13);
  function onlyString(obj) {
    let newObj={};
    for (let i = 0; i < Object.keys(obj).length; i++) {
      if (typeof(Object.values(obj)[i]) == `string`) {
        newObj[Object.keys(obj)[i]] = Object.values(obj)[i];
      }
    } return newObj;
  }
  console.log(onlyString({firstName:"Moh",age:24,movies:[1,5,"string"], he:`ibra`,she:`sara`}));
  document.write(onlyString({firstName:"Moh",age:24,movies:[1,5,"string"], he:`ibra`,she:`sara`}));

//task15
// function keysArray(z){
//     let x= Object.keys(z);
//     return x}
//     console.log(keysArray({firstName:"Moh",age:24,movies:[1,5,"string"]}));