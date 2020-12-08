function sumNumbers() {

let input;
let numbers = [];
let total = 0;

while (true) {
    input = prompt('Введите число!');
    

    if (input === null){
        break;
    }
    numbers.push(input);
}

    for (let number of numbers){
        total += Number(number);  
    }   
return total;
}
alert(`Общая сумма чисел равна ${sumNumbers()}`); 