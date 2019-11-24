'use strict'
/*Task2

Создать массив из 10 случайных чисел*/
let array = [];
for(let i = 0; i < 10; i++)
{
    array[i] = Math.round(Math.random()*100);

}
/*1. Функция принимает массив и выводит его на экран.*/
function print(arr) {
    arr.forEach(elem => console.log(elem));
}
/*2. Функция принимает массив и выводит только четные
элементы.*/
function printEven(arr) {
    for(let i = 0; i < arr.length; i++)
    {
        if(arr[i]%2===0) console.log(arr[i]);
    }
}
/*3. Функция принимает массив и возвращает сумму всех
элементов массива.*/
function sumElem(arr) {
    let sum = 0;
    for(let i = 0; i < arr.length; i++)
    {
        sum+=arr[i];
    }
    return sum;
}
/*4. Функция принимает массив и возвращает его максималь-
ный элемент.*/
function maxElem(arr) {
    let max = arr[0];
    for(let i = 1; i < arr.length; i++)
    {
        if( max < arr[i]) max=arr[i];
    }
    return max;
}
/*5. Функция добавления нового элемента в массив по ука-
занному индексу.*/
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
/*6. Функция удаления элемента из массива по указанному
индексу.*/
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