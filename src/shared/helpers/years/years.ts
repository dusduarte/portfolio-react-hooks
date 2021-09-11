export function years(date: String): string {
  const diff = Date.now() - new Date(date as string).getTime();
  const ageTime = new Date(diff);
  return String(Math.abs(ageTime.getUTCFullYear() - 1970));
}

export default years;
