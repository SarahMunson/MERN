const cars = ['Tesla', 'Mercedes', 'Honda']
const [ randomCar ] = cars
const [ ,otherRandomCar ] = cars
//Predict the output
console.log(randomCar)
console.log(otherRandomCar)

//Tesla, Mercedes

const employee = {
    names: 'Elon',
    age: 47,
    company: 'Tesla'
}
const { names: otherName } = employee;
//Predict the output
// console.log(names);
console.log(otherName);

//undefined, Elon --when it came back undefined, the code wouldn't work so I commented it out
//I also changed name to names because vscode was not having it

const person = {
    name: 'Phil Smith',
    age: 47,
    height: '6 feet'
}
const password = '12345';
const { password: hashedPassword } = person;  
//Predict the output
console.log(password);
console.log(hashedPassword);

//12345, unsure (it was undefined) because there's no password key in person

const numbers = [8, 2, 3, 5, 6, 1, 67, 12, 2];
const [,first] = numbers;
const [,,,second] = numbers;
const [,,,,,,,,third] = numbers;
//Predict the output
console.log(first == second);
console.log(first == third);

//false, true


const lastTest = {
    key: 'value',
    secondKey: [1, 5, 1, 8, 3, 3]
}
const { key } = lastTest;
const { secondKey } = lastTest;
const [ ,willThisWork] = secondKey;
//Predict the output
console.log(key);
console.log(secondKey);
console.log(secondKey[0]);
console.log(willThisWork);

//I have no idea... following my console, console.log(key) prints value...
//console.log(secondKey) prints [1, 5, 1, 8, 3, 3]
//console log(secondKey[0]) prints 1 -- secondKey is now the variable for the whole of lastTest, as is Key. I'm confused. It actually just states it as it's own const to be called later, sweet! 
//console.log(willThisWork) prints 5 -- , newvariablename of secondKey, which is 5
