

function greaterNumber(n1,n2){
    var res=n1>-n2? "Greater":"less"
    console.log(`n2 number is:${res} than n1`);
}
greaterNumber(10,-10);
greaterNumber(800,899);

function isEvenOdd(num){
    var res=num%2==0?"True":"False";
    console.log(`The given number is: ${res}`);
}
isEvenOdd(29);
isEvenOdd(44);
isEvenOdd(0);
isEvenOdd(101);

function wordLength(words){
var result=words.length%2==0?"EVEN":"ODD";
console.log(`The words length is:${result}`);
}
wordLength("javascript");
wordLength("Developer");
wordLength("google");