chrome.runtime.onMessage.addListener(
    function(msg, sender, sendResponse) {
      if(msg.text == "Activar script bold-title-column-separator") {
        // BOLD TITLES in platforms
        var index;
        var first;
        var second;
        let obtenerDato = document.getElementsByTagName("td");
        let title = ''
        let titleDesc =''
        let arrTitle =[]
        for (index = 0; index < obtenerDato.length; index++ ){    
            if(obtenerDato[index].getAttribute('data-column-title')=='Title '){
            first= obtenerDato[index].childNodes;    
            second = first[3].childNodes; 
            //console.log(second[2])
            title = second[2].innerHTML
            arrTitle = title.split(':')
            titleDesc = '<b>'+ arrTitle[arrTitle.length -1]+'</b>'
            arrTitle.pop()
            arrTitle.push(titleDesc)
            second[2].innerHTML = arrTitle.join(':')
            }

        }
      }else if(msg.text == "Desactivar script bold-title-column-separator") {
        var index;
        var first;
        var second;
        let obtenerDato = document.getElementsByTagName("td");

        for (index = 0; index < obtenerDato.length; index++ ){    
            if(obtenerDato[index].getAttribute('data-column-title')=='Title '){
            first= obtenerDato[index].childNodes;    
            second = first[3].childNodes; 
            second[2].innerHTML = second[2].innerHTML.replace('<b>','').replace('</b>','')
            }
        }
    }
    }
)