var a=5;
var b=a++;
console.log(a);
console.log(b);

var n1=5;
var res=n1++ + ++n1 + n1++;    // postfix  assign first and then increment
console.log(n1);
console.log(res);

var a=2;
var res=++a + a++ + a++ - --a;
console.log(res);
console.log(a);

var a=4;
var b=a-- + ++a + ++a + a++;// In prefix 
console.log(b);
console.log(a);

var a=7;
var res=a%2==0 ? "EVEN" : "ODD";
console.log(res);


