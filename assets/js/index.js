'use strict'

function min(val1,val2) {
    let a = +val1;
    let b = +val2;
    if( a > b ) return b;
    else if( a < b ) return a;
    else return "numbers are equel";

}

let factorial = val => {
    if (val === 1) return 1;
    else return val*factorial(val-1);
}

let factorial2 = val =>  val === 1 ? 1: val*factorial(val-1);

function numbStrait(val1, val2){
    if(val1 === val2) return val1;
    if( val1 > val2 ) return val2 + " " + numbStrait(val1, val2+1);
        else return val1 + " " + numbStrait(val1+1, val2);

}

function numbReverse(val1, val2){
    if(val1 === val2) return val1;
    if( val1 > val2 ) return val1 + " " + numbReverse(val1-1, val2);
    else return val2 + " " + numbReverse(val1, val2-1);

}

function reverseNumber(val) {
    if(val<10) return val;
    else return Number((val%10) + "" + reverseNumber(Math.floor(+val/10)));

}

function sumDigits(val) {
    if(val<10) return val;
    else return (val%10) + sumDigits(Math.floor(+val/10));

}

function brackets(val) {
    if(val===1) return "()";
    else return "(" + brackets(--val) + ")";

}
