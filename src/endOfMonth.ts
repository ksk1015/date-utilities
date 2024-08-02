/**
 * 月末のdateオブジェクトを返す
 */
export function endOfMonth(date: Date): Date {
  const d = new Date(date)
  d.setMonth(d.getMonth() + 1, 0)
  return d
}
