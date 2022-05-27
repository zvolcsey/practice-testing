import { getInputs, cleanInputs } from './src/input.js';
import { calculateResult, generateResultText } from './src/result.js';
import { outputTextContent } from './src/output.js';

const form = document.querySelector('form');
const output = document.getElementById('result');

function formSubmitHandler(event) {
  event.preventDefault();

  const numberInputs = getInputs(form);

  try {
    const numbers = cleanInputs(numberInputs);
    result = calculateResult(numbers);
  } catch (error) {
    result = error.message;
  }
  const resultText = generateResultText(result);

  outputTextContent(output, resultText);
}

form.addEventListener('submit', formSubmitHandler);
