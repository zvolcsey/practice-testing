import { expect, it } from 'vitest';

import { generateToken, generateTokenPromise } from './async-example';

// Test callback
it('should generate a token value', (done) => {
  // Arrange
  const testUserEmail = 'test@test.com';

  //Act
  generateToken(testUserEmail, (err, token) => {
    // Assert
    //expect(token).toBeDefined();
    //expect(token).toBe(2); wrong expectation
    try {
      expect(token).toBeDefined();
      //expect(token).toBe(2);
      done();
    } catch (err) {
      done(err);
    }
  });
});

// Test Promises and async / await
it('should generate a token value', () => {
  // Arrange
  const testUserEmail = 'test@test.com';

  // Assert
  return expect(generateTokenPromise(testUserEmail)).resolves.toBeDefined();
});

it('should generate a token value', async () => {
  // Arrange
  const testUserEmail = 'test@test.com';

  // Act
  const token = await generateTokenPromise(testUserEmail);

  // Assert
  expect(token).toBeDefined();
});
