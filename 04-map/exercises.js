const numbers = [13, 42, 1337];
// Create a new array with the numbers doubled

const double = numbers.map(number => number * 2);

console.log(double);

const days = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday'
];
// create a new array with the first 3 letters of each day

const letterDay = days.map(day =>{
    return day.substring(0, 3);
});

console.log(letterDay);

const people = [{
  first_name: 'CJ',
  last_name: 'R.'
}, {
  first_name: 'Brendan',
  last_name: 'Eich'
}, {
  first_name: 'Kyle',
  last_name: 'Simpson'
}, {
  first_name: 'Douglas',
  last_name: 'Crockford'
}];
// Create a new array with the string full name of each person

const fullName = people.map(human => {
  return `${human.first_name} ${human.last_name}`;
});

console.log(fullName);

const animals = [{
  name: 'cat',
  size: 'small'
}, {
  name: 'dog',
  size: 'small'
}, {
  name: 'lion',
  size: 'medium'
}, {
  name: 'elephant',
  size: 'big'
}];
// Create a new array with just the names of the animals

const name = animals.map(animal => animal.name);

console.log(name);

const theNumbers = [4, 8, 15, 16, 23, 42];
// create a new array of objects with the properties value and index

const newNumbers = theNumbers.map((number, index) => {
  return {
    value: number,
    index: index
  };
});

console.log(newNumbers);

const starter = [2, 5, 10];
// Create a new array with each value multiplied by the next value
// The last value should be multiplied by the first value
// e.g. [2*5, 5*10, 10*2] == [10, 50, 20]

const multiplied = starter.map((start, index, array) => {
  return start[index + 1];
});

console.log(multiplied);