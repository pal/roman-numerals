var RomanNumerals = require('./romanNumerals')

var roman = new RomanNumerals()

function ator (a, r) {
  let romNum = roman.ator(a)
  if (r !== romNum) throw new Error('Expected ' + r + ' from ' + a + ' but got ' + romNum)
}

ator(5, 'V')
// ator(4, 'IV')
