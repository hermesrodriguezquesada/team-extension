chrome.runtime.onMessage.addListener(
    function(msg, sender, sendResponse) {
      if(msg.text == "Activar script delete-row-alt-click") {
        document.addEventListener('click',(ev)=>{
            if(ev.altKey)
              { 
                console.log(ev.target)
                ev.target.parentElement.remove()
            }
        })
      }
    }
)
