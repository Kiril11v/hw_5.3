const userNum = prompt("enter number: ");
const num = +userNum;
let square = [];
for (let i = 1; i <= 100; i++) {
if (i * i > num) { // якщо квадрат числа більше введеного прога зупиняється 
    break;
}
square.push(i)  // в пустий масив записуються валідні числа
}
console.log(square);
