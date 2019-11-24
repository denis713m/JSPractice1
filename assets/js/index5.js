'use strict'

/*1. Написать функцию, которая принимает 2 строки и срав-
нивает их длину. Функция возвращает 1, если в первой
строке больше символов, чем во второй; -1 – если во вто-
рой больше символов, чем в первой; или 0 – если строки
одинаковой длины.*/
function compareLength(str1, str2) {
    if (str1.length > str2.length) return 1;
    if (str1.length < str2.length) return -1;
    return 0;
}
/*2. Написать функцию, которая переводит в верхний регистр
первый символ переданной строки.*/
function capitaliseFirst(str){
    let firstLetter = str.substr(0,1).toUpperCase();
    return firstLetter + str.substr(1);
}
/*3. Написать функцию, которая считает количество гласных
букв в переданной строке.*/
function nVowel(str){
   return str.match(/[eyiuoaj]/g).length;
    
}

/*4. Написать функцию для проверки спама в переданной
строке. Функция возвращает true, если строка содержит
спам. Спамом считать следующие слова: 100% бесплатно,
увеличение продаж, только сегодня, не удаляйте, ххх.
Функция должна быть нечувствительна к регистру.*/
function isSpamPresent(str){
    let spam = ["100% бесплатно","увеличение продаж", "только сегодня", "не удаляйте", "ххх"];
    for(let s of spam){
        if(str.indexOf(s)!==-1) return true;
    }
    return false;
}

/*5. Написать функцию сокращения строки. Функция прини-
мает строку и ее максимальную длину. Если длина строки
больше, чем максимальная, то необходимо отбросить
лишние символы, добавив вместо них троеточие.
    Например: truncate(“Hello, world!”, 8) должна вернуть
“Hello...”.*/
function truncate(str, length) {
    if(str.length > length) return str.substring(0, length-3) + "...";
    return str;
}

/*6. Написать функцию, которая проверяет, является ли пере-
данная строка палиндромом.*/
function isPallindrom(str) {
    const trans = str.toLowerCase().replace(/[ .,0-9:;~`?!"']/g,"");
    return trans === trans.split("").reverse().join("");

}

/*7. Написать функцию, которая считает количество слов в
предложении.*/
function wordsCount(str) {
    return str.trim().replace(/[.,0-9:;~`?!"']/g,"").replace(/ {2,}/g, " ").split(" ").length;
}

/*8. Написать функцию, которая возвращает самое длинное
слово из предложения.*/
function longestWord(str) {
    let words = str.trim().replace(/[.,0-9:;~`?!"']/g,"").replace(/ {2,}/g, " ").split(" ");
    let max = "";
    for(let s of words){
        if(max.length < s.length) max = s;
    }
    return max;
}

/*9. Написать функцию, которая считает среднюю длину слова
в предложении.*/
function middleLength(str) {
    let words = str.trim().replace(/[.,0-9:;~`?!"']/g,"").replace(/ {2,}/g, " ").split(" ");
    let max = 0;
    for(let s of words){
        max += s.length;
    }
    return Math.round(max*10/words.length)/10;

}

/*10. Написать функцию, которая принимает строку и символ
и выводит индексы, по которым находится этот символ в
строке. Также вывести, сколько всего раз встречается этот
символ в строке.*/
function signRepeat(str, sign){
    let i = str.indexOf(sign);
    if(i===-1) return "Sign is absent in your text";
    let res = "";
    let count = 0;
    for(; i<str.length;)
    {
        i = str.indexOf(sign, i);
        if(i!==-1){
            res = res + i +", "
            count++;
        }
        else break;
        i++;
    }
    return "Sign present " + count + " times and position on index " + res;
}

