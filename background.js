chrome.tabs.onUpdated.addListener( function (tabId, changeInfo, tab) {
    localStorage.removeItem("btnScrpit1");
})

