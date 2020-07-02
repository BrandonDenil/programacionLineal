var matriz=[];
var filaPivote=0;
var columnaPivote=0;


// ordena la matriz principal añadiendole variables de olgura
function ordenarMatriz(){
    matriz=[];
    let filaTemporal=[];
    // agrega los valores negativos de la funcion z
    filaTemporal.push(1);
    for(let x=0;x<z.length;x++){
        filaTemporal.push((z[x]*-1));
    }
   
    for(let x=0;x<=r.length;x++){
        filaTemporal.push(0);
    }
    matriz.push(filaTemporal);

    // agrega los valores de las restricciones
    for(let x=0;x<r.length;x++){
        filaTemporal=[];
        filaTemporal.push(0);
        for(let y=0;y<=z.length-1;y++){
            filaTemporal.push(r[x][y]);
        }
        for(let y=0;y<r.length;y++){
            if(y==x)
            {   
                filaTemporal.push(1); // añade las variables de holgura
            }
            else{filaTemporal.push(0);}
        }
        filaTemporal.push(r[x][z.length]);
        filaTemporal.push(x+r.length);// añade el identificador a las variables de holgura
        matriz.push(filaTemporal);
    }
    console.log('Matriz ordenada');
    console.log(matriz);

}

function procesarMatriz(){
     columnaPivote=IndiceMinimo(matriz[0]);
     filaPivote=0;
    let pivote=0;
    let divisiones=[];
    let temp=[];
    for(let x=0;x<r.length;x++){ // realiza divisiones entre igual y pivote
        divisiones.push(matriz[x+1][r.length+z.length+1]/matriz[x+1][columnaPivote]);
    }

    filaPivote=IndiceMinimo(divisiones)+1; //halla la filapivote hallando el menor de las divisiones
    pivote=matriz[filaPivote][columnaPivote];//halla el pivote
    console.log('fila pivote:'+matriz[filaPivote]);
    console.log('columna pivote:'+columnaPivote);
    console.log('pivote:'+pivote);

    // nueva fila pivote
    for (let y=0;y<=(1+z.length+r.length);y++){
        matriz[filaPivote][y]=matriz[filaPivote][y]/pivote;
    }
    console.log('cambiando el identificador:'+ matriz[filaPivote][2+z.length+r.length]+' por :'+columnaPivote);
    matriz[filaPivote][2+z.length+r.length]=columnaPivote;// añade el identificador de la nueva fila por la cual se agrego
   
    //añade el resto de filas 
    for (let x=0;x<=r.length;x++){
        let num=0;
        temp=[];
        if(x!=filaPivote){
            for (let y=0;y<=(1+z.length+r.length);y++){
              num=matriz[x][columnaPivote]*matriz[filaPivote][y];
              num=matriz[x][y]-num;
              temp.push(num);
            }
            temp.push(matriz[x][2+z.length+r.length]);
            // console.log('fila:'+x);
            // console.log(temp);
            matriz[x]=temp;
        }
    }
    cadena="<div class='row'><div class='col l4 offset-l4'> <h6>Variable de entrada: X"+columnaPivote+"</h6> \
    <h6> variable de salida:X"+filaPivote+"</h6></div></div>";
    $('#tablas ').append(cadena);
}


// busca el indice el valor minimo de un arreglo
function IndiceMinimo(arreglo){
    let min=arreglo[0];
    let i=0;
    for(let c=1;c<arreglo.length;c++){
        if(min>arreglo[c])
        {
            min=arreglo[c]; 
            i=c;
        }
    }
    return i;
}

function obtenerMinimo(arreglo){
    let min=arreglo[0];
    for(let c=1;c<arreglo.length;c++){
        if(min>arreglo[c])
        {
            min=arreglo[c]; 
        }
    }
    return min;
}

function imprimirTabla(arreglo,titulo){
    let cadena="<hr/><div class='row'><h6> paso:"+titulo+"</h6> <div class='col l8 offset-l2'> \
      <table class='centered highlight stripped'><thead><th></th><th>Z</th> ";
    for(let x=1;x<=(z.length+r.length);x++){ // agrega los headers de cada tabla
        cadena=cadena+"<th>X"+(x-1)+"</th>";
    }
    cadena=cadena+"<th>R</th></thead><tbody><tr><td>Z</td>";
    for(let x=0;x<(arreglo[0].length);x++){ // agrega los valores de la funcion z
        if (arreglo[0][x] != undefined)
        {
            cadena=cadena+"<td>"+(Math.round(arreglo[0][x]* 100) / 100).toFixed(1)+"</td>";
        }
        
    }
    cadena=cadena+"</tr>";
    for(let x=1;x<arreglo.length;x++){ //agrega las variables de desicion
        cadena=cadena+"<tr><td>x"+(arreglo[x][arreglo[x].length-1]-1)+"</td>";
        for(let y=0;y<(arreglo[x].length-1);y++){ // agrega los ceros 
            cadena=cadena+"<td>"+(Math.round(arreglo[x][y] * 100) / 100).toFixed(2)+"</td>";
        }
        cadena=cadena+"</tr>";
    }
    cadena=cadena+"</body></table></div></div>";
    $('#tablas ').append(cadena);
  
}

function respuesta(arreglo){
    let cadena="<div class='row'> <div class='col l8 offset-l2'> <h5> ";
    let resultado=0;
    for(let x=1;x<=r.length;x++){ //agrega las variables de desicion
        console.log(arreglo[x][arreglo[x].length-1]+'<'+r.length);
        if (arreglo[x][arreglo[x].length-1]<r.length){
            cadena=cadena+z[(arreglo[x][arreglo[x].length-1])-1]+'('+arreglo[x][arreglo[x].length-2]+')+';
            resultado=resultado+z[(arreglo[x][arreglo[x].length-1])-1]*arreglo[x][arreglo[x].length-2];
        }
        // else{
        //     cadena=cadena+z[(arreglo[x][arreglo[x].length-1])-1]+'(0)';
        // }
    }
    cadena=cadena+'='+resultado+'</h5></div></div>';
    console.log('resultado='+cadena);
    $('#tablas ').append(cadena);
}

function resolver(){
    z=[];
    r=[];
    listaSignos=[];
    var contador=1;
    $("#tablas div").remove();
    obtenerZ();
    ObtenerRestricciones();
    ObtenerSignos();
    ordenarMatriz();
    imprimirTabla(matriz,contador+'-> Ordenando variables');
    contador++;
    while(true)
    {   let a=obtenerMinimo(matriz[0]);
        console.log('el valor minimo es:'+a);
        if(a>=0){break;}
        procesarMatriz(); 
        imprimirTabla(matriz,contador);
        contador++;
    } 
    console.log(matriz);
    respuesta(matriz);
}
