/**
 * 同じ年月日かどうか
 */
export function isSameDate(a: Date, b: Date): boolean {
  return (
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate()
  )
}

/**
 * 同じ年月かどうか
 */
export function isSameMonth(a: Date, b: Date): boolean {
  return a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth()
}

/**
 * 同じ年かどうか
 */
export function isSameYear(a: Date, b: Date): boolean {
  return a.getFullYear() === b.getFullYear()
}
