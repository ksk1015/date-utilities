import { describe, it, expect } from 'vitest'
import { startOfMonth } from './startOfMonth'

describe('startOfMonth', () => {
  it('should return the first day of the month', () => {
    expect(startOfMonth(new Date('2021-01-01'))).toEqual(new Date('2021-01-01'))
    expect(startOfMonth(new Date('2021-01-31'))).toEqual(new Date('2021-01-01'))
    expect(startOfMonth(new Date('2021-02-01'))).toEqual(new Date('2021-02-01'))
    expect(startOfMonth(new Date('2021-12-31'))).toEqual(new Date('2021-12-01'))
  })
})
