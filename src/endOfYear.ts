export function endOfYear(date: Date): Date {
  const d = new Date(date)
  d.setMonth(11, 31)
  return d
}
