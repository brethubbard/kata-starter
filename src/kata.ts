export function add(input): number {
  const [delimiter, numbers] = parseInput(input);

  const parsedNumbers = parseNumbers(delimiter, numbers);

  return parsedNumbers.reduce((acc, n) => acc + n, 0);
}

function parseInput(input: string): [string | RegExp, string] {
  if (input.startsWith("//")) {
    const [delimiter, numbers] = input.split("\n");
    return [delimiter.slice(2), numbers];
  }

  return [/[\,\n]/, input];
}

function parseNumbers(delimiter: string | RegExp, numbers: string): number[] {
  return numbers.split(delimiter).map((n) => +n);
}
