// Write your solution here!
let drivers = ["Milo", "Otis", "Garfield"]

function destructivelyAppendDriver(name) {
    drivers.push(name);
};

function destructivelyPrependDriver(name) {
    drivers.unshift(name);
};

function destructivelyRemoveLastDriver() {
    drivers.pop();
};

function destructivelyRemoveFirstDriver() {
    drivers.shift();
};

function appendDriver(name) { 
    const array1 = [...drivers, name]
    return array1
};

function prependDriver(name) {
    const array1 = [name, ...drivers]
    return array1
};

function removeLastDriver() {
   return drivers.slice(0, 2);
 };

 function removeFirstDriver() {
     return drivers.slice(1)
 }