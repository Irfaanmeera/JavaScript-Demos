setTimeout(function(){
    console.log("I am a callback function")
},5000);

function x(){
    console.log("I am x");
}

function y(){
    console.log("I am y");
}
x();
y();