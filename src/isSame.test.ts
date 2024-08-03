import { describe, it, expect } from 'vitest'
import { isSameDate, isSameMonth, isSameYear } from './isSame'

describe('isSameDate', () => {
  it('should return true for the same date', () => {
    const a = new Date('2000-01-01')
    const b = new Date('2000-01-01')
    expect(isSameDate(a, b)).toBe(true)
  })
  it('should return true for the same date', () => {
    const a = new Date('2000-01-01T00:00')
    const b = new Date('2000-01-01T23:59')
    expect(isSameDate(a, b)).toBe(true)
  })
  it('should return false for different dates', () => {
    const a = new Date('2000-01-01')
    const b = new Date('2000-01-02')
    expect(isSameDate(a, b)).toBe(false)
  })
  it('should return false for different dates', () => {
    const a = new Date('2000-01-01T00:00')
    const b = new Date('1999-12-31T23:59')
    expect(isSameDate(a, b)).toBe(false)
  })
})

describe('isSameMonth', () => {
  it('should return true for the same month', () => {
    const a = new Date('2000-01-01T00:00')
    const b = new Date('2000-01-31T23:59')
    expect(isSameMonth(a, b)).toBe(true)
  })
  it('should return false for different months', () => {
    const a = new Date('2000-01-01T00:00')
    const b = new Date('2000-02-01T00:00')
    expect(isSameMonth(a, b)).toBe(false)
  })
})

describe('isSameYear', () => {
  it('should return true for the same year', () => {
    const a = new Date('2000-01-01T00:00')
    const b = new Date('2000-12-31T23:59')
    expect(isSameYear(a, b)).toBe(true)
  })
  it('should return false for different years', () => {
    const a = new Date('2000-01-01T00:00')
    const b = new Date('1999-12-31T23:59')
    expect(isSameYear(a, b)).toBe(false)
  })
})
