'use strict';

//General
//Script for Current Focused element any keypress
document.getElementById('current-focused-element-any-keypress').addEventListener('click', activeCurrentFocused);

function activeCurrentFocused(event) {
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.sendMessage(tabs[0].id, {text: "Activar script current-focused" });
  });
}

//Script for
document.getElementById('clone-element').addEventListener('click', activeCloneElement);

function activeCloneElement(event) {
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.sendMessage(tabs[0].id, {text: "Activar script clone-element" });
  });
}

//Script for
document.getElementById('color-contrast-css-props').addEventListener('click', activeColorContrast);

function activeColorContrast(event) {
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.sendMessage(tabs[0].id, {text: "Activar script color-contrast" });
  });
}

//Script for 
document.getElementById('current-state').addEventListener('click', activeCurrentState);

function activeCurrentState(event) {
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.sendMessage(tabs[0].id, {text: "Activar script current-state" });
  });
}

//HTML
//Script for 
document.getElementById('heading-levels').addEventListener('click', activeHeadingLevels);

function activeHeadingLevels(event) {
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.sendMessage(tabs[0].id, {text: "Activar script heading-levels" });
  });
}

//Script for 
document.getElementById('br-finder').addEventListener('click', activeBrFinder);

function activeBrFinder(event) {
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.sendMessage(tabs[0].id, {text: "Activar script br-finder" });
  });
}

//Script for 
document.getElementById('list-listitems').addEventListener('click', activeListListItems);

function activeListListItems(event) {
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.sendMessage(tabs[0].id, {text: "Activar script list-listitems" });
  });
}

//Script for 
document.getElementById('live-regions').addEventListener('click', activeLiveRegions);

function activeLiveRegions(event) {
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.sendMessage(tabs[0].id, {text: "Activar script live-regions" });
  });
}

//Script for 
document.getElementById('page-title').addEventListener('click', activePageTitle);

function activePageTitle(event) {
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.sendMessage(tabs[0].id, {text: "Activar script page-title" });
  });
}

//USBank
//Script-Mio
document.getElementById('btnScrpit1').addEventListener('click', activeScrpit1);

function activeScrpit1(event) {
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.sendMessage(tabs[0].id, {text: "Activar script 1" });
  });
}
//Script for 
document.getElementById('bold-title-slash-separator').addEventListener('click', activeBoldTitle);

function activeBoldTitle(event) {
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.sendMessage(tabs[0].id, {text: "Activar script bold-title-slash-separator" });
  });
}

//UTest
//Script for
document.getElementById('bold-title-column-separator').addEventListener('click', activeBoldTitleColumn);

function activeBoldTitleColumn(event) {
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.sendMessage(tabs[0].id, {text: "Activar script bold-title-column-separator" });
  });
}

//Script for
document.getElementById('BBVA-Scripts').addEventListener('click', activeBbvaScripts);

function activeBbvaScripts(event) {
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.sendMessage(tabs[0].id, {text: "Activar script BBVA-Scripts" });
  });
}

//Script for
document.getElementById('display-unclaimed-tc').addEventListener('click', activeDisplayUnclaimed);

function activeDisplayUnclaimed(event) {
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.sendMessage(tabs[0].id, {text: "Activar script display-unclaimed-tc" });
  });
}

//Script for
document.getElementById('tc-preview-format').addEventListener('click', activeTcPreviewFormat);

function activeTcPreviewFormat(event) {
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.sendMessage(tabs[0].id, {text: "Activar script tc-preview-format" });
  });
}
//Script for
document.getElementById('mark-row-double-click').addEventListener('click', activeMarkRowDobleClick);

function activeMarkRowDobleClick(event) {
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.sendMessage(tabs[0].id, {text: "Activar script mark-row-double-click" });
  });
}

//Script for
document.getElementById('delete-row-alt-click').addEventListener('click', activeDeleteRow);

function activeDeleteRow(event) {
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.sendMessage(tabs[0].id, {text: "Activar script delete-row-alt-click" });
  });
}

//Script for
document.getElementById('starbucks').addEventListener('click', activeStarbucks);

function activeStarbucks(event) {
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.sendMessage(tabs[0].id, {text: "Activar Starbucks" });
  });
}

//Script for
document.getElementById('utest-no-match-only1').addEventListener('click', activeUtestNoMatch);

function activeUtestNoMatch(event) {
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.sendMessage(tabs[0].id, {text: "Activar Utest no match only1" });
  });
}

//Script for
document.getElementById('utest-view-components1').addEventListener('click', activeUtestViewComponents);

function activeUtestViewComponents(event) {
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.sendMessage(tabs[0].id, {text: "Activar Utest view components" });
  });
}
//Script for
document.getElementById('filter-issues-per-slot').addEventListener('click', activeUtestFilterIssuesPerSlot);

function activeUtestFilterIssuesPerSlot(event) {
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.sendMessage(tabs[0].id, {text: "Activar Filter issues per slot" });
  });
}