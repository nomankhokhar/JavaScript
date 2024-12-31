// Lesson: Writing your first tests
export function max(a, b) {
  if (a > b) return a;
  else if (b > a) return b;
  return a;
}

// Exercise
export function fizzBuzz(n) {
  if (n % 3 === 0 && n % 5 === 0) return "FizzBuzz";
  if (n % 3 === 0) return "Fizz";
  if (n % 5 === 0) return "Buzz";
  return n.toString();
}

export function calculateAverage(numbers) {
  // If we got an empty array
  if (numbers.length === 0) return NaN;
  // If we got only on arg
  if (numbers.length == 1) return numbers[0];

  // -> First way to do

  // let count = 0;
  // let sum = 0;
  // for (let i = 0; i < numbers.length; i++) {
  //   sum = sum + numbers[i];
  //   count++;
  // }
  // let avg = sum / count;
  // return avg;

  // -> Second way to do
  const acc_sum = numbers.reduce((acc_sum, current) => acc_sum + current, 0);
  let len = numbers.length;
  let acc_avg = acc_sum / len;

  return acc_avg;
}

export function factorial(n) {
  if (n < 0) {
    return undefined;
  }
  if (n == 1 || n == 0) {
    return 1;
  }
  return n * factorial(n - 1);
}
