function solution(friends, gifts) {
  const giftInformation = {};
  let result = 0;
  
  friends.forEach((friend) => {
    giftInformation[friend] = {
        giftPoint: 0,
      };
  })
  
  gifts.forEach((gift) => {
    const [from, to] = gift.split(" ");
    
    const givenGift = giftInformation[from][to];
    const recivenGift = giftInformation[to][from];
    
    giftInformation[from][to] = givenGift === undefined ? 1 : givenGift + 1;
    giftInformation[to][from] = recivenGift === undefined ? -1 : recivenGift - 1;
    
    giftInformation[from].giftPoint++;
    giftInformation[to].giftPoint--;
  });
  
  friends.forEach((from) => {
    let gifts = 0;
    
    for (const to of friends) {
      if (from === to) {
        continue;
      }
      
      const fromGiftPoint = giftInformation[from].giftPoint;
      const toGiftPoint = giftInformation[to].giftPoint;
      const givenGift = giftInformation[from][to];
      const recivenGift = giftInformation[to][from];
      
      if (giftInformation[from][to] > 0) {
        gifts++;
        
        continue;
      }
      
      if (!giftInformation[from][to] || givenGift === recivenGift) {
        if (fromGiftPoint > toGiftPoint) {
          gifts++;
        }
      }
    }
    
    if (gifts > result) {
      result = gifts;
    }
  });
  
  return result;
}