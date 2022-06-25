import { it, expect } from 'vitest';

import { validateNotEmpty } from './validation';

// Global Arrange
const errorMessage = 'A title must be provided.';

it('should throw an error if the provided text is empty', () => {
  // Arrange
  const text = '';
  // Act
  const resultFn = () => {
    validateNotEmpty(text, errorMessage);
  };
  // Assert
  expect(resultFn).toThrow();
});

it('should not return anything, if the provided text is not empty', () => {
  // Arrange
  const text = 'Title';

  // Assert
  expect(validateNotEmpty(text, errorMessage)).toBeUndefined();
});
