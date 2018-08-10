const dollarYenRate = 110;

const convertToYen = (priceDollar) => {
  return priceDollar * dollarYenRate;
};

const information = (name, price) => {
  console.log(`In US dollars, ${name} is $${price}`);
  const priceYen = convertToYen(price);
  console.log(`In Japanese yen, ${name} is ¥${priceYen}`);
  console.log('--------------');
};

information('Perfume', 48);
information('Candy', 6);
