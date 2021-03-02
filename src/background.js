
chrome.webRequest.onSendHeaders.addListener(
  function (info) {
    if (info.requestHeaders) {
      for(var i = 0; i < info.requestHeaders.length; i++) {
        if(info.requestHeaders[i].name == 'Authorization' || info.requestHeaders[i].name == 'authorization') {
          console.log(info.requestHeaders[i].value);
          chrome.storage.local.set({ 'tokenObj': { 'token': info.requestHeaders[i].value, 'date': new Date().toLocaleTimeString() } });
          break;
        }
      }      
    }
  },
  // filters
  {
    urls: [
      "https://*.portal.azure.com/*",
      "https://management.azure.com/*"
    ]
  },
  ["requestHeaders"]);
