let isValidNumber = false;
let num;

while(!isValidNumber){
const userNum = prompt("enter number: ");
if(userNum === null) {
    alert('ok,bye');
    break;
}


num = Math.abs(+userNum); // - і 0 прибирає

if (Number.isInteger(num) && userNum?.trim() !== '' && num <= 10000 && num > 0) { // валідація
    isValidNumber = true;
    break;
}
else {
    alert('it is not valid number');
}
}



if (isValidNumber) {
const square = [];

for (let i = 1; i <= 100; i++) {
if (i * i > num) { // якщо квадрат числа більше введеного прога зупиняється 
    break;
}
square.push(i)  // в пустий масив записуються валідні числа
}

alert(square);
}