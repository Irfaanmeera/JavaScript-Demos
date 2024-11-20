function longestSubstringWithoutVowels(str){
   
    const vowel ='aeiouAEIOU'
 
    const longestSubstringWithoutVowels = str.split(' ').filter((word)=>!word.includes(vowel)).reduce((acc,curr)=>curr.length>acc.length?curr:acc)
    return longestSubstringWithoutVowels;
}

const inputString = "I am Irfaan ghjklpg bnmvcx";
console.log(longestSubstringWithoutVowels(inputString));