chrome.runtime.onMessage.addListener(
    function(msg, sender, sendResponse) {
      if(msg.text == "Activar script delete-row-alt-click") {
        document.addEventListener('click', function(event) {
          if (event.altKey && event.target.tagName === 'TD') {
            event.target.parentNode.style.display = 'none';
          }
        }, false);
      }
    }
)
