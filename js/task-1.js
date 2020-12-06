const items = ["Mango", "Poly", "Ajax", "Lux", "Jay", "Kong"];

const logItems = (arr) => {
  for (let i = 0; i < arr.length; i += 1) {
    console.log(`${i + 1} - ${items[i]}`);
  }
};

logItems(items);
