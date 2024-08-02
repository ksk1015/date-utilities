/**
 * 週の最後の曜日のDateオブジェクトを返す
 * @description startDayが0の場合は次の土曜日、1の場合は次の日曜日、2の場合は次の月曜日
 */
export function endOfWeek(date: Date, startDay = 0): Date {
  const d = new Date(date)
  d.setDate(d.getDate() + 6 - ((d.getDay() - startDay + 7) % 7))
  return d
}
