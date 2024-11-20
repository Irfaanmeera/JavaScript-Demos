const fruits = [
    { name: "apple", color: "green" },
    { name: "banana", color: "yellow" },
    { name: "grape", color: "green" },
    { name: "orange", color: "orange" },
    { name: "pear", color: "green" },
    { name: "blueberry", color: "blue" }
];


const greenFruits = fruits.reduce((acc,curr)=>{
    return curr.color==='green'?acc+1:acc
},0)

console.log(greenFruits)