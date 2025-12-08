export function formatDate(date: Date | string | undefined) {
  if (!date) return "Present";

  const d = typeof date === "string" ? new Date(date) : date;

  if (isNaN(d.getTime())) return "Present";

  return d.toLocaleDateString("en-US", {
    month: "short",
    year: "numeric",
  });
}
