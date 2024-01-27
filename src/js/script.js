// // task 1//
const CreateCandidate = function (name, skills) {
  return {
    nameOfCandidate: name,
    skillsOfCandidate: skills
  }
}
const candidate1 = new CreateCandidate('Anna', ['HTML', 'CSS', 'SCSS'])
const candidate2 = new CreateCandidate('Mike', ['HTML', 'CSS', 'SCSS', 'Bootstrap', 'JS', 'React'])
const candidate3 = new CreateCandidate('Bob', ['HTML', 'CSS', 'SCSS', 'Bootstrap'])
console.log(candidate1, candidate2, candidate3)

// task 2//
const AddRequirement = function () {
  const requirementList = ['HTML', 'CSS', 'SCSS', 'Bootstrap', 'JS']
  requirementList.push('React')
  return {
    requirement: requirementList,
    length: requirementList.length
  }
}
const requirementOfCandidate = AddRequirement()
console.log(requirementOfCandidate)

// task 3//
// const conductAnInterview = function (candidate2, requirementOfCandidate) {
//   for (let i = 0; i < requirementOfCandidate.length; i++) {
//     if (candidate2.skillsOfCandidate.includes(requirementOfCandidate[i])) {
//       return true
//     } else return false
//   }
// }

// const conductAnInterview = function (candidate2, requirementOfCandidate) {
//   if (candidate2.skillsOfCandidate.length !== requirementOfCandidate.length) {
//     return false
//   } return true
// }

const conductAnInterview = function (candidate2, requirementOfCandidate) {
  for (let i = 0; i < requirementOfCandidate.length; i++) {
    if (candidate2.skillsOfCandidate[i] !== requirementOfCandidate.requirement[i]) {
      return false
    }
  } return true
}
const resultOfInterview = conductAnInterview(candidate2, requirementOfCandidate)
console.log(resultOfInterview)

// task 4//
const ratingOfCandidates = function () {
  const numbers = []
  for (let i = 0; i <= 100; i++) {
    numbers.push(i)
  } return numbers
}
const rating = ratingOfCandidates()
console.log(rating)
const interviewPlanning = function (requirementOfCandidate, ratingOfCandidates) {
  const candidates = [candidate1, candidate2, candidate3]
  return candidates
}
const result = interviewPlanning(requirementOfCandidate, ratingOfCandidates())
console.log(result)
