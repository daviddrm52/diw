$("#buttonOutcome").click(function() {
    //Global variables
    var titleOutcome;
    var subtitleOutcome;
    //Variable for the first input
    var num1 = $('#num1').val();
    var isNum1aNumber = false;
    //Comprobation of the first input
    if(isNaN(num1)){
        titleOutcome = "";
        subtitleOutcome = "";
        errorMessageNum1 = "<p> ERROR: The first input doesn't have a number, write a number please! </p>";
        $('#titleOutcome').html(titleOutcome);
        $('#subtitleOutcome').html(subtitleOutcome);
        $('#errorNum1').html(errorMessageNum1);
    } else if(num1 == ""){
        titleOutcome = "";
        subtitleOutcome = "";
        errorMessageNum1 = "<p> ERROR: The first input is empty, write a number please! </p>";
        $('#titeOutcome').html(titleOutcome);
        $('#subtitleOutcome').html(subtitleOutcome);
        $('#errorNum1').html(errorMessageNum1);
    } else {
        isNum1aNumber = true;
        errorMessageNum1 = "";
        $('#errorNum1').html(errorMessageNum1);
    }
    $('#errorNum1').bind("mouseenter mouseleave", function() {
        $(this).toggleClass("errorMessage");
    });
    //Variable for the second input
    var num2 = $('#num2').val();
    var isNum2aNumber = false;
    //Comprobation of the last input
    if(isNaN(num2)){
        titleOutcome = "";
        subtitleOutcome = "";
        errorMessageNum2 = "<p> ERROR: The second input doesn't have a number, write a number please! </p>";
        $('#titeOutcome').html(titleOutcome);
        $('#subtitleOutcome').html(subtitleOutcome);
        $('#errorNum2').html(errorMessageNum2);
    } else if(num2 == ""){
        titleOutcome = "";
        subtitleOutcome = "";
        errorMessageNum2 = "<p> ERROR: The second input is empty, write a number please! </p>";
        $('#titleOutcome').html(titleOutcome);
        $('#subtitleOutcome').html(subtitleOutcome);
        $('#errorNum2').html(errorMessageNum2);
    } else {
        isNum2aNumber = true;
        errorMessageNum2 = "";
        $('#errorNum2').html(errorMessageNum2);
    }
    $('#errorNum2').bind("mouseenter mouseleave", function() {
        $(this).toggleClass("errorMessage");
    });
    if(isNum1aNumber == true && isNum2aNumber == true){
        $('#num1').val('');
        $('#num2').val('');
        var outcome = parseInt(num1) + parseInt(num2);
        titleOutcome = "Results";
        subtitleOutcome = "The outcome of "+num1+" + "+num2+" is: "+outcome;
        $('#titleOutcome').html(titleOutcome);
        $('#subtitleOutcome').html(subtitleOutcome);
        

        $('#subtitleOutcome').bind("mouseenter mouseleave", function() {
            $(this).toggleClass("successMessage");
        });
    }
});