function display(x,y,operation){
    var result = operation(x,y)
    return result;
}

function add(x,y){
    console.log(x+y);
}

function multiply(x,y){
    console.log(x*y)
}

display(10,5,add)
display(10,5,multiply)