module.exports = function check(str, bracketsConfig) {
  const stack = []
  const closeBrackets = []
  const bracketsPair = {}
  bracketsConfig.forEach(elem => bracketsPair[elem[1]] = elem[0])
  bracketsConfig.forEach(elem => closeBrackets.push(elem[1]))
  for (let i = 0; i < str.length; i++) {
    let currentSumbol = str[i];
    console.log(currentSumbol)
    if (closeBrackets.includes(currentSumbol)) {
      if (bracketsPair[currentSumbol] !== stack.pop()) return false;
    } else {
      stack.push(currentSumbol);
    }

  }

  return stack.length === 0;
}

// console.log(check('(||)', [['(', ')'], ['|', '|']]));


// module.exports = function check(str, bracketsConfig) {
//   const stack = []
//   const closeBrackets = []
//   const bracketsPair = {}
//   bracketsConfig.forEach(elem => bracketsPair[elem[1]] = elem[0])
//   bracketsConfig.forEach(elem => closeBrackets.push(elem[1]))
//   for (let i = 0; i < str.length; i++) {
//     let currentSumbol = str[i];
//     console.log(currentSumbol)
//     if (closeBrackets.includes(currentSumbol)) {
//       if (bracketsPair[currentSumbol] !== stack.pop()) return false;
//     } else {
//       stack.push(currentSumbol);
//     }

//   }

//   return stack.length === 0;
// }