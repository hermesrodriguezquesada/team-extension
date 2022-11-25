chrome.runtime.onMessage.addListener(
    function(msg, sender, sendResponse) {
      if(msg.text == "Decir hola") {

        alert("HOLA")

      }

    }

)