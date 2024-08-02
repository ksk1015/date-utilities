/**
 * 年月日のみの簡単な日付フォーマット
 * @param date
 * @example easyFormat(new Date('2021-01-01'), 'YYYY YY MM M DD D') // => '2021 21 01 1 01 1'
 */
export function easyFormat(date: Date, format: string): string {
  const YYYY = `${date.getFullYear()}`.padStart(4, '0')
  const YY = YYYY.slice(-2)
  const M = `${date.getMonth() + 1}`
  const MM = M.padStart(2, '0')
  const D = `${date.getDate()}`
  const DD = D.padStart(2, '0')
  return format
    .replace(/YYYY/g, YYYY)
    .replace(/YY/g, YY)
    .replace(/MM/g, MM)
    .replace(/M/g, M)
    .replace(/DD/g, DD)
    .replace(/D/g, D)
}
