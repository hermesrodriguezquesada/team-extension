chrome.runtime.onMessage.addListener(
    function(msg, sender, sendResponse) {
      if(msg.text == "Activar Filter issues per slot") {
        // Filter Layout
        const targetElement = document.querySelector("#issueListTitle")
        const newItem = document.createElement("div")
        const itemsAmount = document.getElementsByTagName("table")[0].nextElementSibling

        let checkbox = null
        let selectComponent = null
        var index;

        newItem.id = "select-filter-script-issues-slot"
        newItem.style.padding = "1em"
        newItem.style.outline = "rgb(6, 107, 177) 1px solid"

        // Layout set and adding to DOM
        let obtenerDato = document.getElementsByTagName("a");
        var resultfinal = []

        for (var index = 0; index < obtenerDato.length; index++ ){  
            if(obtenerDato[index].getAttribute('ng-if')==='!ctrl.parent.insideTestCycle || !ctrl.parent.isFromKnownIssueList(row)'){
                var result = obtenerDato[index].firstChild.textContent
                var element = result.split(':');
                resultfinal.push(element[1]);
            }  
        }
        var unicos = [... new Set(resultfinal)];


        var selectHTML = '<select id="select-component"><option disabled selected>Select a component</option>'
            
        for (let component of unicos) {
            selectHTML += 
            `<option>`+component+`</option>`   
            }

            selectHTML += '</select><button id="clear-button">Clear</button><button id="remove-button">Remove</button><label style="display:inline;margin-left:3em;"><input type="checkbox" id="bold-text-checkbox" style="display:inline;"> Uncheck the include know</label>'
        newItem.innerHTML = selectHTML         
        console.log(newItem.innerHTML);
        targetElement.insertAdjacentElement("afterend",newItem)




        // Event listeners adding
        setTimeout(()=>{
            checkbox = document.querySelector("#bold-text-checkbox")
            selectComponent = document.querySelector("#select-component")
            clearButton = document.querySelector("#clear-button")
            removeButton = document.querySelector("#remove-button")

            let obtenerDato = document.getElementsByTagName("td");
            let tableRows =   document.getElementsByTagName("tr");
            var tdArray = Array.prototype.slice.call(document.getElementsByTagName("td"))

            // Bolded text
            checkbox.addEventListener('change',()=>{
            let obtenerDatospan = document.getElementsByTagName("span");
            let obtenerDatostd = document.getElementsByTagName("td");
            var result;
            var result2;

                if ($(checkbox).prop('checked') === true) {
                    for (index = 0; index < obtenerDatospan.length; index++ ){ 
                        if(obtenerDatospan[index].getAttribute('title') === "Verification"){
                            result = obtenerDatospan[index].parentNode.parentNode.style.display = 'none';
                        }
                    }
                    for (index2 = 0; index2 < obtenerDatostd.length; index2++ ){ 
                        if(obtenerDatostd[index2].getAttribute('data-column-title') =='Verification '){
                            result2 = obtenerDatostd[index2].style.display = 'none';
                        }
                    }        
                }else{
                    for (index = 0; index < obtenerDatospan.length; index++ ){ 
                        if(obtenerDatospan[index].getAttribute('title') === "Verification"){
                            result = obtenerDatospan[index].parentNode.parentNode.style.display = '';
                        }
                    }
                    for (index2 = 0; index2 < obtenerDatostd.length; index2++ ){ 
                        if(obtenerDatostd[index2].getAttribute('data-column-title') =='Verification '){
                            result2 = obtenerDatostd[index2].style.display = '';
                        }
                    } 
                }
            
            })

            // Display issues per selected component
            clearButton.addEventListener('click',()=>{
                // Showing all issues
                let issuesCount = 0
                console.log('showing ....')
                for (index = 1; index < tableRows.length; index++ ){ 
                    tableRows[index].style.display = 'table-row'
                    issuesCount++;
                }
                selectComponent.selectedIndex = 0;
                itemsAmount.innerHTML = 'Showing '+issuesCount+' for <b>'+ selectedComp + '</b> component.'

            })
        
            // Display issues of all components except selected component
            removeButton.addEventListener('click',()=>{
                const selectElement = document.querySelector("#select-component")
                let comps = []
                let title = null
                let comp = null
                let issuesCount = 0
                let selectedComp = selectElement.options[selectElement.selectedIndex].text
                let selectedValue = selectElement.value
                console.log(selectedComp)
                console.log(selectedValue)

                for (index = 1; index < tableRows.length; index++ ){    
                    title = tableRows[index].children[1].children[0].children[0].innerText
                    if(!title.includes(selectedValue)) {
                        tableRows[index].style.display = 'table-row'
                        issuesCount++;
                    } else 
                        tableRows[index].style.display = 'none'
                }
                itemsAmount.innerHTML = 'Showing '+issuesCount+' for <b>all except '+ selectedComp + '</b> component.'

            })
            
            // Filter by components
            selectComponent.addEventListener('change',(event)=>{
                for (index = 1; index < tableRows.length; index++ ){ 
                    tableRows[index].style.display = 'table-row'
                }
                
                const selectElement = event.target
                let comps = []
                let title = null
                let comp = null
                let issuesCount = 0
                let selectedComp = selectElement.options[selectElement.selectedIndex].text
                let selectedValue = selectElement.value
                console.log(selectedComp)
                console.log(selectedValue)

                for (index = 1; index < tableRows.length; index++ ){    
                    title = tableRows[index].children[1].children[0].children[0].innerText
                    if(!title.includes(selectedValue)) {
                        tableRows[index].style.display = 'none'
                    } else
                        issuesCount++;
                }
                itemsAmount.innerHTML = 'Showing '+issuesCount+' for <b>'+ selectedComp + '</b> component.'
            })
        })

      }
      else if(msg.text == "Desactivar Filter issues per slot") {
        $("#select-filter-script-issues-slot").remove();
        }
    }
)

