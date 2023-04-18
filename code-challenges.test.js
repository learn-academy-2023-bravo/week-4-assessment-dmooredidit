// ASSESSMENT 4: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in an array, removes the first item from the array and shuffles the remaining content.

// psuedocode: Create a function named shuffleRemove that takes in an array, removes the first item from the array and shuffles the remaining content.
// Input: Array
// Output: Array with first item removed and the rest shuffled
// create function called shuffleRemove that takes in and object and outputs an array
// I'm thinking I can iterate over the array using the math.random method then the math.floor to access the index numbers
// since purple needs to be deleted, i would also have to remove that string before i randomize it because i can just use the index number to get to it in the beginning

// a) Create a test with an expect statement using the variable provided.
// HINT: Check out this resource: https://jestjs.io/docs/expect#expectarraycontainingarray

describe("shuffleRemove", () => {
  it("takes in an array, removes the first item from the array and shuffles the remaining content.", () => {
    const colors1 = ["purple", "blue", "green", "yellow", "pink"];
    // Expected output example (can be a different order): ["yellow", "blue", "pink", "green"]

    const colors2 = [
      "chartreuse",
      "indigo",
      "periwinkle",
      "ochre",
      "aquamarine",
      "saffron",
    ];
    // Expected output example (can be a different order): ["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]
    expect(shuffleRemove(colors1)).toEqual(["yellow", "blue", "pink", "green"]);
    expect(shuffleRemove(colors2)).toEqual([
      "indigo",
      "periwinkle",
      "ochre",
      "aquamarine",
      "saffron",
    ]);
  });
});

// --->  FAIL  ./code-challenges.test.js
//   shuffleRemove
//   ✕ takes in an array, removes the first item from the array and shuffles the remaining content.

// ● shuffleRemove › takes in an array, removes the first item from the array and shuffles the remaining content.

//   ReferenceError: shuffleRemove is not defined

// b) Create the function that makes the test pass.
// psuedocode: Create a function named shuffleRemove that takes in an array, removes the first item from the array and shuffles the remaining content.
// Input: Array
// Output: Array with first item removed and the rest shuffled
// create function called shuffleRemove that takes in and object and outputs an array
// since purple needs to be deleted, i would also have to remove it by using .shift first
// I'm thinking I can iterate over the array using the .random method

const colors1 = ["purple", "blue", "green", "yellow", "pink"];

const colors2 = [
  "chartreuse",
  "indigo",
  "periwinkle",
  "ochre",
  "aquamarine",
  "saffron",
];

const shuffleRemove = (array) => {
  const newArray = [];
  const removedWord = () => {
    array.shift;
    const arraySs = [];
    arraySs.push(array[i]);
  };
  return arraySs;

  for (let i = 0; i < array.length; i++) {
    // array.shift();
    array.math.random();
    array.math.floor();
    newArray.push(array[i]);
  }
  return newArray;
};

console.log(shuffleRemove(colors1));
console.log(shuffleRemove(colors2));

// --------------------2) Create a function that takes in an object that contains up votes and down votes and returns the end tally.

// psuedocode: Create a function named endTally that takes in an object that contains up votes and down votes and returns the end tally.
// Input: Object
// Output: number
// create function called endTally that takes in and object and outputs a number(integer)

// a) Create a test with expect statements for each of the variables provided.

describe("endTally", () => {
  it("takes in an object that contains up votes and down votes and returns the end tally.", () => {
    const votes1 = { upVotes: 13, downVotes: 2 };
    // Expected output: 11
    const votes2 = { upVotes: 2, downVotes: 33 };
    // Expected output: -31

    expect(endTally(votes1)).toEqual(11);
    expect(endTally(votes2)).toEqual(-31);
  });
});
// --->  FAIL  ./code-challenges.test.js
//   endTally
//   ✕ takes in an object that contains up votes and down votes and returns the end tally. (1 ms)

// ● endTally › takes in an object that contains up votes and down votes and returns the end tally.

//   ReferenceError: endTally is not defined

// b) Create the function that makes the test pass.

const votes1 = { upVotes: 13, downVotes: 2 };
const votes2 = { upVotes: 2, downVotes: 33 };

const endTally = (object) => {
  const addItUp = (number) => {
    let votes = number - number;
  };
  return endTally;
};
console.log(votes1);
console.log(votes2);

// --------------------3) Create a function that takes in two arrays as arguments and returns one array with no duplicate values. STRETCH: Use the spread operator to pass in a dynamic number of arguments.

// psuedocode: Create a function named noDups that takes in two arrays as arguments and returns one array with no duplicate values.
// Input: 2 Arrays
// Output: 1 Array
// create function called noDups that takes in two arrays as arguments and returns one array with no duplicate values.
// I think I can join the two Arrays with .join
// must fine a methed to remove duplicates. Maybe .filter.

// a) Create a test with expect statements for each of the variables provided.

describe("noDups", () => {
  it("takes in two arrays as arguments and returns one array with no duplicate values.", () => {
    const dataArray1 = ["array", "object", "number", "string", "Boolean"];
    const dataArray2 = ["string", "null", "Boolean", "string", "undefined"];
    // Expected output: ["array", "object", "number", "string", "Boolean", "null", "undefined"]

    expect(noDups(dataArray1, dataArray2)).toEqual([
      "array",
      "object",
      "number",
      "string",
      "Boolean",
      "null",
      "undefined",
    ]);
  });
});

// --->  FAIL  ./code-challenges.test.js
//   noDups
//   ✕ takes in two arrays as arguments and returns one array with no duplicate values.

// ● noDups › takes in two arrays as arguments and returns one array with no duplicate values.

//   ReferenceError: noDups is not defined

// b) Create the function that makes the test pass.

const dataArray1 = ["array", "object", "number", "string", "Boolean"];
const dataArray2 = ["string", "null", "Boolean", "string", "undefined"];

const noDups = (array1, array2) => {
  const newArray1 = [...new Set(string)];
  for (let i = 0; i < array.length; i++) {
    newArray1.push(array[i]);
  }
  return newArray1;
};
console.log(dataArray1);
console.log(dataArray2);
