import { describe, bench } from 'vitest'
import { rowsOfCalendar } from './rowsOfCalendar'

function rowsOfCalendar2(date: Date, startday = 0): number {
  const d = new Date(date)
  const thisMonth = date.getMonth()
  d.setDate(1)
  d.setDate(d.getDate() - ((d.getDay() - startday + 7) % 7))
  let rows = 0
  do {
    rows++
    d.setDate(d.getDate() + 7)
  } while (d.getMonth() === thisMonth)
  return rows
}

describe('rowsOfCalendarのベンチーマーク', () => {
  const benchFunc = (cb: (d: Date) => void) => {
    const d = new Date('1900-01')
    for (let i = 0; i < 1000; i++) {
      cb(d)
      d.setMonth(d.getMonth() + 1)
    }
  }
  bench('rowsOfCalendar', () => {
    benchFunc(rowsOfCalendar)
  })
  bench('rowsOfCalendar2', () => {
    benchFunc(rowsOfCalendar2)
  })
})
