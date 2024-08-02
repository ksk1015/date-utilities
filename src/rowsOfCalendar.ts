/**
 * その月のカレンダーの行数を返す
 */
export function rowsOfCalendar(date: Date, startday = 0): number {
  const d = new Date(date)
  d.setDate(1)
  const start = 1 - ((d.getDay() - startday + 7) % 7)
  d.setMonth(d.getMonth() + 1, 0)
  const end = d.getDate() - ((d.getDay() - startday + 7) % 7)
  return (end - start) / 7 + 1
}
