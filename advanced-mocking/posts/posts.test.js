import { beforeEach, describe, expect, it } from 'vitest';

import { extractPostData } from './posts';

// Global Arrange
const testTitle = 'Test title';
const testContent = 'Test content';
let testFormData;

describe('extractPostData()', () => {
  beforeEach(() => {
    // mock object
    testFormData = {
      title: testTitle,
      content: testContent,
      get(indetifier) {
        return this[indetifier];
      },
    };
  });

  it('should extract title and content from the provided form data', () => {
    // Act
    const data = extractPostData(testFormData);

    // Assert
    //expect(data).toEqual({ title: testTitle, content: testContent });
    expect(data.title).toBe(testTitle);
    expect(data.content).toBe(testContent);
  });
});
