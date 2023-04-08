export function signNumberWithPrecision(input: number, precision: number) {
  if (input > 0) {
    return '+' + input.toPrecision(precision)
  } else {
    return input.toPrecision(precision)
  }
}

export function randomBetween(min: number, max: number): number {
  return Math.random() * (max - min) + min
}

export function randomIntBetween(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1) + min)
}
