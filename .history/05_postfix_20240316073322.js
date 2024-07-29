var a=5;
var b=a++;
console.log(a);
console.log(b);

var n1=5;
var res=n1++ + ++n1 + n1++;    // assign first and then increment
console.log(n1);
console.log(res);

var a=5;
var res=++a + a++ + a++ - --a;
console.log(res);