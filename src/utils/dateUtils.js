export function parseDateString(dateString) {
  return new Date(`${dateString}T00:00:00+09:00`);
}

export function getTodayKST() {
  const now = new Date();
  const KST_OFFSET = 9 * 60 * 60 * 1000;
  const kstTime = new Date(now.getTime() + KST_OFFSET);

  const year = kstTime.getUTCFullYear();
  const month = kstTime.getUTCMonth();
  const day = kstTime.getUTCDate();

  return new Date(Date.UTC(year, month, day));
}

export function formatDateToString(dateObject) {
  const KST_OFFSET = 9 * 60 * 60 * 1000;
  const kstTime = new Date(dateObject.getTime() + KST_OFFSET);

  const year = kstTime.getUTCFullYear();
  const month = String(kstTime.getUTCMonth() + 1).padStart(2, "0");
  const day = String(kstTime.getUTCDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
}
