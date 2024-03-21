
// // Question 1

// function squareOfWordLength(str){
// console.log(str);
// console.log(str.length);
// console.log(`String length square is: ${str.length**2}`);

// }
// squareOfWordLength("JavaScript");
// squareOfWordLength("Google Chrome");
// squareOfWordLength("Developer Smart");

// // Question 2
// console.log("==============String length============");
// let string="I am Angular Developer";

// function stringWithNo(){
// }
// stringWithNo();

// console.log(` The Given String length is:${string.length}`);

// console.log("==========Division========");
// var res=22/4;
// console.log(`The Total No of String and Divide by 4 the Result is:${res}`);

// console.log("==============Multiplication=============");
// var res=22*4;
// console.log(`The total number of sting multiply by 4 the result is:${res}`);


// Logical Operators

var result= function(word){
    console.log("Inside  function Expression ");
    var result=word.length %2==0 ? "Even" :"odd";
    console.log(`Given word ${word} is with ${result} length`);
}
result("JavaScript");

var mul=function(num){
 var res= num%3==0 ? "Yes":"No"
 console.log(`Given number ${num} is Multiple of 3 ${res}`);
}
mul(9);



let num="100";
 var result=Number(num);
 console.log(`num is ${num}, typeof ${ typeof num} ,type of result: ${typeof result}`);
 
 let num1="100";
 var result=Boolean(num);
 console.log(`num is ${num}, typeof ${ typeof num} ,type of result: ${typeof result}`);

 let num2="100";
 var result=Number(num);
 console.log(`num is ${num}, typeof ${ typeof num} ,type of result: ${typeof result}`);