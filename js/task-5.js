const checkForSpam = function(message) {
let words = message.toLowerCase();
return words.includes('sale') || words.includes('spam');
}

console.log(checkForSpam('Latest technology news'));
console.log(checkForSpam('JavaScript weekly newsletter')); 
console.log(checkForSpam('Get best sale offers now!'));
console.log(checkForSpam('[SPAM] How to earn fast money?'));