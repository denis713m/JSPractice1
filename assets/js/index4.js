'use strict'
let fruits = ['apple', 'banana', 'pineapple', 'mango', 'apricot', 'kiwi'];
fruits.sort();

function contain(fruit){
    for(let i = 0; i < fruits.length; i++)
    {
        if(fruit.toLowerCase() === fruits[i].toLowerCase()) return i;
    }
    return -1;
}

function printFr() {
    document.open();
    let res = "<ol>Fruits:";
    for(let f of fruits){
        res += "<li>"+f+"</li>";
    }
    res+="</ol>";
    document.write(res);
    document.close();
}