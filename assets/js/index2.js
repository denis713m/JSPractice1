'use strict'

let array = [];
for(let i = 0; i < 10; i++)
{
    array[i] = Math.round(Math.random()*100);

}

function print(arr) {
    arr.forEach(elem => console.log(elem));
}

function printEven(arr) {
    for(let i = 0; i < arr.length; i = i + 2)
    {
        console.log(arr[i]);
    }
}

function sumElem(arr) {
    let sum = 0;
    for(let i = 0; i < arr.length; i++)
    {
        sum+=arr[i];
    }
    return sum;
}

function maxElem(arr) {
    let max = arr[0];
    for(let i = 1; i < arr.length; i++)
    {
        if( max < arr[i]) max=arr[i];
    }
    return max;
}

function insertElem(elem, index, arr){
    let arrRes = [];
    let i = 0;
    while(i < index){
        arrRes[i] = arr[i];
        i++;

    }
    arrRes[i] = elem;

    while(i < arr.length){
        arrRes[i+1] = arr[i];
        i++

    }
    return arrRes;
}

function delElem(index, arr){
    let arrRes = [];
    let i = 0;
    while(i < index){
        arrRes[i] = arr[i];
        i++;
    }
    i++;
    while(i < arr.length){
        arrRes[i-1] = arr[i];
        i++

    }
    return arrRes;
}