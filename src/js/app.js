var Cleave = require('cleave.js');
var dataKTP = require('./dataktp.js');
var dateToWord = require('./datetoword.js');
var getNameTitle = require('./getnametitle.js');
var formReset = require('./resetform.js');
var axios = require('axios');


var noKTPInput = new Cleave ('.js-noKTPInput', {
    numericOnly: true,
    numeral: true,
    delimiter: ''
});

function KTPParser() {
  var resultContainer = document.querySelector('#ktpresult');
  var KTPInput = JSON.parse(dataKTP('#penghadap'));

  var birthDateWord = dateToWord(
      KTPInput.birthdate,
      KTPInput.birthmonth,
      KTPInput.birthyear
    );

  var titleName = getNameTitle(
    KTPInput.martialstatus,
    KTPInput.gender
  );

  var Name = KTPInput.name.toUpperCase();

  var Komparisi = "";

  axios.get('komparisi.json')
    .then(function(res){
      var dataServer = res.data.default; // string
      var textKomparisi = dataServer
        .replace(/{!nik}/i, KTPInput.nik)
        .replace(/{!name}/i, Name)
        .replace(/{!birthplace}/i, KTPInput.birthplace)
        .replace(/{!birthdate}/i, KTPInput.birthdate)
        .replace(/{!birthmonth}/i, KTPInput.birthmonth)
        .replace(/{!birthyear}/i, KTPInput.birthyear)
        .replace(/{!street}/i, KTPInput.street)
        .replace(/{!rt}/i, KTPInput.rt)
        .replace(/{!rw}/i, KTPInput.rw)
        .replace(/{!kelurahan}/i, KTPInput.kelurahan)
        .replace(/{!kecamatan}/i, KTPInput.kecamatan)
        .replace(/{!city}/i, KTPInput.city)
        .replace(/{!job}/i, KTPInput.job)
        // -- after function
        .replace(/{!title}/i, titleName)
        .replace(/{!birthinwords}/i, birthDateWord);

      //return(textKomparisi);
      resultContainer.innerHTML = textKomparisi;
      console.log(Komparisi);
    })
    .catch(function(err){
      console.log(err);
    })

};






function getResult(){
  var ButtonResult = document.querySelector('#generateButton');
  var ButtonReset = document.querySelector('#buttonReset');
  ButtonResult.addEventListener('click', function(ev) {
    ev.preventDefault();
    KTPParser();
  }, false);
  ButtonReset.addEventListener('click', function(ev) {
    ev.preventDefault();
    formReset('#penghadap');
  }, false);

}

getResult();



// console.log(KTPResult);


// var Datas = getData('default');
