function romanNumerals () {
  var table = [
    {min: 900, max: 999, char: 'CM'},
    {min: 1000, max: 999999, char: 'M'},
    {min: 400, max: 499, char: 'CD'},
    {min: 500, max: 899, char: 'D'},
    {min: 90, max: 99, char: 'XC'},
    {min: 100, max: 399, char: 'C'},
    {min: 40, max: 49, char: 'XL'},
    {min: 50, max: 89, char: 'L'},
    {min: 9, max: 9, char: 'IX'},
    {min: 10, max: 39, char: 'X'},
    {min: 4, max: 4, char: 'IV'},
    {min: 5, max: 8, char: 'V'},
    {min: 1, max: 3, char: 'I'}
  ]

  /**
   * Arabic to Roman
   */
  this.ator = function (arabic) {
    if (arabic < 1) return 'nulla'
    let num = {initial: arabic, left: arabic, roman: ''}
    while (num.left > 0) {
      for (var i = 0; i < table.length; i++) {
        if (num.left >= table[i].min && num.left <= table[i].max) {
          num.roman += table[i].char
          num.left = num.left - table[i].min
        }
      }
    }
    return num.roman
  }

  /**
   * Arabic to Roman
   */
  this.rtoa = function (roman) {
    if (roman === 'nulla') return 0
    let num = {initial: roman, left: roman, arabic: 0}

    while (num.left.length > 0) {
      for (var i = 0; i < table.length; i++) {
        if (num.left.match(table[i].char)) {
          num.arabic += table[i].min
          num.left = num.left.replace(table[i].char, '')
        }
      }
    }
    return num.arabic
  }
}

module.exports = romanNumerals
