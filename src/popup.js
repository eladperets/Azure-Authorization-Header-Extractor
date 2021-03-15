document.addEventListener('DOMContentLoaded', function () {

  // Store any changes in settings
  document.getElementById('omitBearer').addEventListener('change', function() {
    chrome.storage.local.set({'omitBearer': this.checked})
  });

  chrome.storage.local.get('omitBearer', function(shouldOmitBearer) {
    document.getElementById('omitBearer').checked = shouldOmitBearer.omitBearer;

    chrome.storage.local.get('tokenObj', function(res) {
      var tokenElem = document.getElementById('token');
      var dateElem = document.getElementById('date_acquired');  
      console.log(JSON.stringify(res));
      tokenElem.value = res.tokenObj.token;
      if (shouldOmitBearer.omitBearer) {
        tokenElem.value = tokenElem.value.replace('Bearer ', '');
      }

      dateElem.innerHTML = 'Acquired: ' + res.tokenObj.date;
      document.getElementById('token').focus();
      document.execCommand('SelectAll');
      document.execCommand("Copy", false, null);
    });
  });
});
