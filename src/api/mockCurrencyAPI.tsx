const data = {
  AUD: 1.4782,
  BGN: 1.833307,
  BRL: 5.286106,
  CAD: 1.355353,
  CHF: 0.923102,
  CNY: 6.964109,
  CZK: 22.693436,
  DKK: 6.975214,
  EUR: 0.937952,
  GBP: 0.829551,
  HKD: 7.794563,
  HRK: 7.067913,
  HUF: 375.002414,
  IDR: 15629.174935,
  ILS: 3.520954,
  INR: 82.835753,
  ISK: 142.480178,
  JPY: 132.945133,
  KRW: 1260.662141,
  MXN: 19.47333,
  MYR: 4.423507,
  NOK: 9.886316,
  NZD: 1.575987,
  PHP: 55.72011,
  PLN: 4.389201,
  RON: 4.642606,
  RUB: 74.000104,
  SEK: 10.458612,
  SGD: 1.343716,
  THB: 34.574559,
  TRY: 18.713403,
  USD: 1,
  ZAR: 16.936442,
};

export async function mockCurrencyAPI() {
  return data;
}

export type Currency = keyof typeof data;

export type Rates = {
  [key in Currency]: number;
};
