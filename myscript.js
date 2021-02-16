const myName = 'Jacek';
const age = 29;

console.log(age);

function myFunction (myName, age)  {
    console.log(`First parameter is ${myName}`);
    console.log(`My secong parameter is ${age}`)
    return (`Hello my name is ${myName} and I am ${age} years of age`);
}


console.log(myFunction('Piotr',44))



function calculate (inputNumber, otherNumber) {
    return inputNumber+7+otherNumber
}

console.log(calculate(7,2))

let foo = prompt(`What's your name?`);
let bar = prompt(`How old are you`);
console.log(myFunction(foo, bar));