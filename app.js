const friend = 'bokul';
let brother = 'emon';
const templeteString = `my friend is ${friend} and mybrother is ${brother}`;
// console.log(templeteString);

const oneParameter = a => a / 5;
const arrowOutput = oneParameter(50);
// console.log(arrowOutput);


const twoParameter = (a, b) => (a + 2) * (b + 2);
const arrowOutput2 = twoParameter(5, 7);
// console.log(arrowOutput2);

const threeParameter = (a, b, c) => a * b * c;
const arrowOutput3 = threeParameter(3, 3, 3);
// console.log(arrowOutput3);

const multiline = (a, b) => {
    const sumA = (a + 2);
    const sumB = (b + 2);
    const sum = (sumA * sumB);
    return sum;
}
// console.log(multiline(2, 2));

const array = [1, 45, 78, 22, 53, 41, 51, 62];
const newArray = array.map(x => x * 5);
// console.log(newArray)

const oddNumbers = array.filter(x => x = (x % 2) !== 0);
// console.log(oddNumbers)

const myObject = { x: 'ami', y: 'tumi', z: 'se', a: 'amra' };
const { a } = myObject;
// console.log(a)

const destructuringArray = [22, 38, 35, 64, 86, 97, 97, 35];
const three = destructuringArray[2];
// console.log(three)

function addNumber(a, b, c = 7) {
    return a + b + c;
}
const addingNumber = addNumber(5, 9);
// console.log(addingNumber);

