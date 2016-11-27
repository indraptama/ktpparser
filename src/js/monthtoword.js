// convert number to Month Word
function numToMonth(s) {
var MonthWord = '';
var Month =[
  'Januari',
  'Februari',
  'Maret',
  'April',
  'Mei',
  'Juni',
  'Juli',
  'Agustus',
  'September',
  'Oktober',
  'November',
  'Desember'
  ];
var sNum = parseFloat(s);
var MonthNumber = sNum-1;
var MonthWord = Month[MonthNumber];
return MonthWord;
}

module.exports = numToMonth;
