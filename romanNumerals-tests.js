var RomanNumerals = require('./romanNumerals')

var roman = new RomanNumerals()

let counter = 0
function ator (a, r) {
  counter++
  let romNum = roman.ator(a)
  if (r !== romNum) throw new Error('Expected ' + r + ' from ' + a + ' but got ' + romNum)
}

ator(0, 'nulla')
ator(1, 'I')
ator(5, 'V')
ator(10, 'X')
ator(50, 'L')
ator(100, 'C')
ator(500, 'D')
ator(1000, 'M')

console.log('Good job! ' + counter + ' tests ran successfully!')
