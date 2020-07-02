<?php require 'nav.php' ?>


    <div class="container  " style="width: 100%;">
      <form action="grafico.php" method="post">    
        <div class="row" >
          <div class="col l8 offset-l2">
              <div class="card" style="margin-top: 3rem;">
                <span class="card-title">Metodo y detalles</span>
                <div class="card-content">
                  <div class="row">
                      <div class="col l6">
                        <select  name="objetivo" id="objetivo">
                          <option value="" disabled selected>Objetivo de la función</option>
                          <option value="Maximizacion" style="color: black !important;">Maximización</option>
                          <option value="Minimizacion">Minimizacióñ</option>
                        </select>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col l4 offset-l1">
                        <input type="number" name="var_desicion"  value="2" min='2' >
                        <label for="">No. Variables de decisión</label>
                    </div>
                    <div class="col l4 offset-l1">
                      <input type="number" name="restricciones" value="2" min='2' >
                        <label for="">No. Restricciones</label>
                    </div>
                    </div>
                    <div class="row">
                      <div class="col l12">
                        <center><button class="btn waves-effect waves-light" style="background-color: #d35400;" type="submit" name="action">Continuar
                          <i class="material-icons right">send</i>
                        </button></center>
                      </div>
                    </div>
                </div>
              </div>
          </div>
        </div>

      </form>
    </div>

    <script>
      // inicializacion del select materialize
      $(document).ready(function(){
    $('select').formSelect();
  });

    </script>
   <script src="src/index.js"></script>
<?php
  require 'footer.php' 
?>