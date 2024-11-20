const str = "xoxppopphfjwewrioir"

function findPalindromes(str){
    const isPalindrome = (str)=>str===str.split('').reverse().join('')
    const palindromeSet = new Set()

    for(let i=0;i<str.length;i++){
       for(let j=i+1;j<=str.length;j++){
        const substring = str.substring(i,j)
        if(isPalindrome(substring) && substring.length>1){
            palindromeSet.add(substring)
        }
       }

    }
    const palindromeArr = Array.from(palindromeSet)
    return palindromeArr.reduce((acc,curr)=>curr.length>acc.length?curr:acc)
}

console.log(findPalindromes(str))