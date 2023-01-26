chrome.runtime.onMessage.addListener(
    function(msg, sender, sendResponse) {
      if(msg.text == "Activar script current-focused") {
        document.addEventListener("keydown",listener);
        // This scripts Logs in console which element has 
        var listener = (event) => {
          setTimeout(() => {
              console.clear()
              console.log("Current Focused Element:")
              console.log(document.activeElement)
              /*event.target.className = document.activeElement.className + " current-focused"*/
          }, 55)
        }
      } else if(msg.text == "Desactivar script current-focused") {
        document.removeEventListener("keydown",listener);
      }
      
    }
)