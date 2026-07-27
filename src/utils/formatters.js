export function formatCurrencyValue(value) {
  const amount = Number(value || 0);

  if (!Number.isFinite(amount)) {
    return "₦0";
  }

  if (amount >= 1_000_000_000) {
    return `₦${(amount / 1_000_000_000).toFixed(2).replace(/\.0+$/, "")}B`;
  }

  if (amount >= 1_000_000) {
    return `₦${(amount / 1_000_000).toFixed(1).replace(/\.0+$/, "")}M`;
  }

  if (amount >= 1_000) {
    return `₦${(amount / 1_000).toFixed(1).replace(/\.0+$/, "")}K`;
  }

  return `₦${amount.toLocaleString()}`;
}

export function formatCompactNumber(value) {
  const amount = Number(value || 0);

  if (!Number.isFinite(amount)) {
    return "0";
  }

  if (amount >= 1_000_000_000) {
    return `${(amount / 1_000_000_000).toFixed(2).replace(/\.0+$/, "")}B`;
  }

  if (amount >= 1_000_000) {
    return `${(amount / 1_000_000).toFixed(1).replace(/\.0+$/, "")}M`;
  }

  if (amount >= 1_000) {
    return `${(amount / 1_000).toFixed(1).replace(/\.0+$/, "")}K`;
  }

  return amount.toLocaleString();
}
