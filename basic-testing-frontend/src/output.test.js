import { describe, it, expect } from 'vitest';

import { generateResultText } from './output';

describe('generateResultText()', () => {
  it('should return a string, no matter which value is passed in', () => {
    // Arrange
    const val1 = 1;
    const val2 = 'invalid';
    const val3 = false;

    // Act
    const result1 = generateResultText(val1);
    const result2 = generateResultText(val2);
    const result3 = generateResultText(val3);

    // Assert
    expect(result1).toBeTypeOf('string');
    expect(result2).toBeTypeOf('string');
    expect(result3).toBeTypeOf('string');
  });

  it('should return a string that contains the calculation result if a number is provided as a result', () => {
    // Arrange
    const result = 5;

    // Act
    const resultText = generateResultText(result);

    // Assert
    expect(resultText).toContain(result.toString());
  });

  it('should return an empty string if "no-calc" is provided as a result', () => {
    // Arrange
    const result = 'no-calc';

    // Act
    const resultText = generateResultText(result);

    // Assert
    expect(resultText).toBe('');
  });

  it('should return a string that contains "Invalid" if "invalid" is provided as a result', () => {
    // Arrange
    const result = 'invalid';

    // Act
    const resultText = generateResultText(result);

    // Assert
    expect(resultText).toContain('Invalid');
  });
});
