import { describe, expect, it } from 'vitest';

import { cleanNumbers, transformToNumber } from './numbers';

describe('transformToNumber()', () => {
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
});

describe('cleanNumbers()', () => {
  it('should return an array of number values if an array of string number values is provided', () => {
    // Arrange
    const numberValues = ['1', '2'];

    // Act
    const cleanedNumbers = cleanNumbers(numberValues);

    // Assert
    expect(cleanedNumbers[0]).toBeTypeOf('number');
  });

  it('should throw an error if an array with at least one empty string is provided', () => {
    // Arrange
    const numberValues = ['', 1];

    // Act
    const cleanFn = () => cleanNumbers(numberValues);

    // Assert
    expect(cleanFn).toThrow();
  });
});
