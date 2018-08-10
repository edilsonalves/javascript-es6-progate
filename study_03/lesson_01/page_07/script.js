const check = (number) => {
  return number % 3 === 0;
};

if (check(123)) {
  console.log('Multiple of 3');
} else {
  console.log('Not a multiple of 3');
}
