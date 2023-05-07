export function formatPrice(value: number) {
  if (!value) return value;

  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'MWK',
    maximumFractionDigits: 0,
  });

  return formatter.format(value);
}
