"use strict";


/** 1. countWords */
const countWords = (phrase) => {
	
  const wordCounts = {}

  for (const word of phrase.split(' ')) {
    if (!wordCounts[word]) {
      wordCounts[word] = 1
    } else {     
      wordCounts[word] += 1
    }
  }

  return wordCounts;
};

console.log(countWords("I do not like them in a house, I do not like them with a mouse"));
/*

"I do not like them in a house, I do not like them with a mouse"
^

wordCounts{}

?? wordCounts["I"] ??

wordCounts["I"] = undefined

if wordCounts[word] -> if wordCounts["I"] -> false

okay, so make a wordCounts["I"] and set equal to 1

wordCounts["I"] = 1

*/
/** 2. getMelonsAtPrice */
const getMelonsAtPrice = (price) => {
	
   const melonPrices = {
        2.50: ['Cantaloupe', 'Honeydew'],
        2.95: ['Watermelon'],
        3.25: ['Musk', 'Crenshaw'],
        14.25: ['Christmas']
    }
    if (! melonPrices[price]) {
      return;
    } 
    return melonPrices[price].sort();
};

console.log(getMelonsAtPrice(2.50));
console.log(getMelonsAtPrice(3.25));