let arr =['apple','banana','cherry']

// let result = arr.map((word)=>[...word].reduce((acc,char)=>char +acc,''));
// let result = arr.map((word)=>word.split('').reduce((acc,char)=>char +acc,''));

let result = arr.map((word)=>word.split('').reverse().join(''))


console.log(result)