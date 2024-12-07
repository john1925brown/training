import { sentense, splitIntoWords, sumFunc } from './tests_01__basic';

test.skip('sumFunc should be correct', () => {
  //data
  const a = 1;
  const b = 2;

  //action
  const result = sumFunc(a, b);

  // expect result
  expect(result).toBe(3);
});

test('splitIntoWords should be correct', () => {
  //data
  const sent1 = 'Hello my friend!';
  const sent2 = 'JS - the best programming   language.';

  // action
  const result = splitIntoWords(sent1);

  //expect result
  expect(result.length).toBe(3);
  expect(result[0]).toBe('hello');
  expect(result[1]).toBe('my');
  expect(result[2]).toBe('friend');
});
