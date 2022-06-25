import { it, expect } from 'vitest';

import { validateNotEmpty } from './validation';

// Global Arrange
const errorMessage = 'A title must be provided.';

it('should throw an error if the provided text is empty', () => {
  // Arrange
  const testInput = '';
  // Act
  const validationFn = () => {
    validateNotEmpty(testInput, errorMessage);
  };
  // Assert
  expect(validationFn).toThrow();
});

it('should throw an error if the provided text contains blanks', () => {
  // Arrange
  const testInput = '  ';
  // Act
  const validationFn = () => {
    validateNotEmpty(testInput, errorMessage);
  };
  // Assert
  expect(validationFn).toThrow();
});

it('should throw an error with the provided error message', () => {
  // Arrange
  const testInput = '';
  // Act
  const validationFn = () => {
    validateNotEmpty(testInput, errorMessage);
  };
  // Assert
  expect(validationFn).toThrow(errorMessage);
});

it('should not return anything, if the provided text is not empty', () => {
  // Arrange
  const testInput = 'Title';

  // Assert
  expect(validateNotEmpty(testInput, errorMessage)).toBeUndefined();
});
