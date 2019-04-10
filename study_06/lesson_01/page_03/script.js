const numbers = [1, 3, 5, 7, 9];

const foundNumber = numbers.find(number => {
  return number % 3 === 0;
});

console.log(foundNumber);
const characters = [
  { id: 1, name: 'Ken the Ninja', age: 6 },
  { id: 2, name: 'Ben the Baby Ninja', age: 2 },
  { id: 3, name: 'Master White', age: 100 },
  { id: 4, name: 'Birdie', age: 21 }
];

const foundCharacter = characters.find(character => {
  return character.id === 3;
});

console.log(foundCharacter);
