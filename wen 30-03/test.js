'use strict';
const formRes= document.getElementById('resForm');
let arry=[];

function storeInLocalStorage(){
    let arryToString= JSON.stringify(arry);
    localStorage.setItem('key',arryToString)
}

formRes.addEventListener('submit', handleSubmit);
function handleSubmit(event){
    event.preventDefault();
    let fname = event.target.fname.value;
    let lname = event.target.fname.value;
    let dateBrith = event.target.dateBrith.value;
    let mail = event.target.mail.value;
    let conEmail = event.target.conEmail.value;
    let pass = event.target.pass.value;
    let conpass = event.target.conpass.value;
    new Person(fname,lname,dateBrith,mail,conEmail,pass,conpass)

}


function Person(fname,lname,dateBrith,mail,conEmail,pass,conpass){
    this.fname=fname ;
    this.lname= lname;
    this.dateBrith=dateBrith;
    this.mail= mail;
    this.conEmail=conEmail;
    this.pass = pass;
    this.conpass=conpass;
    this.fullname= username(this.fname,this.lname);
    this.maillCon= validateEmail(this.mail,this.conEmail)
    this.correctPssword=checkPassword(this.pass,this.conpass);

    arry.push(this)
    storeInLocalStorage()
    renderAdd()

}

function addRede(){

}




function username(a,b){
   let regex = /[a-zA-Z\s]+$/;
    if(regex.test(a) && regex.test(b)){
       console.log(a+' '+b);
     }else {
        document.getElementById('name1').innerHTML='please enter Name without Number or special characters';
        console.log('please enter Name without Number or special characters'); ;}
     
 }




function validateEmail(email,b) {
    
        let re = /\S+@\S+\.\S+/;
        if(!re.test(email)){
            document.getElementById('ema').innerHTML='inter valid E-mail';
            return 'inter valid E-mail';
        }
        if(email!== b){
            document.getElementById('ema2').innerHTML='The E-mail does not matching';
            return 'The E-mail does not matching';
        } 
        
    }
    



    
function validatePass(a)
{
 let regex=/(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[13-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/;
 if(regex.test(a)){
     
     return date;
 }
 else{
    document.getElementById('dat').innerHTML='inncorrect date';
     
 }
}


function checkPassword(password,spassword){
    let regex=/^(?=.*[a-z])(?=.*[A-Z])(?=(.*[\d]){2,})[A-Za-z\d?]{8,32}$/;
    let num=/[\d]{2,}/;
    let capital=/[A-Z]/;
    let symboles=/[#$@!%&*?]/;
    if ((regex.test(password))&& (regex.test(spassword))){ //To check from 2 passwords syntax
        console.log('password syntax is Incorrect');
        
    }
    else if((!capital.test(password[0])) && (!capital.test(spassword[0]))){ //To check from the first letter
        console.log('Incorrect! first name must be capital.');
    }
    else if((!num.test(password))&&(!num.test(spassword))){
        console.log('You password must contain 2 numbers at least');
    }
    else if((!symboles.test(password)) && !symboles.test(spassword)){
        console.log('You password must contain  at least 1 character');
    }
    else if((password===spassword) &&(password.length>=8 && password.length<=32) &&(spassword.length>=8 && spassword.length<=32)){
        console.log('password syntax is correct');
        console.log('The first name is capital');
        console.log( 'Passwords match');
    }else{
        console.log(`Passwords don't match or the length is more than 8 or less than 32`);
    }
}