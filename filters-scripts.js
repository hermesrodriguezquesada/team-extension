chrome.runtime.onMessage.addListener(
    function(msg, sender, sendResponse) {
      if(msg.text == "Activar script 1") {

// Filter Layout
const targetElement = document.querySelector("#issueListTitle")
const newItem = document.createElement("div")
const itemsAmount = document.getElementsByTagName("table")[0].nextElementSibling

let checkbox = null
let selectComponent = null
var index;

newItem.style.padding = "1em"
newItem.style.outline = "rgb(6, 107, 177) 1px solid"

// Layout set and adding to DOM
let obtenerDato = document.getElementsByTagName("a");
var resultfinal = []

for (var index = 0; index < obtenerDato.length; index++ ){  
    if(obtenerDato[index].getAttribute('ng-if')==='!ctrl.parent.insideTestCycle || !ctrl.parent.isFromKnownIssueList(row)'){
        var result = obtenerDato[index].firstChild.textContent
        var element = result.split('/');
        resultfinal.push(element[0])
    }  
}
var unicos = [... new Set(resultfinal)];
console.log(unicos);

var selectHTML = '<select id="select-component"><option disabled selected>Select a component</option>'
    
for (let component of unicos) {
     selectHTML += 
    `<option>`+component+`</option>`   
    }

     selectHTML += '</select><button id="clear-button">Clear</button><button id="remove-button">All except the selected</button><label style="display:inline;margin-left:3em;"><input type="checkbox" id="bold-text-checkbox" style="display:inline;"> Bolded titles</label>'
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
    checkbox.addEventListener('click',()=>{
        var first;
        var second;
        let title = ''
        let titleDesc =''
        let arrTitle =[]
        for (index = 0; index < obtenerDato.length; index++ ){    
                if(obtenerDato[index].getAttribute('data-column-title')=='Title '){
                    first= obtenerDato[index].childNodes;    
                    second = first[3].childNodes; 
                    title = second[2].innerHTML
                    arrTitle = title.split('/')
                    if(checkbox.checked)
                        titleDesc = '<b>'+ arrTitle[arrTitle.length -1]+'</b>'
                    else
                        titleDesc = arrTitle[arrTitle.length -1]
                    arrTitle.pop()
                    arrTitle.push(titleDesc)
                    second[2].innerHTML = arrTitle.join('/')
                }
        }
        
    }),500

    // Display issues per selected component
    clearButton.addEventListener('click',()=>{
        // Showing all issues
        console.log('showing ....')
        for (index = 1; index < tableRows.length; index++ ){ 
            tableRows[index].style.display = 'table-row'
        }

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
                issuesCount++
            } else 
                tableRows[index].style.display = 'none'
        }
        itemsAmount.innerHTML = 'Showing '+issuesCount+' for <b>'+ selectedComp + '</b> component.'

    })
    
    // Filter by components
    selectComponent.addEventListener('change',(event)=>{
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
            if(!title.includes(selectedValue))
                tableRows[index].style.display = 'none'   
            else 
                issuesCount++
        }
        itemsAmount.innerHTML = 'Showing '+issuesCount+' for <b>'+ selectedComp + '</b> component.'
    })
})
      }
    }
)