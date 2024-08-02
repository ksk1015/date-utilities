import { describe, it, expect } from 'vitest'
import { easyFormat as format } from './easyFormat'

describe('format', () => {
  it('should format date', () => {
    expect(format(new Date('2021-01-01'), 'YYYY YY MM M DD D')).toBe(
      '2021 21 01 1 01 1'
    )
    expect(format(new Date('2021-01-01'), 'YYYY-MM-DD')).toBe('2021-01-01')
  })
})
