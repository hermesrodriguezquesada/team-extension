chrome.runtime.onMessage.addListener(
    function(msg, sender, sendResponse) {
      if(msg.text == "Activar script tc-preview-format") {
        // Ensure the preview dialog is displayed before running the script
        const info = document.getElementsByClassName('details')
        info[0].style.setProperty('white-space','break-spaces','important')
      }
    }
)
