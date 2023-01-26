chrome.runtime.onMessage.addListener(
    function(msg, sender, sendResponse) {
      if(msg.text == "Activar script mark-row-double-click") {
        document.addEventListener('dblclick',(ev)=>{
          console.log(ev.target)
          ev.target.parentElement.style.background = "#bddfff";
      })
      }
    }
)