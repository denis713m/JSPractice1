'use strict'
/*Task 4
Создать массив фруктов и отсортировать его по алфавиту.
Написать следующие функции.*/
let fruits = ['apple', 'banana', 'pineapple', 'mango', 'apricot', 'kiwi'];
fruits.sort();


/*1. Вывод на экран с помощью document.write() в виде списка
(с помощью тегов ul и li).*/
function printFr() {
    document.open();
    let res = "<a href=\"../pages/task4.html\">Back</a><ol>Fruits:";
    for(let f of fruits){
        res += "<li>"+f+"</li>";
    }
    res+="</ol>";
    document.write(res);
    document.close();
}

/*2. Поиск фрукта в массиве. Функция принимает название
фрукта и возвращает индекс найденного элемента или -1,
если не найден. Поиск должен быть нерегистрозависимым.*/
function contain(fruit){
    for(let i = 0; i < fruits.length; i++)
    {
        if(fruit.toLowerCase() === fruits[i].toLowerCase()) return i;
    }
    return -1;
}