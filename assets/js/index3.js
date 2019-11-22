'use strict'

let array = [];
for(let i = 0; i < 10; i++)
{
    array[i] = Math.round(Math.random()*100);

}

let array1 = [];
for(let i = 0; i < 5; i++)
{
    array1[i] = Math.round(Math.random()*100);

}

let arrTest1 = [1,2,3,4,4,9];
let arrTest2 = [1,2,8,11,9];

function joinWithoutRepeat(arr1, arr2) {
    let arrRes = [];
    for(let i = 0; i < arr1.length; i++)
    {
        if(arrRes.lastIndexOf(arr1[i]) === -1) arrRes.push(arr1[i]);
    }
    for(let i = 0; i < arr2.length; i++)
    {
        if(arrRes.lastIndexOf(arr2[i]) === -1) arrRes.push(arr2[i]);
    }

    return arrRes;
}

function joinRepeat(arr1, arr2) {
    let arrRes = [];
    for(let i = 0; i < arr1.length; i++)
    {
        if((arr2.lastIndexOf(arr1[i])!==-1)&&(arrRes.lastIndexOf(arr1[i]) === -1)) arrRes.push(arr1[i]);
    }
    return arrRes;
}

function delRepeat(arr1, arr2) {
    let arrRes = [];
    for(let i = 0; i < arr1.length; i++)
    {
        if(arr2.lastIndexOf(arr1[i])===-1) arrRes.push(arr1[i]);
    }
    return arrRes;
}
