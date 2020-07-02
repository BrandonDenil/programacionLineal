var z=[]; //Es una lista que almacena los valores de la funcion Z
var r=[]; //Es una lista que almacena los valores de las restricciones
var listaSignos=[]; //lista 

// inicializacion del select materialize
$(document).ready(function(){
    $('select').formSelect();
    });

//Obtiene las variables post y las convierte a javascript
  var restricciones=$('#restricciones').text();
  var var_desicion=$('#var_desicion').text();
  var objetivo=$('#objetivo').text();


//funcion que agrega los inputs de la funcion z
  function agregarZ(can){
    let cadena=' <tr><td><h6 class="Vars" >y=</h6></td> ';
      for(let x=0;x<can;x++){
      cadena=cadena+' <td><input type="number" min="0" class="func" id="v'+x+'"><h6 class="Vars" > x'+x+'</h6>+</td>';
      } 
      cadena=cadena.slice(0,cadena.length-6);
      cadena=cadena+'</td></tr>';
      $('#funcionGeneral tbody ').append(cadena);
  }


// funcion que agrega los inputs de las restricciones 
    function agregarR(can,res){
      for(let y=0;y<res;y++){
        let cadena=' <tr id="fila'+y+'"> ';
        for(let x=0;x<can;x++){
        cadena=cadena+' <td><input type="number" min="0" class="func" id="r'+x+'"><h6 class="Vars" > x'+x+'</h6>+</td>';
        }
        cadena=cadena.slice(0,cadena.length-6);
        cadena=cadena+'</td><td><select class="func browser-default" id="signo'+y+'">  '+
      '<option value="igual"  selected>=</option>'+
    ' <option value="menor"><=</option>'+
      '<option value="mayor">>=</option>'+
    '</select><input type="number" class="func" id="r'+can+'"></td></tr>';
        $('#restricciones tbody ').append(cadena);
      }
      }

  
// funcion que obtiene los valores de la funcion Z
  function obtenerZ(){
      for(let x=0;x<var_desicion;x++){
         let temp= $('#funcionGeneral tbody  #v'+x).val();
         z.push(temp);
      }
      console.log('funcion Z: '+z);
  }
// funcion que obtiene los valores de las restricciones
  function ObtenerRestricciones(){
      for(let y=0;y<restricciones;y++){
        let tempList=[];
        for(let x=0;x<=var_desicion;x++){
          let temp= $('#restricciones tbody #fila'+y+' #r'+x).val();
          tempList.push(temp);
        }
        r.push(tempList);
      }
      console.log('Restricciones:');
      console.log(r);
  }

  function ObtenerSignos() // Obtiene el signo de la restriccion
  {
    let signo='';
    for(let x=0;x<restricciones;x++){
      signo=$('#signo'+x+' option:selected').val();
      listaSignos.push(signo);
    }
    console.log(listaSignos);
  }

//


agregarZ(var_desicion);
agregarR(var_desicion,restricciones);
