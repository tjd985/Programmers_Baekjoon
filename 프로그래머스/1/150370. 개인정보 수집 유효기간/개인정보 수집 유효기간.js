function solution(today, terms, privacies) {
  const todayDate = new Date(today).getTime();
  const termsObj = {};
  const results = [];
  
  terms.map((term) => {
    const [category, keepMonth] = term.split(" ");

    terms[category] = Number(keepMonth);
  });
  
  privacies.forEach((privacy, index) => {
    const [makeAt, category] = privacy.split(" ");
    const makeDate = new Date(makeAt);
    const destroyDate = makeDate.setMonth(makeDate.getMonth() + terms[category]);
    
    if (todayDate >= destroyDate) {
      results.push(index + 1);
    }
  });
  
  return results;
}