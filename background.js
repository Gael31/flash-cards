chrome.runtime.onInstalled.addListener(function() {
    const url = chrome.runtime.getURL('data/words.json');

    fetch(url)
    .then((response) => response.json()) //assuming file contains json
    .then((json) => {
        chrome.storage.sync.set({entries: json.entries}, function() {
            console.log('store data.', json.entries);
        });
    });
  });