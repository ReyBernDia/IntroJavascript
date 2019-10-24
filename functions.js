"use strict";


/** 1. isHometown */

// Define your function here

const isHometown = (town) => {

  return (town === 'San Francisco');

};

console.log(isHometown('Oakland'));
console.log(isHometown('San Francisco'));

/** 2. getFullName */

const getFullName = (firstName, lastName) => {

  return `${firstName} ${lastName}`;

};

console.log(getFullName('Brighticorn', 'Hackbright'));

/** 3. calculateTotal */

const calculateTotal = (basePrice, state, tax = 0.05) => {

  const subtotal = basePrice * (1 + tax);

  let fee = 0;
  if (state === 'CA') {
    fee = 0.03 * subtotal;
  } else if (state === 'PA') {
    fee = 2;
  } else if (state === 'MA') {
    if (basePrice <= 100) {
      fee = 1;
    } else {
      fee = 3;
    }
  }
  return subtotal + fee;
};

console.log(calculateTotal(2.00, 'CA'))
console.log(calculateTotal(2.00, 'PA', 0.10))
console.log(calculateTotal(105, 'MA'))
