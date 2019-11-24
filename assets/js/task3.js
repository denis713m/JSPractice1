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
/*1. Функция принимает 2 массива и возвращает новый мас-
сив, в котором собраны все элементы из двух массивов
без повторений.*/
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
/*2. Функция принимает 2 массива и возвращает новый массив,
в котором собраны общие элементы (то есть элементы,
которые встречаются и в первом и во втором массивах)
без повторений.*/
function joinRepeat(arr1, arr2) {
    let arrRes = [];
    for(let i = 0; i < arr1.length; i++)
    {
        if((arr2.lastIndexOf(arr1[i])!==-1)&&(arrRes.lastIndexOf(arr1[i]) === -1)) arrRes.push(arr1[i]);
    }
    return arrRes;
}
/*3. Функция принимает 2 массива и возвращает новый мас-
сив, в котором собраны все элементы из первого массива,
которых нет во втором массиве.
*/
function delRepeat(arr1, arr2) {
    let arrRes = [];
    for(let i = 0; i < arr1.length; i++)
    {
        if(arr2.lastIndexOf(arr1[i])===-1) arrRes.push(arr1[i]);
    }
    return arrRes;
}
