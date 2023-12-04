//Напишите функцию, которая проверяет, является ли число целым используя побитовые операторы
function isInteger(n) {
    return (n^0) === n
}

//Напишите функцию, которая возвращает массив четных чисел от 2 до 20 включительно
function even() {
    let res_arr = [];

    for (let i = 2; i <= 20; i++) {
        if (i%2 == 0) res_arr.push(i);
    }

    return res_arr;
}

//Напишите функцию, считающую сумму чисел до заданного используя цикл
function sumTo(n) {
    let sum = 0;

    for (let i = 0; i <= n; i++) {
        sum += i;
    }

    return sum;
}

//Напишите функцию, считающую сумму чисел до заданного используя рекурсию
function recSumTo(n) {
    if (n == 0) return 0;
    else return recSumTo(n-1) + n
}

//Напишите функцию, считающую факториал заданного числа
function factorial(n) {
    let result = 1;

    if (n > 1) {
        for (let i = 1; i <= n; i++) result *= i;
    }
    else return 1;
    
    return result;
}

//Напишите функцию, которая определяет, является ли число двойкой, возведенной в степень
function isBinary(n) {
    if (n >= 1) {
        let i = 0;
        while (Math.pow(2, i) <= n) {
             if (n == Math.pow(2, i)) return true;
             i += 1;
        }
        return false;
    }
    else return false;   
}

//Напишите функцию, которая находит N-е число Фибоначчи
function fibonacci(n) {
    if (n == 1 || n == 2) return 1;
    else return fibonacci(n-2) + fibonacci(n-1);
}

/** Напишите функцию, которая принимает начальное значение и функцию операции
 * и возвращает функцию - выполняющую эту операцию.
 * Если функция операции (operatorFn) не задана - по умолчанию всегда
 * возвращается начальное значение (initialValue)
 * @param initialValue
 * @param operatorFn - (storedValue, newValue) => {operation}
 * @example
 * const sumFn =  getOperationFn(10, (a,b) => a + b);
 * console.log(sumFn(5)) - 15
 * console.log(sumFn(3)) - 18
 */
function getOperationFn(initialValue, operatorFn = () => initialValue) {
    let storedValue = initialValue;

    return function (newValue) {
    if (operatorFn) {
        storedValue = operatorFn(storedValue, newValue);
    }
    return storedValue;
}
}

/**
 * Напишите функцию создания генератора арифметической последовательности.
 * При ее вызове, она возвращает новую функцию генератор - generator().
 * Каждый вызов функции генератора возвращает следующий элемент последовательности.
 * Если начальное значение не передано, то оно равно 0.
 * Если шаг не указан, то по дефолту он равен 1.
 * Генераторов можно создать сколько угодно - они все независимые.
 *
 * @param {number} start - число с которого начинается последовательность
 * @param {number} step  - число шаг последовательности
 * @example
 * const generator = sequence(5, 2);
 * console.log(generator()); // 5
 * console.log(generator()); // 7
 * console.log(generator()); // 9
 */
function sequence(start = 0, step = 1) {
    let currentValue = start;

  return function generator() {
    const result = currentValue;
    currentValue += step;
    return result;
  };
}

/**
 * Напишите функцию deepEqual, которая принимает два значения
 * и возвращает true только в том случае, если они имеют одинаковое значение
 * или являются объектами с одинаковыми свойствами,
 * значения которых также равны при сравнении с рекурсивным вызовом deepEqual.
 * Учитывать специфичные объекты(такие как Date, RegExp итп) не обязательно
 *
 * @param {object} firstObject - первый объект
 * @param {object} secondObject - второй объект
 * @returns {boolean} - true если объекты равны(по содержанию) иначе false
 * @example
 * deepEqual({arr: [22, 33], text: 'text'}, {arr: [22, 33], text: 'text'}) // true
 * deepEqual({arr: [22, 33], text: 'text'}, {arr: [22, 3], text: 'text2'}) // false
 */
function deepEqual(firstObject, secondObject) {
    if (Number.isNaN(firstObject) && Number.isNaN(secondObject)) {
        return true;
    }
   
    if (firstObject === secondObject) {
        return true; // Если объекты идентичны по ссылке, они равны.
    }
    
    if (typeof firstObject !== 'object' || typeof secondObject !== 'object') {
        return false; // Если хотя бы один из аргументов не является объектом, они не равны.
    }
    
    const keys1 = Object.keys(firstObject);
    const keys2 = Object.keys(secondObject);
    
    if (keys1.length !== keys2.length) {
        return false; // Если объекты имеют разное количество свойств, они не равны.
    }
    
    for (const key of keys1) {
        if (!keys2.includes(key) || !deepEqual(firstObject[key], secondObject[key])) {
            return false; // Если свойства не совпадают или их значения не равны, объекты не равны.
        }
    }
    
    // Если все проверки прошли, объекты равны.
    return true;
}

module.exports = {
    isInteger,
    even,
    sumTo,
    recSumTo,
    factorial,
    isBinary,
    fibonacci,
    getOperationFn,
    sequence,
    deepEqual,
};