const obj1 = {
    name: "Alice",
    age: 25,
    city: "New York"
};

const obj2 = {
    age: 30,
    profession: "Engineer",
    country: "USA"
};
function merge(obj1,obj2){
    for(const key in obj2){
        if(!(key in obj1)){
            obj1[key]=obj2[key]
        }
    }
    return obj1
}

console.log(merge(obj1,obj2))