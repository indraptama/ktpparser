var numToWord = require('./numtoword.js');
var monthToWord = require('./monthtoword.js');

function dateToWord (day,month,year) {
  var dayWord = numToWord(day);
  var monthWord = monthToWord(month);
  var yearWord = numToWord(year);

  var dateToWord = dayWord + " " + monthWord + " " + yearWord;

  return dateToWord;
}

module.exports = dateToWord;
