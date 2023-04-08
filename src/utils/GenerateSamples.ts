import { random } from 'lodash'

export interface SampleConfig {
  quantity: number
  conversionRateA: number
  conversionRateB: number
}

function generateBinomialArray(sampleSize: number, conversionRate: number): number[] {
  // TODO add 0 < p < 1 check
  const binomialData: number[] = []

  for (let i = 0; i < sampleSize; i++) {
    binomialData.push(random(0, 1, true) < conversionRate ? 1 : 0)
  }

  return binomialData
}

export { generateBinomialArray }
