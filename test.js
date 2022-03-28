// let a =[1,2,3];
//  let b= a.map(function(e,i){
//      return e+i

//  });
//  console.log(b);
// // b=[];
// // function add(e){
// //     x=0;
// //     for (let i=0; i<e.length;++i){
// //        x= e[i]+i;
// //        console.log(x);
// //     }
    
// // }
// // console.log(add(a));



// let str=['a','b','c']
// let nstr=['aa','ba','ca']

let a = new Promise(function(resolve,reject){
    let b = document.getElementById('result');
    if (b==='Sure'){
        resolve('good')
    }else{
        reject(Error('baad'))
    }
});
a.then(function (resolve){
console.log(resolve);
})
