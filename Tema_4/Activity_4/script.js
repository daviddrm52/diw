$("#boton").click(function() {
    var num1 = $('#num1').val();
    var num2 = $('#num2').val();
    if(isNaN(num1) || isNaN(num2)){
        errorMessage = "You have to write only numbers!";
        $('#errorMessage').html(errorMessage);
    }
    var resultado = parseInt(num1) + parseInt(num2);
    textoFinal = resultado;
    $('#resultado').html(textoFinal);
});