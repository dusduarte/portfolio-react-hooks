export function years(beginDate: string): string {
  const diff = Date.now() - new Date(beginDate as string).getTime();
  const ageTime = new Date(diff);
  return String(Math.abs(ageTime.getUTCFullYear() - 1970));
}

export default years;
