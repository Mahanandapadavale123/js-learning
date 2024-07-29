function add(num1,num2){
    console.log('addition is');
    var res=num1+num2;
    console.log(res);
}

add(23,2);
console.log(typeof NaN);

function mul(n1,n2,n3){
    var result=n1+n2+n3;
    return result;
}

 var value=mul(1,3,6);
 console.log(value);


 function show(){
    console.log("Inside function :");
 }
 show();

  var greet="Good Morning";
 var charAt0 = greet.charAt(0);
console.log("Character at index 0 is: ", charAt0);

var charAt6 = greet.charAt(6);
console.log("Character at index 6 is: ", charAt6);

var charAt11 = greet.charAt(11);
console.log("Character at index 11 is: ", charAt11);

var sentence = "When you join meetings, webinars, chats or channels hosted on Zoom, your profile information";
var totalChars = sentence.length;
var lastChar = sentence.charAt(totalChars-1);
console.log("Last char is:" , lastChar);

console.log("==========concat=========");
var firstString="mahananda";
var lastString="padavale";
var resultConcat=firstString+lastString;
console.log(resultConcat);