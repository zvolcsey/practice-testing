import { expect, it } from 'vitest';

import { validateStringNotEmpty, validateNumber } from './validation';

it('should throw an error, if an empty value is provided', () => {
  // Arrange
  const value = '';

  // Act
  const resultFn = () => {
    validateStringNotEmpty(value);
  };

  // Assert
  expect(resultFn).toThrow('Invalid input - must not be empty.');
});

it('should throw an error, if NaN is provided', () => {
  // Arrange
  const value = NaN;

  // Act
  const resultFn = () => {
    validateNumber(value);
  };

  // Assert
  expect(resultFn).toThrow('Invalid number input.');
});
