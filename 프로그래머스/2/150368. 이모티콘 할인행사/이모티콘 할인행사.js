function calculatePrice(price, sale) {
  return price * (100 - sale) / 100;
}

function getPriceResult(result) {
  return result.reduce((acc, cur) => {
    const [_, userMaximum, userCost = 0] = cur;
    const [plus, sum] = acc;

    if (userCost >= userMaximum) {
      return [plus + 1, sum];
    }

    return [plus, sum + userCost];
  }, [0, 0]);
}

function solution(users, emoticons) {
  const priceCacheMap = {};
  const SALE_PERCENT_LIST = [10, 20, 30, 40];
  let plusCount = 0;
  let priceSum = 0;

  function dfs(users, depth) {
    if (depth === emoticons.length) {
      const [plus, sum] = getPriceResult(users);
      
      if (plus > plusCount || (plus === plusCount && sum > priceSum)) {
        plusCount = plus;
        priceSum = sum;
      }

      return;
    }

    for (const salePercent of SALE_PERCENT_LIST) {
      const emoticon = emoticons[depth];
      let salePrice = priceCacheMap[`${emoticon}-${salePercent}`];

      if (!salePrice) {
        salePrice = calculatePrice(emoticon, salePercent);

        priceCacheMap[`${emoticon}-${salePercent}`] = salePrice;
      }

      const result = users.map(([ratio, maximum, spend = 0]) => {
        return [
          ratio,
          maximum,
          salePercent >= ratio ? spend + salePrice : spend,
        ]
      });
      
      dfs(result, depth + 1);
    }
  }
  
  dfs(users, 0);

  return [plusCount, priceSum];
}