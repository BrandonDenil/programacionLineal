var puntos=[]; // lista de puntos 
var intesecciones=[];//lista de puntos de inteseccion
var soluciones=[];
var resolucion=20; 
var escala=1;

// define el canvas donde se dibujaran los trazos
    ej1=document.getElementById("canvas"); //Asigno a una variable el elemento del html que voy a usar
    lienzo1=ej1.getContext("2d"); //Alisto el canvas para que funcione
    lienzo1.lineWidth=1; //Defino el ancho de la linea en pixeles
    lienzo1.fillStyle = '#bdc3c7'; //Defino el color en hexagesimal


//esta función obtiene los puntos igualando a cero las ecuaciones
function  obtenerPuntos(){
    puntos=[];
    let listTemp=[];
    let punto=0;
    for (let x=0;x<restricciones;x++){
        listTemp=[];
        punto=r[x][2]/r[x][0]; // halla la cordenada en x igualando a 0 y
        listTemp.push(punto);

        punto=r[x][2]/r[x][1];// halla la cordenaa en y igualando a 0 x
        listTemp.push(punto);
        puntos.push(listTemp);
    }
    console.log('puntos'+puntos);
}

//esta funcion obtiene los puntos de intesecciones resolviendo los sistemas de ecuaciones
function obtenerIntersecciones(){
    intesecciones=[];
        for (x=0;x<r.length-1;x++){
            for (y=x+1;y<r.length;y++){
                let a=r[x][0];let b=r[x][1]; let c=r[x][2];
                let d=r[y][0];let e=r[y][1]; let f=r[y][2];
                intesecciones.push(obtenerXY(a,b,c,d,e,f));
            }
        }
    }

// resuelve sistemas de ecuaciones de 2 incognitas
function obtenerXY(a,b,c,d,e,f){
        let listTemp=[];
        let g=a*e-b*d;
        let x=(c*e-b*f)/g;
        let y=(a*f-c*d)/g;
        listTemp.push(x);
        listTemp.push(y);
        return listTemp;
    }


function dibujarPlano(reX,reY){  
    lienzo1.fillStyle = '#bdc3c7'; //Defino el color en hexagesimal
    let contador=0;
    for(let x=20;x<490;x=x+reX){
        lienzo1.fillRect(x,20,1,470); //dibuja lineas verticales 
        lienzo1.fillText(contador*escala,x,498);   
        contador++;   
    }
    contador=0;
    for(let y=490;y>20;y=y-reY){
        lienzo1.fillRect(20,y,460,1); //dibuja lineas horizontales
        lienzo1.fillText(contador*escala,5,y);   
        contador++;
    }
    
}

function aumentarZoom(){
    
    if (resolucion<100){
        canvas.width=canvas.width;
        resolucion=resolucion+3;
    dibujarPlano(resolucion,resolucion)
    graficarPuntos();
    }
}

function disminuirZoom(){ 
    if(resolucion>=10) {
        canvas.width=canvas.width;
        resolucion=resolucion-3;
   dibujarPlano(resolucion,resolucion);
   graficarPuntos();
    }
}

function dibujarRecta(pX,pY){
    let oX=20; // cordenada de origen X
    let oY=490; // coordenada de origen Y
    pX=oX+pX*resolucion/escala;
    pY=oY-pY*resolucion/escala;
    if(Math.abs(pX)==Infinity) //si pX tiende a infinito
    {
        pX=490;
        lienzo1.beginPath();
        lienzo1.moveTo(20,pY);
        lienzo1.lineTo(pX,pY); 
        lienzo1.stroke();
    }
    else if(Math.abs(pY)==Infinity){ //si pY tiende a infinito
        pY=20;
        lienzo1.beginPath();
        lienzo1.moveTo(pX,490);
        lienzo1.lineTo(pX,pY); 
        lienzo1.stroke();
    }
    else{
        lienzo1.beginPath();
        lienzo1.moveTo(20,pY);
        lienzo1.lineTo(pX,490); 
        lienzo1.stroke();
    }
   
}

