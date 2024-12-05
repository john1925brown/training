export const sentense = 'Hello my friend';

export const sumFunc = (a: number, b: number) => {
  return a + b;
};

export const splitIntoWords = (sent: string) => {
  return sent
    .toLowerCase()
    .replace('.', '')
    .replace('!', '')
    .replace('-', '')
    .split(' ');
};
