import { sum } from '@/utils/sum';

describe('sum method', () => {
  it('should return 2', () => {
    const result = sum(1, 1);

    expect(result).toBe(2);
  });

  it('should throw error', () => {
    try {
      const result = sum('1', '2');

      console.log(result);
      expect.assertions(1);
    } catch (error) {
      expect((error as Error).message).toBe('Test Error');
    }
  });
});
