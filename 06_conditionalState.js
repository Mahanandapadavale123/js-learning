
var isMarried =true;
var age=23;
var candidateName="billgate";
if(age >= 21){
    console.log("select for Marriage");
}
else{
    console.log("not select for Marriage");
}



if(isMarried){
console.log("Married");
}
console.log("=======================================================");

// ananomys function

var marriageCk=function(age ,name){
if(age >21){
    console.log("Yes");
}
console.log("No");
}
marriageCk(25,"BillGate");
console.log("=================================================");

// var marriageEli=function( age,name,gender){
// if(age >= 21 && gender=="male"){
//     console.log("allow");
// }
// }
// marriageEli(23,"shr","female");
// marriageEl(32,"Mahananda","male");
// marriageEli(20,"shr","female");

function vote(person,age){
    if(age >= 18){
        console.log(`yes please vote . The person Name is:${person} and age is: ${age}`);
    }
    else{
        console.log("sorry you cant vote");
    }
}
vote("Mahananda",14);
vote("Mahananda",21);