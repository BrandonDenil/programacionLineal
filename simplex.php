<?php require 'nav.php' ?>


  <div style="display: none;" >
  <?php
    echo '<p name="var_desicion" id="var_desicion">'.$_POST['var_desicion'].'</p>';
    echo '<p name="metodo"> id="metodo"'.$_POST['metodo'].'</p>';
    echo '<p name="objetivo" id="objetivo">'.$_POST['objetivo'].'</p>';
    echo '<p name="restricciones" id="restricciones">'.$_POST['restricciones'].'</p>';
  ?>
  </div>

      <!-- contenedor de restricciones y funcion -->
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
                        <center><button class="btn waves-effect waves-light" style="background-color: #d35400;"  name="action" onclick="resolver()">Continuar
                          <i class="material-icons right">send</i>
                        </button></center>
                      </div>
                </div>
                </div>
              </div>
          </div>
        </div>
    </div>

 
    <div style="margin-bottom: 5em container" id="tablas" > 

    </div> 
    
  
   
    <!--js materialize -->
      <script src="src/variables.js"></script>
    <script src="src/funcionesSimplex.js"></script>

    <?php
      require 'footer.php'
    ?>