// // 01 - Convert the following for loop to a forEach call on the array

// // Create the array
// const flavors = ['chocolate', 'ginger', 'carrot', 'coffee', 'walnut', 'banana'];

// // Create the for loop
// for (let i = 0; i < flavors.length; i++) {
//   console.log('I like ' + flavors[i] + ' cake');
// }

// flavors.forEach(flavor => {
//   console.log(`forEach this ${flavor}`);
// }); 

// // 02 - Convert the following for loop to a forEach call on the array

// const numbers = [2, 4, 6, 8];

// for (let i = 0; i < numbers.length; i++) {
//   console.log('The number', numbers[i], 'is at index', i);
// }

// numbers.forEach((number, index) => {
//   console.log(`The foreach ${number} is at the index of ${index}`)
// })

// 03 - Convert the following for loop to a forEach call on the array

// const evenNumbers = [2, 4, 6, 8, 10];

// // for (let i = 0; i < evenNumbers.length; i++) {
// //   evenNumbers[i] = evenNumbers[i] * 2;
// // }

// // console.log(evenNumbers);

// evenNumbers.forEach((evenNumber, index, array) => {
//   array[index] = evenNumber * 2
//   console.log(array);
// });

// console.log(evenNumbers);




// 04 - Log the name of each product to the page with a forEach call on the products array

let products = [{
  name: 'Running shoes',
  price: 75
}, {
  name: 'Golf shoes',
  price: 85
}, {
  name: 'Dress shoes',
  price: 95
}, {
  name: 'Walking shoes',
  price: 65
}, {
  name: 'Sandals',
  price: 55
}];

products.forEach(product => {
  console.log(product.name);
})

 const names = ['Ruud', 'Esther', 'Lyca']

 names.forEach(name => {
   console.log(name);
 })