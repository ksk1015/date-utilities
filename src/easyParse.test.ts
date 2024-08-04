import { describe, it, expect } from 'vitest'
import { easyParse } from './easyParse'

describe('easyParse', () => {
  it('should parse YYYY-MM-DD', () => {
    const d = easyParse('2020-01-01')
    expect(d.getFullYear()).toBe(2020)
    expect(d.getMonth() + 1).toBe(1)
    expect(d.getDate()).toBe(1)
    expect(d.getHours()).toBe(0)
    expect(d.getMinutes()).toBe(0)
    expect(d.getHours()).toBe(0)
  })

  it('should parse YYYY-MM', () => {
    const d = easyParse('2020-01')
    expect(d.getFullYear()).toBe(2020)
    expect(d.getMonth() + 1).toBe(1)
    expect(d.getDate()).toBe(1)
    expect(d.getHours()).toBe(0)
    expect(d.getMinutes()).toBe(0)
    expect(d.getHours()).toBe(0)
  })
})
