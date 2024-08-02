import { describe, it, expect } from 'vitest'
import { endOfYear } from './endOfYear'

describe('startOfYear', () => {
  it('should return start of year', () => {
    expect(endOfYear(new Date('2021-01-01'))).toEqual(new Date('2021-12-31'))
    expect(endOfYear(new Date('2021-02-01'))).toEqual(new Date('2021-12-31'))
    expect(endOfYear(new Date('2021-12-31'))).toEqual(new Date('2021-12-31'))
    expect(endOfYear(new Date('2022-01-01'))).toEqual(new Date('2022-12-31'))
  })
})
