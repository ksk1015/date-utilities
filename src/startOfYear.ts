export function startOfYear(date: Date): Date {
  const d = new Date(date)
  d.setMonth(0, 1)
  return d
}
