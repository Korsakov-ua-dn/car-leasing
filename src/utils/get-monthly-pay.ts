export function getMonthlyPay(price: number, initial: number, term: number) {
  const res = Math.ceil(
    ((price - (price * initial) / 100) * (0.05 * Math.pow(1 + 0.05, term))) /
      (Math.pow(1 + 0.05, term) - 1)
  );

  return res;
}
