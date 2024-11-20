function isPalindrome(str){

    const reverse = str.split('').reverse().join('')

    return reverse===str
}

console.log(isPalindrome("malayalam"))