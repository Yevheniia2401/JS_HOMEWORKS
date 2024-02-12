// // task 1//

const CreateCandidate = (name, skills = []) => ({
  name,
  skills,
});

const candidate1 = new CreateCandidate('Anna', ['HTML', 'CSS', 'SCSS']);
const candidate2 = new CreateCandidate('Mike', ['HTML', 'CSS', 'SCSS', 'Bootstrap', 'JS', 'React']);
const candidate3 = new CreateCandidate('Bob', ['HTML', 'CSS', 'SCSS', 'Bootstrap']);
console.log(candidate1, candidate2, candidate3);
// task 2//
const AddRequirement = () => {
  const requirementList = ['HTML', 'CSS', 'SCSS', 'Bootstrap', 'JS'];
  requirementList.push('React');
  return {
    requirementList,
  };
};
const requirementsOfCandidate = AddRequirement();

// task 3//
const conductAnInterview = (candidate, requirement) => {
  let result = 100;

  for (let r = 0; r < requirement.length; r += 1) {
    let skillFound = false;
    for (let i = 0; i < candidate.skills.length; i += 1) {
      if (requirement[r] === candidate.skills[i]) {
        skillFound = true;
        break;
      }
    }
    if (!skillFound) {
      result = 0;
    }
  }
  return result;
};

const resultOfInterview = conductAnInterview(candidate1, requirementsOfCandidate);
console.log(resultOfInterview);

// task 4//

const planInterviews = (candidates, req, scoreFunc) => {
  const result = [];
  for (let i = 0; i < candidates.length; i += 1) {
    result.push({
      score: scoreFunc(candidates[i], req),
      candidate: candidates[i],
    });
  }
  return result;
};
const candidates = [candidate1, candidate2, candidate3];
console.log(planInterviews(candidates, requirementsOfCandidate, conductAnInterview));
