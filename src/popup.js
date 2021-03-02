document.addEventListener('DOMContentLoaded', function () {
  var tokenElem = document.getElementById('token');
  var dateElem = document.getElementById('date_aquired');

  chrome.storage.local.get('tokenObj', function(res) {
    console.log(JSON.stringify(res));
    tokenElem.value = res.tokenObj.token;
    dateElem.innerHTML = 'Acquired: ' + res.tokenObj.date;
    copyToken();
  });

  var copyElem = document.getElementById('copy');
  copyElem.addEventListener('click', copyToken);

  function copyToken() {
    tokenElem.focus();
    document.execCommand('SelectAll');
    document.execCommand("Copy", false, null);
  }
});
