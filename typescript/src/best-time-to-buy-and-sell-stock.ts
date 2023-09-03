export function maxProfit(prices: number[]): number {
  let l: number = 0
  let r: number = 0
  // let m:number=Number.MAX_VALUE
  let m: number = 0
  while (r < prices.length) {
    if (prices[r] < prices[l]) l = r
    else m = Math.max(m, prices[r] - prices[l])
    r++
  }
  return m
}
