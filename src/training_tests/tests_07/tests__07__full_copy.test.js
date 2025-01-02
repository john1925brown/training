import {
  man1FullCopy,
  man2FullCopy,
  man3FullCopy,
  man4FullCopy,
  man5FullCopy,
  manFullCopy,
  numbersFullCopy,
  peopleFullCopy,
} from './tests__07__full_copy';

test('manfullcopy', () => {
  expect(manFullCopy.age).toBe(28);
  expect(manFullCopy.name).toBe('John');
});

test('numbersFullCopy', () => {
  expect(numbersFullCopy.length).toBe(3);
  expect(numbersFullCopy[2]).toBe(3);
});

test('man1FullCopy', () => {
  expect(man1FullCopy.age).toBe(28);
  expect(man1FullCopy.mother.name).toBe('Kate');
});

test('man2FullCopy', () => {
  expect(man2FullCopy.friends.length).toBe(3);
  expect(man2FullCopy.friends[0]).toBe('Peter');
});

test('peopleFullCopy', () => {
  expect(peopleFullCopy[1].age).toBe(32);
  expect(peopleFullCopy[2].name).toBe('William');
});

test('man3FullCopy', () => {
  expect(man3FullCopy.friends.length).toBe(3);
  expect(man3FullCopy.friends[2].name).toBe('William');
});

test('man4FullCopy', () => {
  expect(man4FullCopy.mother.work.position).toBe('doctor');
  expect(man4FullCopy.mother.work.experience).toBe(15);
});

test('man5FullCopy', () => {
  expect(man5FullCopy.mother.parents[0].favoriteDish.ingredients[0].title).toBe('beet');
});
