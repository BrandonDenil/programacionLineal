<?php require 'nav.php' ?>


  <div style="display: none;" >
  <?php
    echo '<p name="var_desicion" id="var_desicion">'.$_POST['var_desicion'].'</p>';
    echo '<p name="objetivo" id="objetivo">'.$_POST['objetivo'].'</p>';
    echo '<p name="restricciones" id="restricciones">'.$_POST['restricciones'].'</p>';
  ?>
  </div>

      
    <div class="container  " style="width: 100%;">
      <!-- <form  action="grafico.php">     -->
        <div class="row" >
          <div class="col l8 offset-l2">
              <div class="card" style="margin-top: 3rem;">
                <!-- <span class="card-title">Datos</span> -->
                <div class="card-content">
                  <div class="row">
                    <span class="card-title">Función Z</span>
                      <div class="col ">
                          <table id="funcionGeneral">
                            <tbody>
                            
                            </tbody>
                          </table> 
                      </div>
                  </div>
                  <div class="row">
                    <span class="card-title">Restricciones</span>
                    <div class="col">
                        <table id="restricciones">
                           <tbody>

                           </tbody>
                        </table>
                    </div>
                </div>
                <div class="row">
                <div class="col l12">
                        <center><button class="btn waves-effect waves-light" style="background-color: #d35400;"  name="action" onclick="obtenerValores()">Continuar
                          <i class="material-icons right">send</i>
                        </button></center>
                      </div>
                </div>
                </div>
              </div>
          </div>
        </div>

      <!-- </form> -->
    </div>

    <div style="margin-bottom: 3em" class="row" >
     <div class="col l8 offset-l1">
     <center>
      <canvas id="canvas" width="500" height="500" style="background-color:#f5f6fa"></canvas>
      
      </center>  
     
     </div> 
     <div class="col l2" style="height: 500px;">
       <div class="row" style="margin-top: 200px;" >
          <center><button class="btn waves-effect waves-light" style="background-color: #d35400;" type="submit" name="action" onclick="aumentarZoom()">
          Zoom<i class="material-icons right">exposure_plus_1</i> </button>
          <button class="btn waves-effect waves-light" style="background-color: #d35400;" type="submit" name="action" onclick="disminuirZoom()">
          Zoom<i class="material-icons right">exposure_neg_1</i> </button>
        </center>
       </div>
        <div class="row"  >
              <center>
            <label for="escala" id="">Escala</label>
           <select name="escala" id="escala">
              <option value="1-1">1-1</option>
              <option value="1-5">1-5</option>
              <option value="1-10">1-10</option>
              <option value="1-100">1-100</option>
           </select>
          </center> 
      </div>
     </div>
           
    </div>   
    <div style="margin-bottom: 5em container" > 
          <div class="row">
                <div class="col l4 offset-l4">
                    <table id="resultados" Add class="striped centered">
                      <thead>
                          <th>X</th>
                          <th>Y</th>
                          <th>Funcion Z</th>
                          <th>Es solución?</th>
                      </thead>
                      <tbody>
                          
                      </tbody>
                  </table>
                </div>
          </div>
    </div>       
   
    <!--js materialize -->
      <script src="src/variables.js"></script>
    <script src="src/funcionesGrafico.js"></script>

    <?php
      require 'footer.php'
    ?>