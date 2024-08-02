import { describe, it, expect } from 'vitest'
import { startOfWeek } from './startOfWeek'

describe('startOfWeek', () => {
  it('前の日曜の日または元々日曜なら同じ日を返す', () => {
    expect(startOfWeek(new Date('2024-01-01'))).toEqual(new Date('2023-12-31'))
    expect(startOfWeek(new Date('2024-01-02'))).toEqual(new Date('2023-12-31'))
    expect(startOfWeek(new Date('2024-01-03'))).toEqual(new Date('2023-12-31'))
    expect(startOfWeek(new Date('2024-01-04'))).toEqual(new Date('2023-12-31'))
    expect(startOfWeek(new Date('2024-01-05'))).toEqual(new Date('2023-12-31'))
    expect(startOfWeek(new Date('2024-01-06'))).toEqual(new Date('2023-12-31'))
    expect(startOfWeek(new Date('2024-01-07'))).toEqual(new Date('2024-01-07'))
    expect(startOfWeek(new Date('2024-01-08'))).toEqual(new Date('2024-01-07'))
  })

  it('前の月曜の日または元々月曜なら同じ日を返す', () => {
    expect(startOfWeek(new Date('2024-01-01'), 1)).toEqual(
      new Date('2024-01-01')
    )
    expect(startOfWeek(new Date('2024-01-02'), 1)).toEqual(
      new Date('2024-01-01')
    )
    expect(startOfWeek(new Date('2024-01-03'), 1)).toEqual(
      new Date('2024-01-01')
    )
    expect(startOfWeek(new Date('2024-01-04'), 1)).toEqual(
      new Date('2024-01-01')
    )
    expect(startOfWeek(new Date('2024-01-05'), 1)).toEqual(
      new Date('2024-01-01')
    )
    expect(startOfWeek(new Date('2024-01-06'), 1)).toEqual(
      new Date('2024-01-01')
    )
    expect(startOfWeek(new Date('2024-01-07'), 1)).toEqual(
      new Date('2024-01-01')
    )
  })

  it('前の火曜の日または元々火曜なら同じ日を返す', () => {
    expect(startOfWeek(new Date('2024-01-01'), 2)).toEqual(
      new Date('2023-12-26')
    )
    expect(startOfWeek(new Date('2024-01-02'), 2)).toEqual(
      new Date('2024-01-02')
    )
    expect(startOfWeek(new Date('2024-01-03'), 2)).toEqual(
      new Date('2024-01-02')
    )
    expect(startOfWeek(new Date('2024-01-04'), 2)).toEqual(
      new Date('2024-01-02')
    )
    expect(startOfWeek(new Date('2024-01-05'), 2)).toEqual(
      new Date('2024-01-02')
    )
    expect(startOfWeek(new Date('2024-01-06'), 2)).toEqual(
      new Date('2024-01-02')
    )
    expect(startOfWeek(new Date('2024-01-07'), 2)).toEqual(
      new Date('2024-01-02')
    )
    expect(startOfWeek(new Date('2024-01-08'), 2)).toEqual(
      new Date('2024-01-02')
    )
    expect(startOfWeek(new Date('2024-01-09'), 2)).toEqual(
      new Date('2024-01-09')
    )
    expect(startOfWeek(new Date('2024-01-10'), 2)).toEqual(
      new Date('2024-01-09')
    )
  })

  it('前の水曜の日または元々水曜なら同じ日を返す', () => {
    expect(startOfWeek(new Date('2024-01-01'), 3)).toEqual(
      new Date('2023-12-27')
    )
    expect(startOfWeek(new Date('2024-01-02'), 3)).toEqual(
      new Date('2023-12-27')
    )
    expect(startOfWeek(new Date('2024-01-03'), 3)).toEqual(
      new Date('2024-01-03')
    )
    expect(startOfWeek(new Date('2024-01-04'), 3)).toEqual(
      new Date('2024-01-03')
    )
    expect(startOfWeek(new Date('2024-01-05'), 3)).toEqual(
      new Date('2024-01-03')
    )
    expect(startOfWeek(new Date('2024-01-06'), 3)).toEqual(
      new Date('2024-01-03')
    )
    expect(startOfWeek(new Date('2024-01-07'), 3)).toEqual(
      new Date('2024-01-03')
    )
    expect(startOfWeek(new Date('2024-01-08'), 3)).toEqual(
      new Date('2024-01-03')
    )
    expect(startOfWeek(new Date('2024-01-09'), 3)).toEqual(
      new Date('2024-01-03')
    )
    expect(startOfWeek(new Date('2024-01-10'), 3)).toEqual(
      new Date('2024-01-10')
    )
    expect(startOfWeek(new Date('2024-01-11'), 3)).toEqual(
      new Date('2024-01-10')
    )
  })

  it('前の木曜の日または元々木曜なら同じ日を返す', () => {
    expect(startOfWeek(new Date('2024-01-01'), 4)).toEqual(
      new Date('2023-12-28')
    )
    expect(startOfWeek(new Date('2024-01-02'), 4)).toEqual(
      new Date('2023-12-28')
    )
    expect(startOfWeek(new Date('2024-01-03'), 4)).toEqual(
      new Date('2023-12-28')
    )
    expect(startOfWeek(new Date('2024-01-04'), 4)).toEqual(
      new Date('2024-01-04')
    )
    expect(startOfWeek(new Date('2024-01-05'), 4)).toEqual(
      new Date('2024-01-04')
    )
    expect(startOfWeek(new Date('2024-01-06'), 4)).toEqual(
      new Date('2024-01-04')
    )
    expect(startOfWeek(new Date('2024-01-07'), 4)).toEqual(
      new Date('2024-01-04')
    )
    expect(startOfWeek(new Date('2024-01-08'), 4)).toEqual(
      new Date('2024-01-04')
    )
    expect(startOfWeek(new Date('2024-01-09'), 4)).toEqual(
      new Date('2024-01-04')
    )
    expect(startOfWeek(new Date('2024-01-10'), 4)).toEqual(
      new Date('2024-01-04')
    )
    expect(startOfWeek(new Date('2024-01-11'), 4)).toEqual(
      new Date('2024-01-11')
    )
    expect(startOfWeek(new Date('2024-01-12'), 4)).toEqual(
      new Date('2024-01-11')
    )
  })

  it('前の金曜の日または元々金曜なら同じ日を返す', () => {
    expect(startOfWeek(new Date('2024-01-01'), 5)).toEqual(
      new Date('2023-12-29')
    )
    expect(startOfWeek(new Date('2024-01-02'), 5)).toEqual(
      new Date('2023-12-29')
    )
    expect(startOfWeek(new Date('2024-01-03'), 5)).toEqual(
      new Date('2023-12-29')
    )
    expect(startOfWeek(new Date('2024-01-04'), 5)).toEqual(
      new Date('2023-12-29')
    )
    expect(startOfWeek(new Date('2024-01-05'), 5)).toEqual(
      new Date('2024-01-05')
    )
    expect(startOfWeek(new Date('2024-01-06'), 5)).toEqual(
      new Date('2024-01-05')
    )
    expect(startOfWeek(new Date('2024-01-07'), 5)).toEqual(
      new Date('2024-01-05')
    )
    expect(startOfWeek(new Date('2024-01-08'), 5)).toEqual(
      new Date('2024-01-05')
    )
    expect(startOfWeek(new Date('2024-01-09'), 5)).toEqual(
      new Date('2024-01-05')
    )
    expect(startOfWeek(new Date('2024-01-10'), 5)).toEqual(
      new Date('2024-01-05')
    )
    expect(startOfWeek(new Date('2024-01-11'), 5)).toEqual(
      new Date('2024-01-05')
    )
    expect(startOfWeek(new Date('2024-01-12'), 5)).toEqual(
      new Date('2024-01-12')
    )
    expect(startOfWeek(new Date('2024-01-13'), 5)).toEqual(
      new Date('2024-01-12')
    )
  })

  it('前の土曜の日または元々土曜なら同じ日を返す', () => {
    expect(startOfWeek(new Date('2024-01-01'), 6)).toEqual(
      new Date('2023-12-30')
    )
    expect(startOfWeek(new Date('2024-01-02'), 6)).toEqual(
      new Date('2023-12-30')
    )
    expect(startOfWeek(new Date('2024-01-03'), 6)).toEqual(
      new Date('2023-12-30')
    )
    expect(startOfWeek(new Date('2024-01-04'), 6)).toEqual(
      new Date('2023-12-30')
    )
    expect(startOfWeek(new Date('2024-01-05'), 6)).toEqual(
      new Date('2023-12-30')
    )
    expect(startOfWeek(new Date('2024-01-06'), 6)).toEqual(
      new Date('2024-01-06')
    )
    expect(startOfWeek(new Date('2024-01-07'), 6)).toEqual(
      new Date('2024-01-06')
    )
    expect(startOfWeek(new Date('2024-01-08'), 6)).toEqual(
      new Date('2024-01-06')
    )
    expect(startOfWeek(new Date('2024-01-09'), 6)).toEqual(
      new Date('2024-01-06')
    )
    expect(startOfWeek(new Date('2024-01-10'), 6)).toEqual(
      new Date('2024-01-06')
    )
    expect(startOfWeek(new Date('2024-01-11'), 6)).toEqual(
      new Date('2024-01-06')
    )
    expect(startOfWeek(new Date('2024-01-12'), 6)).toEqual(
      new Date('2024-01-06')
    )
    expect(startOfWeek(new Date('2024-01-13'), 6)).toEqual(
      new Date('2024-01-13')
    )
    expect(startOfWeek(new Date('2024-01-14'), 6)).toEqual(
      new Date('2024-01-13')
    )
  })
})
