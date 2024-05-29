function solution(weights) {
    let result = 0;
    const weightList = new Map();
    const ratios = [1, 2 / 3, 1 / 2, 3 / 4];
    
    weights
        .sort((a, b) => a - b)
        .forEach((weight) => {
        ratios.forEach((ratio) => {
            if(weightList.has(weight * ratio)){
                result += weightList.get(weight * ratio);
            }
        });
        weightList.set(weight, (weightList.get(weight) || 0) + 1);
    });
    
    return result;
}