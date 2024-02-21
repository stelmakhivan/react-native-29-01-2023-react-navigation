export const sum = (a: number | string, b: number | string) => {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Test Error');
  }
  return a + b;
};
