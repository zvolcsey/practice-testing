import { expect, it } from 'vitest';

import { transformToNumber } from './numbers';

it('should transform to number if get a numeric value as string', () => {
  // Arrange
  const value = '1';

  // Act
  const result = transformToNumber(value);

  // Assert
  const expectedResult = +value;
  expect(result).toBe(expectedResult);
  //expect(result).toBeTypeOf('number'); BUT NaN has a number type too.
});

it('should yield NaN if invalid (non-transormable) value is provided', () => {
  // Arrange
  const value = 'invalid';
  const value2 = {};

  // Act
  const result = transformToNumber(value);
  const result2 = transformToNumber(value2);

  // Assert
  expect(result).toBeNaN();
  expect(result2).toBeNaN();
});

it('should yield NaN if no value is passed into the function', () => {
  // Act
  const result = transformToNumber();

  // Assert
  expect(result).toBeNaN();
});
