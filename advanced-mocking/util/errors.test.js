import { describe, it, expect, beforeEach } from 'vitest';

import { HttpError, ValidationError } from './errors';

describe('class HttpError', () => {
  // Arrange
  const testStatusCode = 500;
  const testMessage = 'Sending the request failed';
  const testData = { key: 'test' };

  // Act
  let testError;
  beforeEach(() => {
    testError = new HttpError(testStatusCode, testMessage, testData);
  });

  it('should have a statusCode, a message and a data properties', () => {
    // Assert
    expect(testError).toHaveProperty('statusCode');
    expect(testError).toHaveProperty('message');
    expect(testError).toHaveProperty('data');
  });
  it('should store the provided values', () => {
    // Assert
    expect(testError.statusCode).toBe(testStatusCode);
    expect(testError.message).toBe(testMessage);
    expect(testError.data).toBe(testData);
  });
  it('should contain undefined as data if no data is provided', () => {
    // Act
    const newtestError = new HttpError(testStatusCode, testMessage);
    // Assert
    //expect(newtestError.data).not.toBeDefined();
    expect(newtestError.data).toBeUndefined();
  });
});

describe('class ValidationError', () => {
  // Arrange
  const testMessage = 'A title must be provided.';

  // Act
  let testError;
  beforeEach(() => {
    testError = new ValidationError(testMessage);
  });

  it('should have a message property', () => {
    // Assert
    expect(testError).toHaveProperty('message');
  });
  it('should store the provided message value', () => {
    // Assert
    expect(testError.message).toBe(testMessage);
  });
});
