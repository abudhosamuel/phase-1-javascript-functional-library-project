// Collection Functions (Arrays or Objects)

function myEach(collection, callback) {
    const values = Array.isArray(collection) ? collection : Object.values(collection);
    for (let i = 0; i < values.length; i++) {
        callback(values[i]);
    }
    return collection;
}

function myMap(collection, callback) {
    const values = Array.isArray(collection) ? collection : Object.values(collection);
    const result = [];
    for (let i = 0; i < values.length; i++) {
        result.push(callback(values[i]));
    }
    return result;
}

function myReduce(collection, callback, acc) {
    const values = Array.isArray(collection) ? collection : Object.values(collection);
    let startIndex = 0;
    if (acc === undefined) {
        acc = values[0];
        startIndex = 1;
    }
    for (let i = startIndex; i < values.length; i++) {
        acc = callback(acc, values[i], collection);
    }
    return acc;
}

function myFind(collection, predicate) {
    const values = Array.isArray(collection) ? collection : Object.values(collection);
    for (let i = 0; i < values.length; i++) {
        if (predicate(values[i])) {
            return values[i];
        }
    }
    return undefined;
}

function myFilter(collection, predicate) {
    const values = Array.isArray(collection) ? collection : Object.values(collection);
    const result = [];
    for (let i = 0; i < values.length; i++) {
        if (predicate(values[i])) {
            result.push(values[i]);
        }
    }
    return result;
}

function mySize(collection) {
    return Array.isArray(collection) ? collection.length : Object.keys(collection).length;
}

// Array Functions

function myFirst(array, n) {
    if (n === undefined) {
        return array[0];
    } else {
        return array.slice(0, n);
    }
}

function myLast(array, n) {
    if (n === undefined) {
        return array[array.length - 1];
    } else {
        return array.slice(array.length - n);
    }
}

// Object Functions

function myKeys(object) {
    const keys = [];
    for (let key in object) {
        if (object.hasOwnProperty(key)) {
            keys.push(key);
        }
    }
    return keys;
}

function myValues(object) {
    const values = [];
    for (let key in object) {
        if (object.hasOwnProperty(key)) {
            values.push(object[key]);
        }
    }
    return values;
}

// Testing the Functions

console.log(myEach([1, 2, 3], alert)); // alerts each number in turn and returns the original collection
console.log(myEach({one: 1, two: 2, three: 3}, alert)); // alerts each number value in turn and returns the original collection

console.log(myMap([1, 2, 3], function(num) { return num * 3; })); // => [3, 6, 9]
console.log(myMap({one: 1, two: 2, three: 3}, function(num, key) { return num * 3; })); // => [3, 6, 9]

console.log(myReduce([1, 2, 3], function(acc, val, collection) { return acc + val; }, 10)); // => 16
console.log(myReduce({one: 1, two: 2, three: 3}, function(acc, val, collection) { return acc + val; })); // => 6

console.log(myFind([1, 2, 3, 4, 5, 6], function(num) { return num % 2 == 0; })); // => 2
console.log(myFind({one: 1, three: 3, four: 4, six: 6}, function(num) { return num % 2 == 0; })); // => 4

console.log(myFilter([1, 2, 3, 4, 5, 6], function(num) { return num % 2 == 0; })); // => [2, 4, 6]
console.log(myFilter({one: 1, three: 3, five: 5}, function(num) { return num % 2 == 0; })); // => []

console.log(mySize({one: 1, two: 2, three: 3})); // => 3
console.log(mySize([])); // => 0

console.log(myFirst([5, 4, 3, 2, 1])); // => 5
console.log(myFirst([5, 4, 3, 2, 1], 3)); // => [5, 4, 3]

console.log(myLast([5, 4, 3, 2, 1])); // => 1
console.log(myLast([5, 4, 3, 2, 1], 3)); // => [3, 2, 1]

console.log(myKeys({one: 1, two: 2, three: 3})); // => ["one", "two", "three"]
console.log(myValues({one: 1, two: 2, three: 3})); // => [1, 2, 3]
