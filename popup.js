'use strict';

document.getElementById('btnScrpit1').addEventListener('click', activeScrpit1);

function activeScrpit1(event) {
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.sendMessage(tabs[0].id, {text: "Activar script 1" });
  });
}
