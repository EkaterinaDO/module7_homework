// Задание 1.

// Написать функцию, которая принимает в качестве аргумента объект и выводит в консоль все ключи и значения только собственных свойств. Данная функция не должна возвращать значение.

const myObj = {
    name: "Ekaterina",
    surname: "Dolgikh",
    age: 27
}

const woman = Object.create(myObj);

woman.city = "Moscow";

function getProperty() {
    for (let key in woman) {
        if (woman.hasOwnProperty(key)) {
            console.log(`Ключ: ${key}, значение: ${woman[key]}`);
        }
    }
}

getProperty(woman);



// Задание 2.

// Написать функцию, которая принимает в качестве аргументов строку и объект, а затем проверяет есть ли у переданного объекта свойство с данным именем. Функция должна возвращать true или false.

const myObj = {
    name: "Ekaterina",
    surname: "Dolgikh",
    age: 27
}

let str = "name";

function checkProperty(string, object) {
    console.log(string in object);
}

checkProperty(str, myObj)


// Задание 3.

// Написать функцию, которая создает пустой объект, но без прототипа.


function createObject() {
    const emptyObj = Object.create(null);
    console.log(emptyObj)
}
createObject()


