let numbers_2 = [1, 2, 3, 4, 5];
let doubledNumbers = []; // 1. Initialize accumulator variable


for (let i = 0; i < numbers_2.length; i++) {
  const number = numbers_2[i];
  doubledNumbers.push(number * 2); // 3. Update the accumulator variable
}

console.log(doubledNumbers);
