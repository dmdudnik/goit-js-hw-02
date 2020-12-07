const calculateEngravingPrice = function(message, pricePerWord) {
    let messageItems= message.split(' ');
    let messagePrice = messageItems.length * pricePerWord;

    return messagePrice;
}

console.log(calculateEngravingPrice(
    'Proin sociis natoque et magnis parturient montes mus', 10));

console.log(calculateEngravingPrice(
    'Proin sociis natoque et magnis parturient montes mus', 20)); 

console.log(calculateEngravingPrice('Donec orci lectus aliquam est magnis', 40));

console.log(calculateEngravingPrice('Donec orci lectus aliquam est magnis', 20));