/**
 * 最初の曜日のDateオブジェクトを返す
 */
export function startOfWeek(date: Date, startday = 0): Date {
  const d = new Date(date)
  d.setDate(d.getDate() - ((d.getDay() - startday + 7) % 7))
  return d
}
