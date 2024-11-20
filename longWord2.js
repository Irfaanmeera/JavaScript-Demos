// function longWord(words){
//     let longWord= '';
//      for(let word of words){
//         if(word.length>longWord.length){
//             longWord= word;
//         }
//      }
//      return longWord;
// }

let arr = ['apple','banana','strawberry']

let lengthyWord= arr.reduce((longword,word)=>{
    return word.length>longword.length ? word:longword
},'')


console.log(lengthyWord)