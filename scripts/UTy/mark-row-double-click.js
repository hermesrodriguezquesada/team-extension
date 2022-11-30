chrome.runtime.onMessage.addListener(
    function(msg, sender, sendResponse) {
      if(msg.text == "Activar script mark-row-double-click") {

        alert("Este no tiene code script aun");

      }
    }
)