function romanNumerals () {
  function getA (num) {
    if (num.left >= 90 && num.left < 100) {
      num.roman += 'XC'
      num.left = num.left - 90
    }
    if (num.left >= 50 && num.left < 100) {
      num.roman += 'L'
      num.left = num.left - 50
    }
    if (num.left === (50 - 10)) {
      num.roman += 'XL'
      num.left = num.left - (50 - 10)
    }
    if (num.left >= 10 && num.left < (50 - 10)) {
      num.roman += 'X'
      num.left = num.left - 10
    }
    if (num.left === (10 - 1)) {
      num.roman += 'IX'
      num.left = num.left - (10 - 1)
    }
    if (num.left >= 5 && num.left < (10 - 1)) {
      num.roman += 'V'
      num.left = num.left - 5
    }
    if (num.left === (5 - 1)) {
      num.roman += 'IV'
      num.left = num.left - (5 - 1)
    }
    if (num.left > 0 && num.left < (5 - 1)) {
      num.roman += 'I'
      num.left--
    }
    console.log(num)

    if (num.left === 0) return num
    else return getA(num)
  }

  /**
   * Arabic to Roman
   */
  this.ator = function (arabic) {
    if (arabic < 1) return 'nulla'

    let num = {initial: arabic, left: arabic, roman: ''}

    return getA(num).roman
    /*

    switch (arabic) {
      case 1: return 'I'
      case 5: return 'V'
      case 10: return 'X'
      case 50: return 'L'
      case 100: return 'C'
      case 500: return 'D'
      case 1000: return 'M'
    }
    return 'nulla' */
  }

  /**
   * Arabic to Roman
   */
  this.rtoa = function (roman) {
    return 5
  }
}

module.exports = romanNumerals
