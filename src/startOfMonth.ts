/**
 * 引数の日付の月の初日を返す
 */
export function startOfMonth(date: Date): Date {
  const d = new Date(date)
  d.setDate(1)
  return d
}
