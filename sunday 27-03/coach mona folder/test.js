"use strict";
let formOrder = document.getElementById("orderForm");
let ulItem = document.getElementById("order");
let banana = []; ///1

function storeInLocalStorage(){
    let stringArray=JSON.stringify(banana);
    localStorage.setItem("data",stringArray);
}

function callFromLocalStorage(){
    let dataObj=localStorage.getItem("data");
    // console.log(dataObj,"typeOf dataObj ",typeof dataObj);

    let omar=JSON.parse(dataObj);
    console.log(omar,"omar");
    if(omar != null){
        banana=omar;
        // renderOrder(); 
    }
   renderOrder(); 
}
callFromLocalStorage();
function Coffee(cusName, cupSize, milkType, isHot, drinkType) {
  this.cusName = cusName;
  this.cupSize = cupSize;
  this.milkType = milkType;
  this.isHot = isHot;
  this.drinkType = drinkType;
  this.price = priceCoff(3,15);

  banana.push(this);
  renderOrder();
  storeInLocalStorage();
  console.log(banana);
}
function priceCoff(min,max){
    return Math.floor(Math.random() * (max - min) + min);
}

formOrder.addEventListener("submit", handleSubmit);
function handleSubmit(event) {
  event.preventDefault();
  // console.log(event.target);
  let cusName = event.target.cusName.value;
  console.log(cusName);

  let cupSize = event.target.cupSize.value;
  // console.log(cupSize);

  let milkType = event.target.milkType.value;
  // console.log(milkType);

  let isHot = event.target.isHot.checked;
  // console.log(isHot);

  let drinkType = event.target.drinkType.value;
  // console.log(drinkType);
//   let price = Math.ceil(Math.random() * (15 - 3) + 3);, price
  new Coffee(cusName, cupSize, milkType, isHot, drinkType);
}

// handleSubmit(); //2

function renderOrder() {
  let liElement = document.createElement("li");
  let parElement = document.createElement("p");
  let hot;

  for (let i = 0; i < banana.length; i++) {
    ulItem.appendChild(liElement);
    liElement.appendChild(parElement);

    if (banana[i].isHot === true) {
      hot = "hot";
    } else {
      hot = "cold";
    }

    parElement.textContent = `this customer ${banana[i].cusName} he order the following ${banana[i].cupSize} with ${banana[i].milkType} and he prefare is ${hot} in ${banana[i].drinkType} and the price ${banana[i].price} `;
  }
  //  return this.cusName+"has ordered "+this.drinkType
}


/////////////////////////////////local storage
// let objTest={
//     userName:"WaterMelon",
//     age:2,
// }
// console.log(typeof objTest);
// let stringObj=JSON.stringify(objTest);
// console.log(typeof stringObj,"convert object to string");
// console.log(stringObj,"convert object to string");


// let backToObj=JSON.parse(stringObj)
// console.log(typeof backToObj,"convert string to object ");
// console.log( backToObj,"convert string to object ");





// "use strict";
// let formMob= document.getElementById('mobForm');
// let taB= document.getElementById('boadTa');
// let arry= [];


// function user(useName,phone){ //,price,condition
//     this.useName= useName;
//     this.phone = phone; 
//     this.price = priceP(50,200);
//     this.condition = con();

//     arry.push(this)
//     renderAdd()
//     console.log(arry);
// }

// function priceP(min,max){
//     return Math.floor(Math.random() * (max - min) + min);
// }
// function con(){
//     if (user.price>100){
//         return'use phone';
//     } else{
//         return 'new phone'
//     }
// }

// formMob.addEventListener('submit',handleSubmit);

// function handleSubmit(event){
//     event.preventDefault();
//     let useName = event.target.useName.value;
//     let phone = event.target.typeNameD.value;
//     new user(useName,phone);
//     console.log(user);
    
// }
// handleSubmit();




// function renderAdd(){
//     let trE = document.createElement('tr');
//     let td1 = document.createElement('td');
//     let td2 = document.createElement('td');
//     let td3 = document.createElement('td');
//     let td4 = document.createElement('td');



//     for(let i=0; i<arry.length; ++i ){
//         taB.appendChild.trE;
//         trE.appendChild.td1;
//         trE.appendChild.td2;
//         trE.appendChild.td3;
//         trE.appendChild.td4;


//         td1.textContent = arry[i].useName;
//         td2.textContent = arry[i].phone;
//         td3.textContent = arry[i].price;
//         td4.textContent = arry[i].condition;


//     }
// }
