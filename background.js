chrome.runtime.onInstalled.addListener(function() {
    const url = chrome.runtime.getURL('data/words.json');

    fetch(url)
    .then((response) => response.json()) //assuming file contains json
    .then((json) => {
        chrome.storage.sync.set({data: json}, function() {
            //alert(JSON.stringify(json.entries));
            console.log('store data.', json);
        });
    });
  });