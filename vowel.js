const arr=['hellO','strIng','thIrd','fOurth'];
  
function countVowels(arr) {
const vowels = ['a', 'e', 'i', 'o', 'u'];


arr.forEach((word) => {
const lowercaseWord = word.toLowerCase();
let totalCount = 0;
  for (let char of lowercaseWord){
    if (vowels.includes(char)) {
      totalCount++;
    }
  }
console.log(`Total number of vowels in the word ${word}: ${totalCount}`);
});