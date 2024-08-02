import { describe, it, expect } from 'vitest'
import { endOfWeek } from './endOfWeek'

describe('endOfWeek', () => {
  it('次の土曜または元々土曜なら同じ日を返す', () => {
    expect(endOfWeek(new Date('2024-01-01'))).toEqual(new Date('2024-01-06'))
    expect(endOfWeek(new Date('2024-01-02'))).toEqual(new Date('2024-01-06'))
    expect(endOfWeek(new Date('2024-01-03'))).toEqual(new Date('2024-01-06'))
    expect(endOfWeek(new Date('2024-01-04'))).toEqual(new Date('2024-01-06'))
    expect(endOfWeek(new Date('2024-01-05'))).toEqual(new Date('2024-01-06'))
    expect(endOfWeek(new Date('2024-01-06'))).toEqual(new Date('2024-01-06'))
    expect(endOfWeek(new Date('2024-01-07'))).toEqual(new Date('2024-01-13'))
    expect(endOfWeek(new Date('2024-01-08'))).toEqual(new Date('2024-01-13'))

    expect(endOfWeek(new Date('2024-01-28'))).toEqual(new Date('2024-02-03'))
    expect(endOfWeek(new Date('2024-01-29'))).toEqual(new Date('2024-02-03'))
    expect(endOfWeek(new Date('2024-01-30'))).toEqual(new Date('2024-02-03'))
    expect(endOfWeek(new Date('2024-01-31'))).toEqual(new Date('2024-02-03'))
    expect(endOfWeek(new Date('2024-02-01'))).toEqual(new Date('2024-02-03'))
    expect(endOfWeek(new Date('2024-02-02'))).toEqual(new Date('2024-02-03'))
    expect(endOfWeek(new Date('2024-02-03'))).toEqual(new Date('2024-02-03'))
    expect(endOfWeek(new Date('2024-02-04'))).toEqual(new Date('2024-02-10'))
  })
  it('次の日曜または元々日曜なら同じ日を返す', () => {
    expect(endOfWeek(new Date('2024-01-01'), 1)).toEqual(new Date('2024-01-07'))
    expect(endOfWeek(new Date('2024-01-02'), 1)).toEqual(new Date('2024-01-07'))
    expect(endOfWeek(new Date('2024-01-03'), 1)).toEqual(new Date('2024-01-07'))
    expect(endOfWeek(new Date('2024-01-04'), 1)).toEqual(new Date('2024-01-07'))
    expect(endOfWeek(new Date('2024-01-05'), 1)).toEqual(new Date('2024-01-07'))
    expect(endOfWeek(new Date('2024-01-06'), 1)).toEqual(new Date('2024-01-07'))
    expect(endOfWeek(new Date('2024-01-07'), 1)).toEqual(new Date('2024-01-07'))
    expect(endOfWeek(new Date('2024-01-08'), 1)).toEqual(new Date('2024-01-14'))
    expect(endOfWeek(new Date('2024-01-09'), 1)).toEqual(new Date('2024-01-14'))
  })

  it('次の月曜または元々月曜なら同じ日を返す', () => {
    expect(endOfWeek(new Date('2024-01-01'), 2)).toEqual(new Date('2024-01-01'))
    expect(endOfWeek(new Date('2024-01-02'), 2)).toEqual(new Date('2024-01-08'))
    expect(endOfWeek(new Date('2024-01-03'), 2)).toEqual(new Date('2024-01-08'))
    expect(endOfWeek(new Date('2024-01-04'), 2)).toEqual(new Date('2024-01-08'))
    expect(endOfWeek(new Date('2024-01-05'), 2)).toEqual(new Date('2024-01-08'))
    expect(endOfWeek(new Date('2024-01-06'), 2)).toEqual(new Date('2024-01-08'))
    expect(endOfWeek(new Date('2024-01-07'), 2)).toEqual(new Date('2024-01-08'))
    expect(endOfWeek(new Date('2024-01-08'), 2)).toEqual(new Date('2024-01-08'))
    expect(endOfWeek(new Date('2024-01-09'), 2)).toEqual(new Date('2024-01-15'))
    expect(endOfWeek(new Date('2024-01-10'), 2)).toEqual(new Date('2024-01-15'))
  })

  it('次の火曜または元々火曜なら同じ日を返す', () => {
    expect(endOfWeek(new Date('2024-01-01'), 3)).toEqual(new Date('2024-01-02'))
    expect(endOfWeek(new Date('2024-01-02'), 3)).toEqual(new Date('2024-01-02'))
    expect(endOfWeek(new Date('2024-01-03'), 3)).toEqual(new Date('2024-01-09'))
  })

  it('次の水曜または元々水曜なら同じ日を返す', () => {
    expect(endOfWeek(new Date('2024-01-01'), 4)).toEqual(new Date('2024-01-03'))
    expect(endOfWeek(new Date('2024-01-02'), 4)).toEqual(new Date('2024-01-03'))
    expect(endOfWeek(new Date('2024-01-03'), 4)).toEqual(new Date('2024-01-03'))
    expect(endOfWeek(new Date('2024-01-04'), 4)).toEqual(new Date('2024-01-10'))
  })

  it('次の木曜または元々木曜なら同じ日を返す', () => {
    expect(endOfWeek(new Date('2024-01-01'), 5)).toEqual(new Date('2024-01-04'))
    expect(endOfWeek(new Date('2024-01-02'), 5)).toEqual(new Date('2024-01-04'))
    expect(endOfWeek(new Date('2024-01-03'), 5)).toEqual(new Date('2024-01-04'))
    expect(endOfWeek(new Date('2024-01-04'), 5)).toEqual(new Date('2024-01-04'))
    expect(endOfWeek(new Date('2024-01-05'), 5)).toEqual(new Date('2024-01-11'))
  })

  it('次の金曜または元々金曜なら同じ日を返す', () => {
    expect(endOfWeek(new Date('2024-01-01'), 6)).toEqual(new Date('2024-01-05'))
    expect(endOfWeek(new Date('2024-01-04'), 6)).toEqual(new Date('2024-01-05'))
    expect(endOfWeek(new Date('2024-01-05'), 6)).toEqual(new Date('2024-01-05'))
    expect(endOfWeek(new Date('2024-01-06'), 6)).toEqual(new Date('2024-01-12'))
  })
})
