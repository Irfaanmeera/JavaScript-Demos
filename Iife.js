(function(){
    console.log("Hello")
    var b=1;
    (function(){
        var a = b;
        console.log(a)
    }())
    console.log(a)
}())