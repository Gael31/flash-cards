let wordDiv = document.getElementById('word');
let index = -1;

chrome.storage.sync.get('data', function(data) {
   
    index = Math.floor(Math.random() * data.data.entries.length);
    wordDiv.innerHTML = JSON.stringify(data.data.entries[index].japanese).replace(/\"/g, '');
});

document.addEventListener('DOMContentLoaded', function() {
    var answer = document.getElementById('answer');

    answer.addEventListener('click', function() {
        chrome.storage.sync.get('data', function(data) {

            wordDiv.innerHTML = JSON.stringify(data.data.entries[index].english).replace(/\"/g, '');
            document.getElementById('answer').hidden = true;
        });
    });
});