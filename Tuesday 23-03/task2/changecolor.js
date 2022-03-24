let y= document.getElementsByTagName('div');
 y[0].style.backgroundColor = "blue";
 let colors= ['red', 'green', 'blue'];
let  colorIndex  = 0;

 function color(){
     let x=document.getElementsByTagName('div');
     x[0].style.backgroundColor=colors[colorIndex];      
     colorIndex = (colorIndex + 1) % colors.length
 }