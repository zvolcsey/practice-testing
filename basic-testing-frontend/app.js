import { outputResult, generateResultText } from './src/output.js';
import { extractEnteredNumberValues } from './src/parser.js';
import { calculateResult } from './src/math.js';

const form = document.querySelector('form');

function formSubmitHandler(event) {
  event.preventDefault();

  const numberValues = extractEnteredNumberValues(form);

  const result = calculateResult(numberValues);

  const resultText = generateResultText(result);

  outputResult(resultText);
}

form.addEventListener('submit', formSubmitHandler);
