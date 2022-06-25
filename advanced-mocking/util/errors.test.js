import { describe, it, expect, beforeEach } from 'vitest';

import { HttpError, ValidationError } from './errors';

describe('class HttpError', () => {
  // Arrange
  const statusCode = 500;
  const message = 'Sending the request failed';
  const data = null;

  // Act
  let error;
  beforeEach(() => {
    error = new HttpError(statusCode, message, data);
  });

  it('should have a statusCode, a message and a data properties', () => {
    // Assert
    expect(error).toHaveProperty('statusCode');
    expect(error).toHaveProperty('message');
    expect(error).toHaveProperty('data');
  });
  it('should store the provided values', () => {
    // Assert
    expect(error.statusCode).toBe(500);
    expect(error.message).toBe('Sending the request failed');
    expect(error.data).toBeNull();
  });
});

describe('class ValidationError', () => {
  // Arrange
  const message = 'A title must be provided.';

  // Act
  let error;
  beforeEach(() => {
    error = new ValidationError(message);
  });

  it('should have a message property', () => {
    // Assert
    expect(error).toHaveProperty('message');
  });
  it('should store the provided message value', () => {
    // Assert
    expect(error.message).toBe('A title must be provided.');
  });
});
