//task-03
// Напиши фукцнию findLongestWord(string), которая принимает параметром произвольную строку (в строке будут только слова и пробелы) и возвращает самое длинное слово в этой строке.
'use strict';

function findLongestWord(string) {
    let stringArray = string.split(' ');
    let longestWord = stringArray[0];
    for (let i = 1; i < stringArray.length; i++) {
        if (stringArray[i].length > longestWord.length) {
            longestWord = stringArray[i];
        }
    }
    return longestWord
}

console.log(findLongestWord('The quick brown fox jumped over the lazy dog'));
console.log(findLongestWord('Google do a roll'));
console.log(findLongestWord('May the force be with you'));