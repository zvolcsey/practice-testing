import { add } from './math';

export function calculateResult(numbers) {
  let result = '';
  result = add(numbers).toString();
  return result;
}

export function generateResultText(result) {
  let resultText = '';

  if (result === 'invalid') {
    resultText = 'Invalid input. You must enter valid numbers.';
  } else if (result !== 'no-calc') {
    resultText = 'Result: ' + result;
  }

  return resultText;
}
