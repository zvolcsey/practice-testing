import { it, vi, expect } from 'vitest';
import { HttpError } from './errors';

import { sendDataRequest } from './http';

// Global Arrange
const testData = { key: 'test' };

const testResponseData = {
  testKey: 'testData',
};

const testFetch = vi.fn((url, options) => {
  return new Promise((resolve, reject) => {
    if (typeof options.body !== 'string') {
      return reject('Not a string.');
    }
    const testResponse = {
      ok: true,
      json() {
        return new Promise((resolve, reject) => {
          resolve(testResponseData);
        });
      },
    };
    resolve(testResponse);
  });
});

vi.stubGlobal('fetch', testFetch);

it('should return any available response data', () => {
  // Assert
  return expect(sendDataRequest(testData)).resolves.toEqual(testResponseData);
});

it('should convert the provided data to JSON before sending the request', async () => {
  // Arrange
  let errorMessage;

  // Act
  try {
    await sendDataRequest(testData);
  } catch (error) {
    errorMessage = error;
  }

  // Assert
  expect(errorMessage).not.toEqual('Not a string.');
});

it('should throw an HttpError in case of non-ok responses', () => {
  // Act
  testFetch.mockImplementationOnce((url, options) => {
    return new Promise((resolve, reject) => {
      const testResponse = {
        ok: false,
        json() {
          return new Promise((resolve, reject) => {
            resolve(testResponseData);
          });
        },
      };
      resolve(testResponse);
    });
  });

  // Assert
  return expect(sendDataRequest(testData)).rejects.toBeInstanceOf(HttpError);
});
