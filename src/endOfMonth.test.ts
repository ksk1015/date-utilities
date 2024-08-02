import { describe, it, expect } from 'vitest'
import { endOfMonth } from './endOfMonth'

describe('endOfMonth', () => {
  it('should return the last day of the month', () => {
    expect(endOfMonth(new Date('2021-01-01'))).toEqual(new Date('2021-01-31'))
    expect(endOfMonth(new Date('2021-01-31'))).toEqual(new Date('2021-01-31'))
    expect(endOfMonth(new Date('2021-02-01'))).toEqual(new Date('2021-02-28'))
    expect(endOfMonth(new Date('2021-02-28'))).toEqual(new Date('2021-02-28'))
    expect(endOfMonth(new Date('2021-12-31'))).toEqual(new Date('2021-12-31'))
  })
})
