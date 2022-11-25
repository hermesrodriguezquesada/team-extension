chrome.app.runtime.onLaunched.addListener(function(tab){
    chrome.app.executeScript(null,{file:"filters-scripts.js"})
  })

