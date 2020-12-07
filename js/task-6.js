let input;
const numbers = [];
let total = 0;


input = prompt('Введите число!');

if (input !== null){
    let values = numbers.push(input).split(' ');

    for (let value  of values){
    
        total += Number(value);
    }
    
   console.log(total);

}
