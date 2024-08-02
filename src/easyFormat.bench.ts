import { describe, bench } from 'vitest'
import { easyFormat } from './easyFormat'

function planB(date: Date, format: string): string {
  const d = new Date(date)
  d.setMinutes(d.getMinutes() - d.getTimezoneOffset())
  const [YYYY, MM, DD] = d.toISOString().split('T')[0].split('-')
  const YY = YYYY.slice(-2)
  const M = `${parseInt(MM)}`
  const D = `${parseInt(DD)}`
  return format
    .replace(/YYYY/g, YYYY)
    .replace(/YY/g, YY)
    .replace(/MM/g, MM)
    .replace(/M/g, M)
    .replace(/DD/g, DD)
    .replace(/D/g, D)
}

describe('easyFormat', () => {
  const benchFunc = (cb: (d: Date, format: string) => void) => {
    const d = new Date()
    for (let i = 0; i < 1000; i++) {
      cb(d, 'YYYY-MM-DD')
      d.setDate(d.getDate() + 1)
    }
  }
  bench('easyFormat', () => {
    benchFunc(easyFormat)
  })
  bench('PLAN B', () => {
    benchFunc(planB)
  })
})
