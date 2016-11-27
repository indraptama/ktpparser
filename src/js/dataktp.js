function dataKTP(formId) {
  var formContainer = document.querySelector(formId);
  var forms = formContainer.querySelectorAll('input, select, textarea');
  var obj = {};
  for (var i = 0; i < forms.length; i++) {
    var form = forms[i];
    var name = form.name;
    var value = form.value;
    if (name) {
      obj[name] = value;
    }
  }
  var dataKTP = JSON.stringify(obj)
  return dataKTP;
};

module.exports = dataKTP;
