const usedNumbers = []
const randomNumber = function () {
  const randomNumResult = Math.floor(Math.random() * 100)
  if (!usedNumbers.includes(randomNumResult)) {
    usedNumbers.push(randomNumResult)
    return randomNumResult
  }
  return randomNumber()
}

for (let i = 0; i <= 99; i += 1) {
  console.log(randomNumber())
}
