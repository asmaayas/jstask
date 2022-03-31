function readFromLocalStorage(){
    let stringObj=localStorage.getItem("key")
     let converString=JSON.parse(stringObj);
     if(converString !== null)/////here check if converString not null then asign to big array else dont asign it
     {
        arry=converString; 
     }
     renderAdd(converString)
     
}
function renderAdd(converString){
    let a= arry.map((a)=>{
       document.getElementById('sl').innerHTML=`Hey ${a.fullname}, Welcome here <3` 
    })
};
readFromLocalStorage()