import readlineSync from 'readline-sync';
import Dog from '../class/dog';

const dog1 = new Dog('Leo', 4, 'Chihuahua');
const name = readlineSync.question('Enter your name: ');
const age = readlineSync.questionInt('Enter your age: ');
const breed = readlineSync.question('Enter your breed: ');
const dog2 = new Dog(name, age, breed);

export { dog1, dog2 };
