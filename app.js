function reverseWords(str) {
    
    let words = str.trim().split(' ');

    let reversedStr = words.reverse().join(' ');

    return reversedStr;
}

let sentence1 = "Hello World.";
let sentence2 = "Hi There.";

console.log(reverseWords(sentence1)); 
console.log(reverseWords(sentence2)); 