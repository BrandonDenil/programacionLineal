

$(document).ready(function(){
	$("#metodo").change(function(){
        var valor = $(this).val();
        console.log(valor);
            if (valor=="Graficos") 
            {   
                console.log('ok');
                $('input[name=var_desicion]').prop("readonly", true);
                $('input[name=var_desicion]').val(2);
            }
            else if (valor=='2_fases')
            {
                $('input[name=var_desicion]').prop("readonly", false);
            }
            
        });
});
