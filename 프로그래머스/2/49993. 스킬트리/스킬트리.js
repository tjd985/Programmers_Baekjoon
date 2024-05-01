function solution(skill, skill_trees) {
  let result = 0;
  const skillObject = {};
  
  for (const eachSkill of skill) {
    skillObject[eachSkill] = true;
  }
  
  for (const skillTree of skill_trees) {
    let skillIndex = 0;

    for (let i = 0; i < skillTree.length; i++) {
      const eachSkill = skillTree[i];
        
      if (skillIndex === skill.length) {
        result++;
          
        break;
      }

      if (skillObject[eachSkill]) {
        if (skill[skillIndex] !== eachSkill) {
            break;
        }
        
        skillIndex++;
          
        if (i === skillTree.length - 1) {
          result++;
            
          break;
        }
      }
        
      if (i === skillTree.length - 1) {
          result++;
      }
    }
  }
  
  return result;
}