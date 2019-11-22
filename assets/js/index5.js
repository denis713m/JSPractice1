'use strict'
function compareLength(str1, str2) {
    if (str1.length > str2.length) return 1;
    if (str1.length < str2.length) return -1;
    return 0;
}

function capitaliseFirst(str){
    let firstLetter = str.substr(0,1).toUpperCase();
    return firstLetter + str.substr(1);
}

function nVowel(str){
    
}