function graficarPuntos(){
    
    canvas.width=canvas.width;
    dibujarPlano(resolucion,resolucion);
    for(let x=0;x<puntos.length;x++){
        let corX,corY=0;
        corX=puntos[x][0];
        corY=puntos[x][1];
        dibujarRecta(corX,corY);
    }
}

$(document).ready(function(){
	$("select[name=escala]").change(function(){
            if ($('#escala').val()=="1-1") 
            {   
                escala=1;
            }
            else if ($('#escala').val()=="1-5") 
            {   
                escala=5;
            }

            else if ($('#escala').val()=="1-10") 
            {   
                escala=10;
            }
            else if ($('#escala').val()=="1-100") 
            {   
                escala=100;
            }
            
            canvas.width=canvas.width;
            dibujarPlano(resolucion,resolucion)
            graficarPuntos();
        });
});
 
function Resultados(){
    let result=0;
    let cadena='';
    $("#resultados tbody tr").remove();
    for(let l=0;l<puntos.length;l++){
        if (puntos[l][0]!=Infinity){ 
            result=puntos[l][0]*z[0];
            if (verificarSolucion(puntos[l][0],0)==true)
            {
                cadena=cadena+'<tr><td>'+puntos[l][0]+'</td><td>0</td><td>'+result+'</td><td><i class="material-icons">check</i></td></tr>';
            }
            else {cadena=cadena+'<tr><td>'+puntos[l][0]+'</td><td>0</td><td>'+result+'</td><td><i class="material-icons">cancel</i></td></tr>';}
        }

        if (puntos[l][1]!=Infinity){ 
            result=puntos[l][1]*z[1];
            if (verificarSolucion(0,puntos[l][1])==true)
            {
                cadena=cadena+'<tr><td>0</td><td>'+puntos[l][1]+'</td><td>'+result+'</td><td><i class="material-icons">check</i></td></tr>';
            }
           else {cadena=cadena+'<tr><td>0</td><td>'+puntos[l][1]+'</td><td>'+result+'</td><td><i class="material-icons">cancel</i></td></tr>';} 
        }
    }
    for(let l=0;l<intesecciones.length;l++){
            result=intesecciones[l][0]*z[0]+intesecciones[l][1]*z[1];
            if(verificarSolucion(intesecciones[l][0],intesecciones[l][1])==true)
            {
                cadena=cadena+'<tr><td>'+intesecciones[l][0]+'</td><td>'+intesecciones[l][1]+
                '</td><td>'+result+'</td><td><i class="material-icons">check</i></td></tr>';
            }
            else{ cadena=cadena+'<tr><td>'+intesecciones[l][0]+'</td><td>'+intesecciones[l][1]+'</td><td>'+result+'</td><td><i class="material-icons">cancel</i></td></tr>';}
    }
    $('#resultados tbody').append(cadena);
}

function verificarSolucion(Px,Py){
    let contador=0;;
    let total;
    let signo;
    console.log('x:'+Px+' y:'+Py);
    for(x=0;x<r.length;x++){
        total=Px*r[x][0]+Py*r[x][1];
        signo=listaSignos[x];
        console.log('signo:'+signo+' total:'+total+' r='+r[x][2]);
        if (signo=='igual')
        {
            console.log('igual');
            if(total==r[x][2]){
                contador++;
            }
          
        }
        if (signo=='mayor')
        {   
            console.log('mayor');
            if(total>=r[x][2]){
                contador++;
            }

        }
        if (signo=='menor')
        {
            console.log('menor');
            if(total<=r[x][2]){
                contador++;
            }
        }
    }
    if (contador==r.length)
    {
        return true;
    }
    else 
    {
        console.log(contador);
        return false;
    }
}

dibujarPlano(resolucion,resolucion);

function obtenerValores(){
    z=[];
    r=[];
    listaSignos=[];
    obtenerZ();
    ObtenerRestricciones();
    ObtenerSignos();
    obtenerPuntos();
    obtenerIntersecciones();
    graficarPuntos();
    Resultados();
}