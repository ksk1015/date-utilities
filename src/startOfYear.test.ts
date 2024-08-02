import { describe, it, expect } from 'vitest'
import { startOfYear } from './startOfYear'

describe('startOfYear', () => {
  it('should return start of year', () => {
    expect(startOfYear(new Date('2021-01-01'))).toEqual(new Date('2021-01-01'))
    expect(startOfYear(new Date('2021-02-01'))).toEqual(new Date('2021-01-01'))
    expect(startOfYear(new Date('2021-12-31'))).toEqual(new Date('2021-01-01'))
    expect(startOfYear(new Date('2022-01-01'))).toEqual(new Date('2022-01-01'))
  })
})
