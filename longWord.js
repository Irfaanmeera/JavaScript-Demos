function lengthyWord(sentence){

    let words = sentence.split(' ')
    let lengthyWord = '';

        for(let i=0;i<words.length;i++){
            if (words[i].length > lengthyWord.length){
                lengthyWord = words[i]
            }
        }
        return lengthyWord;
    }

let sentence ='I am Irfaan Meera'
console.log(lengthyWord(sentence))