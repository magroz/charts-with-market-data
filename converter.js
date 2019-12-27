
// const dataFromAPItest =
//   {
//     "Meta Data": {
//       "1. Information": "Intraday (5min) open, high, low, close prices and volume",
//       "2. Symbol": "MSFT",
//       "3. Last Refreshed": "2019-12-24 13:05:00",
//       "4. Interval": "5min",
//       "5. Output Size": "Compact",
//       "6. Time Zone": "US/Eastern"
//     },
//     "Time Series (5min)": {
//       "2019-12-24 13:05:00": {
//         "1. open": "157.3900",
//         "2. high": "157.5500",
//         "3. low": "157.3800",
//         "4. close": "157.5500",
//         "5. volume": "0"
//       },
//       "2019-12-24 13:00:00": {
//         "1. open": "157.3000",
//         "2. high": "157.4000",
//         "3. low": "157.2400",
//         "4. close": "157.3800",
//         "5. volume": "293961"
//       },
//     }
//   };
// const objForChartSample = {
//   t: '2019-12-24',
//   o: '151.8100',
//   h: '158.4900',
//   l: '146.6500',
//   c: '157.3800',
//   v: '384972765',
// };

const convertMarketData = (dataFromApi) => {
  const keyDataObjects = Object.keys(dataFromApi)[1];
  const quotesApi = dataFromApi[keyDataObjects];
  const quotesResult = [];
  for (let key in quotesApi) {
    const quotesOnePeriod = {
      t: Date.parse(key),
      o: quotesApi[key][Object.keys(quotesApi[key])[0]],
      h: quotesApi[key][Object.keys(quotesApi[key])[1]],
      l: quotesApi[key][Object.keys(quotesApi[key])[2]],
      c: quotesApi[key][Object.keys(quotesApi[key])[3]],
    };
    quotesResult.push(quotesOnePeriod);
  }

  return quotesResult;
};

