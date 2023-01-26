/*UTest
- Filter issues per reproductions having the following conditions:
1-Display issues that have only 1 reproduction and its state is not 'Pending Approval',
 'Approved','Pending rejection','Rejected'

UTest
- Filtrar incidencias por reproducciones con las siguientes condiciones:
1-Mostrar las incidencias que tienen sólo 1 reproducción y su estado no es 'Pendiente de aprobación',
 'Aprobado','Pendiente de rechazo','Rechazado'.
 */
 
chrome.runtime.onMessage.addListener(
  function(msg, sender, sendResponse) {
    if(msg.text == "Activar reports-with-plus-1") {
      let obtenerDatos = document.getElementsByTagName("span");
      var result;
      var result2=[];
      var mostrar;
      
      for (index = 0; index < obtenerDatos.length; index++ ){
          result= obtenerDatos[index].innerText;
          if(obtenerDatos[index].getAttribute('ng-if') =='row.numberOfReproducers > 0' && result == 2 ||
            obtenerDatos[index].getAttribute('class') =='bug-status status-2' ||
            obtenerDatos[index].getAttribute('class') =='bug-status status-3' || 
            obtenerDatos[index].getAttribute('class') =='bug-status status-11' ||
            obtenerDatos[index].getAttribute('class') =='bug-status status-12') 
          {
              mostrar = obtenerDatos[index].parentNode.parentNode;
              mostrar.setAttribute('style', 'display:none');
          }
      }
    }
  }
)
