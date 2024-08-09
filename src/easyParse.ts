/**
 * YYYY-MM-DD or YYYY-MM な文字列をローカルタイムの YYYY年MM月DD日00:00:00 のDateに変換
 * 文字列が不適切だったり大きすぎたり小さすぎたりするとエラーを投げる
 */
export function easyParse(str: string): Date {
  const matched = str.match(/^(\-?\d+)-(\d{1,2})(?:-(\d{1,2}))?$/)
  if (!matched) throw new Error('Invalid format: ' + str)
  const year = Number(matched[1])
  const month = Number(matched[2])
  const day = matched[3] ? Number(matched[3]) : 1
  const date = new Date(0, 0)
  date.setFullYear(year, month - 1, day)
  if (isNaN(date.getTime())) throw new Error('Invalid date: ' + str)
  return date
}
