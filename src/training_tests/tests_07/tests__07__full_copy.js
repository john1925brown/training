// 1. Simple object
let man = {
  name: 'John',
  age: 28,
};

export let manFullCopy = { ...man };

let numbers = [1, 2, 3];

export let numbersFullCopy = [...numbers];

// 3. Object inside an object
let man1 = {
  name: 'John',
  age: 28,
  mother: {
    name: 'Kate',
    age: 50,
  },
};

const getFullCopy = (obj) => {
  let newObj = Array.isArray(obj) ? [] : {};
  for (const key in obj) {
    if (typeof obj[key] === 'object' || obj[key] === null) {
      newObj[key] = getFullCopy(obj[key]);
    } else {
      newObj[key] = obj[key];
    }
  }
  return newObj;
};

export let man1FullCopy = getFullCopy(man1);

// 4. Array of primitives inside an object
let man2 = {
  name: 'John',
  age: 28,
  friends: ['Peter', 'Steven', 'William'],
};

export let man2FullCopy = getFullCopy(man2);

// 5 Array of objects
let people = [
  { name: 'Peter', age: 30 },
  { name: 'Steven', age: 32 },
  { name: 'William', age: 28 },
];

export let peopleFullCopy = getFullCopy(people);

// 6 Array of objects inside object
let man3 = {
  name: 'John',
  age: 28,
  friends: [
    { name: 'Peter', age: 30 },
    { name: 'Steven', age: 32 },
    { name: 'William', age: 28 },
  ],
};

export let man3FullCopy = getFullCopy(man3);

// 7 Object inside an object, inside an object
let man4 = {
  name: 'John',
  age: 28,
  mother: {
    name: 'Kate',
    age: 50,
    work: {
      position: 'doctor',
      experience: 15,
    },
  },
};

export let man4FullCopy = getFullCopy(man4);

let man5 = {
  name: 'John',
  age: 28,
  mother: {
    name: 'Kate',
    age: 50,
    work: {
      position: 'doctor',
      experience: 15,
    },
    parents: [
      {
        name: 'Kevin',
        age: 80,
        favoriteDish: {
          title: 'borscht',
          ingredients: [
            { title: 'beet', amount: 3 },
            { title: 'potatoes', amount: 5 },
            { title: 'carrot', amount: 1 },
          ],
        },
      },
      {
        name: 'Jennifer',
        age: 78,
        favoriteDish: {
          title: 'sushi',
          ingredients: [
            { title: 'fish', amount: 1 },
            { title: 'rise', amount: 0.5 },
          ],
        },
      },
    ],
  },
};

export let man5FullCopy = getFullCopy(man5);
