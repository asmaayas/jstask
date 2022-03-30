let formLoc= document.getElementById('locForm');
// let resultCity = document.getElementById('cityResult');

let Div = document.getElementById('result');


function Loction(locName){
    this.locName=locName;
     getData(locName)
}
async function getData(x) {
    let res = await fetch(`https://eu1.locationiq.com/v1/search.php?key=pk.e42be9d3ac800c75d0f0cadc76f8006a&q=${x}&format=json`);
    
    let data = await res.json();
    let b= `<li>this lat :${data[0].lat},</li> 
    <li>this is long:${data[0].lon} </li>
    <li> this is display name${data[0].display_name}  `;
  
    let c = document.getElementById('cityResult').innerHTML=b;
    let image = document.getElementById('img').src=data[0].icon;
   
} 
formLoc.addEventListener('submit', handleSubmit);
function handleSubmit(event){
    event.preventDefault();
    let locName= event.target.locName.value;
    new Loction(locName);
    

}






