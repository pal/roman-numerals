var RomanNumerals = require('./romanNumerals')

var roman = new RomanNumerals()

let counter = 0
function ator (a, r) {
  counter++
  let romNum = roman.ator(a)
  if (r !== romNum) throw new Error('Expected ' + r + ' from ' + a + ' but got ' + romNum)
}

ator(-1, 'nulla')
ator(0, 'nulla')
ator(1, 'I')
ator(2, 'II')
ator(3, 'III')
ator(4, 'IV')
ator(5, 'V')
ator(6, 'VI')
ator(7, 'VII')
ator(8, 'VIII')
ator(9, 'IX')
ator(10, 'X')
ator(11, 'XI')

// Base cases
ator(10, 'X')
ator(15, 'XV')
ator(20, 'XX')
ator(22, 'XXII')
ator(27, 'XXVII')
ator(30, 'XXX')
ator(40, 'XL')
ator(50, 'L')
ator(60, 'LX')
ator(76, 'LXXVI')
ator(84, 'LXXXIV')
ator(89, 'LXXXIX')
ator(90, 'XC')
ator(95, 'XCV')
ator(99, 'XCIX')

/*
ator(100, 'C')
ator(500, 'D')
ator(1000, 'M')
*/

console.log('Good job! ' + counter + ' tests ran successfully!')
