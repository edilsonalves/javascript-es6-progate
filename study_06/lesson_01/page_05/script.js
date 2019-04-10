const numbers = [1, 2, 3, 4];

const doubledNumbers = numbers.map(number => {
  return number * 2;
});

console.log(doubledNumbers);
const names = [
  { firstName: 'Kate', lastName: 'Jones' },
  { firstName: 'John', lastName: 'Smith' },
  { firstName: 'Dennis', lastName: 'Williams' },
  { firstName: 'David', lastName: 'Black' }
];

const fullNames = names.map(name => {
  return name.firstName + ' ' + name.lastName;
});

console.log(fullNames);
