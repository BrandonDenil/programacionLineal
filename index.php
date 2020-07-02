<?php require 'nav.php' ?>


    <div class="container  " style="width: 100%;">
     
        <div class="row" >
          <div class="col l8 offset-l2">
              <div class="card" style="margin-top: 3rem;">
                <span class="card-title">Seleccione un método</span>
                <div class="card-content">
                  <div class="row">
                    <div class="col l2 offset-l5">
                        <form action="seleccionGrafico.php" method="post">
                        <center><button class="btn waves-effect waves-light" style="background-color: #d35400;" type="submit" name="action">Gráfico
                            </button></center>
                        </form>
                    </div>
                  </div>
                  <div class="row">
                  <div class="col l2 offset-l5">
                        <form action="seleccionSimplex.php" method="post">
                        <center><button class="btn waves-effect waves-light" style="background-color: #d35400;" type="submit" name="action">Simplex
                            
                            </button></center>
                        </form>
                    </div>
                  </div>
                  <div class="row">
                  <div class="col l2 offset-l5">
                        <form action="seleccionGrafico.php" method="post">
                        <center><button class="btn waves-effect waves-light" style="background-color: #d35400;" type="submit" name="action">Método M
                           
                            </button></center>
                        </form>
                    </div>
                  </div>
                </div>
              </div>
          </div>
        </div>
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