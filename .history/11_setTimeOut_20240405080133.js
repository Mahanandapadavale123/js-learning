let show =function(){
    console.log(`function expression...`);

    setTimeout(function(){
        console.log('Hello');
    },3000);
    setTimeout(function(){
        console.log(`callBack hill`);
    },4000);
}
setTimeout(show,3000);