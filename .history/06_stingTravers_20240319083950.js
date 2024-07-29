

var word="javaScript";
var count=0;
for(let i=0;i<word.length;i++){
    // console.log( word[i]);
    let ch=word.charAt(i);
    if(ch=='S'){
        count=count+1;
    }
    console.log(`Total number of string ${ch}`);
}

console.log(`character count is ${count}`);