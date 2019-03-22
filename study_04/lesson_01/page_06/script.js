class Animal {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

const animal = new Animal('Mocha', 8);
console.log(`Name: ${animal.name}`);
console.log(`Age: ${animal.age}`);
