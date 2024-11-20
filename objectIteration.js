let person ={
    name:'Irfaan',
    place:'Chennai'
}

for(let key in person){
   if(key==='name'){
    console.log(`This is ${person[key]}`)
   }else if(key==='place'){
    console.log(`I am from ${person[key]}`)
   }
}