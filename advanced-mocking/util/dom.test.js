import fs from 'fs';
import path from 'path';

import { beforeEach, expect, it, vi } from 'vitest';
import { Window } from 'happy-dom';

import { showError } from './dom';

const htmlDocPath = path.join(process.cwd(), 'index.html');
const htmlDocumentContent = fs.readFileSync(htmlDocPath).toString();

const window = new Window();
const document = window.document;
document.write(htmlDocumentContent);
vi.stubGlobal('document', document);

beforeEach(() => {
  document.body.innerHTML = '';
  document.write(htmlDocumentContent);
});

it('should add an error paragraph to the id="errors" element', () => {
  // Act
  showError('Test');

  const errorsEl = document.getElementById('errors');
  const errorParagraph = errorsEl.firstElementChild;

  // Assert
  expect(errorParagraph).not.toBeNull();
});

it('should not contain an error paragraph initially', () => {
  // Arrange
  const errorsEl = document.getElementById('errors');
  const errorParagraph = errorsEl.firstElementChild;

  // Assert
  expect(errorParagraph).toBeNull();
});

it('should output the provided message in the error paragraph', () => {
  // Arrange
  const testErrorMessage = 'Test';

  // Act
  showError(testErrorMessage);

  const errorsEl = document.getElementById('errors');
  const errorParagraph = errorsEl.firstElementChild;

  // Assert
  expect(errorParagraph.textContent).toBe(testErrorMessage);
});
