/*UTest
- Filter issues per reproductions having the following conditions:
2-Display issues that have more than 1 reproduction and its states is 'Pending Approval', 'Approved',
'Pending rejection','Rejected'. 

UTest
- Filtrar emisiones por reproducciones que tengan las siguientes condiciones:
2-Mostrar incidencias que tengan más de 1 reproducción y sus estados sean 'Pendiente de aprobación', 'Aprobado',
Pendiente de rechazo", "Rechazada".
*/

chrome.runtime.onMessage.addListener(
    function(msg, sender, sendResponse) {
      if(msg.text == "Activar Utest view components") {
        let obtenerDatos = document.getElementsByTagName("span");
        var result;
        var result2=[];
        var mostrar;
        
        for (index = 0; index < obtenerDatos.length; index++ ){
            result= obtenerDatos[index].innerText;
            if((obtenerDatos[index].getAttribute('class') !='bug-status status-11'||
               obtenerDatos[index].getAttribute('class') !='bug-status status-2' ||
               obtenerDatos[index].getAttribute('class') !='bug-status status-12'||
               obtenerDatos[index].getAttribute('class') !='bug-status status-3' || 
               obtenerDatos[index].getAttribute('class') =='bug-status status-1')  && 
               (obtenerDatos[index].getAttribute('ng-if') =='row.numberOfReproducers > 0' && (result == '1'))){
                mostrar = obtenerDatos[index].parentNode.parentNode;
                mostrar.setAttribute('style', 'display:none');
            }
            console.log(mostrar);
        }
      }
    }
)

