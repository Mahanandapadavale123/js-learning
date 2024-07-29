

console.log('My name is:,"Mahananda"');

 var firstName="Mahananda";
 var city="pune";
 var totalExperience=10;

 var stringTemp=(`My name is:${firstName} and My city Name is:${city} and totalExperience${totalExperience}`);
 console.log(stringTemp);

 var name="mahananda"
 console.log("======================Replace======================");
 console.log(name);
 var nameReplace=name.replace("Mahananda","padavale")
 console.log(nameReplace);


console.log("==================To Upper case==============");
var greet="    Good Morning  ";
var greetInUppercase= greet.toUpperCase();
console.log(greet);
console.log(greetInUppercase);
var greetInLowercase=greet.toLowerCase();
console.log(greetInLowercase);


console.log("==================Trim==============");
console.log( " Length of Greet is:",greet.length);
var afterTrim= greet.trim();
console.log(` Before trim ${greet},After trim ${afterTrim}`);
var lenGreet=greet.length;
console.log(`The length of  new Greet is: ${lenGreet}`);


console.log("=====================include===================");
 var greetInclude=greet.includes("Morning")
 console.log(greetInclude);

 console.log("===============Slice METHOD===============");
 var greetSlice=greet.slice(5,12);
 console.log(`by Sclicing the good morning is: ${greetSlice}`);