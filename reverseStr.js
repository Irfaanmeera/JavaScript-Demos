let str = 'I am hungry'
    
let reverse = str.split(' ').map((word)=>word.split('').reverse().join('')).join(' ')

console.log(reverse)

