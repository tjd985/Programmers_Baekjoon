function calculatePrice(price, sale) {
    return price * (100 - sale) / 100;
}



function solution(users, emoticons) {
    const priceCacheMap = {};
    const SALE_PERCENT_LIST = [10, 20, 30, 40];
    let plusCount = 0;
    let priceSum = 0;
    
    function dfs(users, depth, salePercent) {
        const emoticon = emoticons[depth];
        let salePrice = priceCacheMap[`${emoticon-salePercent}`];
        
        if (!salePrice) {
            salePrice = calculatePrice(emoticon, salePercent);
            
            priceCacheMap[`${emoticon-salePercent}`] = salePrice;
        }
        
        const result = users.map((user) => {
            const currentUser = [...user];
            
            if (salePercent >= currentUser[0]) {
                currentUser[2] = (currentUser[2] ?? 0) + salePrice;
            }
            
            return currentUser;
        });
      
        if (depth === emoticons.length - 1) {
              const [plus, sum] = result.reduce((acc, cur) => {
                  const [_, userMaximum, userCost = 0] = cur;
                  const [plus, sum] = acc;

                  if (userCost >= userMaximum) {
                      return [plus + 1, sum];
                  }

                  return [plus, sum + userCost];
              }, [0, 0]);

              if (plus > plusCount) {
                  plusCount = plus;
                  priceSum = sum;

                  return;
              }

              if (plus === plusCount) {
                  priceSum = Math.max(priceSum, sum);
              }

            return;
          }
        
        
        for (const sale of SALE_PERCENT_LIST) {
            dfs(result, depth + 1, sale);
        }
    }
    
    for (const sale of SALE_PERCENT_LIST) {
        dfs(users, 0, sale);
    }
    
    return [plusCount, priceSum];
}