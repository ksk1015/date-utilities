/**
 * YYYY-MM-DD or YYYY-MM の文字列をローカルタイムの YYYY年MM月DD日00:00:00 のDateに変換する
 */
export function easyParse(str: string): Date {
  const [year, month, day] = str.split('-').map(Number)
  return new Date(year, month - 1, day ?? 1)
}
