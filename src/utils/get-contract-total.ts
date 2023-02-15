export function getContractTotal(
  price: number,
  initial: number,
  term: number,
  monthlyPay: number
) {
  const res = Math.ceil((price * initial) / 100 + term * monthlyPay);
  return res;
}
