import { extractNumbers } from './parser.js';
import { validateStringNotEmpty, validateNumber } from './util/validation';
import { transformToNumber } from './util/numbers';

export function getNumberInputs(form) {
  const formData = new FormData(form);
  const numberInputs = extractNumbers(formData);
  return numberInputs;
}

export function cleanNumberInputs(inputArray) {
  const numbers = [];
  for (const numberInput of inputArray) {
    validateStringNotEmpty(numberInput);
    const number = transformToNumber(numberInput);
    validateNumber(number);
    numbers.push(number);
  }
  return numbers;
}
