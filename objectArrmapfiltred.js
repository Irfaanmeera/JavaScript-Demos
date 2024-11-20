let arr =[
    {firstname:'Irfaan',lastname:'Meera',age:34},
    {firstname:'Irfaan',lastname:'Meera',age:34},
    {firstname:'Ameer',lastname:'Nabees',age:37}
]

let fullName= arr.map(x=>`${x.firstname}  ${x.lastname}`)
let age= arr.filter((x)=>x.age>34).map((x)=>x.firstname)
let age1 = arr.reduce((acc,curr)=>{
if(curr.age>34){
    acc.push(curr.firstname)
}
return acc;
},[])

// let countAge= arr.reduce((acc,curr)=>{
//     if(acc[curr.age]){
//         acc[curr.age]++;
//     }else{
//         acc[curr.age] =1
//     }
//     return acc;
// },{})

// console.log(fullName)
// console.log(age)

// console.log(countAge)

console.log(age1)