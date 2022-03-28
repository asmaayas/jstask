//task 1

function doubleNumbers(arr){
    let t =arr.map(function(a){
        return a*2
    })
    console.log(t);
}
    console.log(doubleNumbers([2, 5, 100]),1);
  
  
//task2
  aar=["2", "5", "100"];
  let stringItUp = aar.map(function(a){
      return a.toString();
  })
  console.log(stringItUp,2);
  
  //task3
 
  arr=["john", "JACOB", "jinGleHeimer", "schmidt"];
 let capitalizeNames = arr.map(function(a){
    return a.toUpperCase();
 })
    // your code here
    console.log(capitalizeNames,3)
  
  
//task4

  a =[
       {
           name: "Angelina Jolie",
           age: 80
       },
       {
           name: "Eric Jones",
           age: 2
       },
      {
           name: "Paris Hilton",
          age: 5
       },
      {
           name: "Kayne West",
           age: 16
       },
      {
           name: "Bob Ziroll",
           age: 100
      }
       ];
  let namesOnly = a.map(function(b){
      return b.name
  })
  console.log(namesOnly,4);
  //task5
  a =[
    {
        name: "Angelina Jolie",
        age: 80
    },
    {
        name: "Eric Jones",
        age: 2
    },
   {
        name: "Paris Hilton",
       age: 5
    },
   {
        name: "Kayne West",
        age: 16
    },
   {
        name: "Bob Ziroll",
        age: 100
   }
    ];
   
  let makeStrings = a.map(function(c){
      if (c.age >= 18){
          return `${c.name} can go to The Matrix`;
      }else {
        return `${c.name}  is under age!!`;
      }
  })
  console.log(makeStrings,5);
  
 //task 6
  
  let readyToPutInTheDOM = a.map(function(e){
      return `<h1> ${e.name} </h1><h2> ${e.age}</h2>`
  })
  console.log(readyToPutInTheDOM,6);
 
  
  
  
  
  //task7
  arr=[1,-2,-3];
  let doubleValues= arr.map(function(a){
      return a+a;
  })
    console.log(doubleValues,7);

    
   //task8
    aar=[0,-2,-3];
   let  valTimesIndex = aar.map(function(a, i){
       return a*i
   })
       // your code here   
      console.log(valTimesIndex,8);
  
    
    /*
    * Exercise 9:
    * Write a function called extractKey which accepts an array of objects and some key and returns a new array with the value
    * of that key in each object.
    * 
    * Test Case:
    * extractKey([{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}], 'name') 
    * 
    * Result:
    * ['Elie', 'Tim', 'Matt', 'Colt']
    */
    
function extractKey(arr, key){
    // your code here 
    let x = arr.map(function(a){
        return a.name
    });
    console.log(x);
 }
    console.log(extractKey([{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}], 'name'), 9);
    //task10
    arr=[{first: 'Elie', last:"Schoppik"}, {first: 'Tim', last:"Garcia"}, {first: 'Matt', last:"Lane"}, {first: 'Colt', last:"Steele"}];
 let extractFullName = arr.map((e)=> {return e.first +' '+ e.last});
 console.log(extractFullName,10);
