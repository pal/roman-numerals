function romanNumerals () {
  var table = [
    {min: 1000, max: 999999, char: 'M'},
    {min: 900, max: 999, char: 'CM'},
    {min: 500, max: 899, char: 'D'},
    {min: 400, max: 499, char: 'CD'},
    {min: 100, max: 399, char: 'C'},
    {min: 90, max: 99, char: 'XC'},
    {min: 50, max: 89, char: 'L'},
    {min: 40, max: 49, char: 'XL'},
    {min: 10, max: 39, char: 'X'},
    {min: 9, max: 9, char: 'IX'},
    {min: 5, max: 8, char: 'V'},
    {min: 4, max: 4, char: 'IV'},
    {min: 1, max: 3, char: 'I'}
  ]

  /**
   * Arabic to Roman
   */
  this.ator = function (arabic) {
    if (arabic < 1) return 'nulla'
    let num = {initial: arabic, left: arabic, roman: '', calls: 0}
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
    return 5
  }
}

module.exports = romanNumerals
