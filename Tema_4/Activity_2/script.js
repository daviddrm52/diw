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
        $('#titleOutcome').html(titleOutcome);
        subtitleOutcome = "";
        $('#subtitleOutcome').html(subtitleOutcome);
        infoMessage = "";
        $('#infoMessage').html(infoMessage);
        errorMessageNum1 = "ERROR: The first input doesn't have a number, write a number please!";
        $('#errorNum1').html(errorMessageNum1);
        $('#errorNum1').bind("mouseenter mouseleave", function() {
            $(this).toggleClass("errorMessage");
        });
    } else if(num1 == ""){
        titleOutcome = "";
        $('#titeOutcome').html(titleOutcome);
        subtitleOutcome = "";
        $('#subtitleOutcome').html(subtitleOutcome);
        infoMessage = "";
        $('#infoMessage').html(infoMessage);
        errorMessageNum1 = "ERROR: The first input is empty, write a number please!";
        $('#errorNum1').html(errorMessageNum1);
        $('#errorNum1').bind("mouseenter mouseleave", function() {
            $(this).toggleClass("errorMessage");
        });
    } else {
        isNum1aNumber = true;
        errorMessageNum1 = "";
        $('#errorNum1').html(errorMessageNum1);
    }
    //Variable for the second input
    var num2 = $('#num2').val();
    var isNum2aNumber = false;
    //Comprobation of the last input
    if(isNaN(num2)){
        titleOutcome = "";
        $('#titeOutcome').html(titleOutcome);
        subtitleOutcome = "";
        $('#subtitleOutcome').html(subtitleOutcome);
        infoMessage = "";
        $('#infoMessage').html(infoMessage);
        errorMessageNum2 = "ERROR: The second input doesn't have a number, write a number please!";
        $('#errorNum2').html(errorMessageNum2);
        $('#errorNum2').bind("mouseenter mouseleave", function() {
            $(this).toggleClass("errorMessage");
        });
    } else if(num2 == ""){
        titleOutcome = "";
        $('#titleOutcome').html(titleOutcome);
        subtitleOutcome = "";
        $('#subtitleOutcome').html(subtitleOutcome);
        infoMessage = "";
        $('#infoMessage').html(infoMessage);
        errorMessageNum2 = "ERROR: The second input is empty, write a number please!";
        $('#errorNum2').html(errorMessageNum2);
        $('#errorNum2').bind("mouseenter mouseleave", function() {
            $(this).toggleClass("errorMessage");
        });
    } else {
        isNum2aNumber = true;
        errorMessageNum2 = "";
        $('#errorNum2').html(errorMessageNum2);
    }
    if(isNum1aNumber == true && isNum2aNumber == true){
        $('#num1').val('');
        $('#num2').val('');
        var outcome = parseInt(num1) + parseInt(num2);
        titleOutcome = "Results";
        subtitleOutcome = "The outcome of "+num1+" + "+num2+" is: "+outcome;
        infoMessage = "INFO: You have entered into the inputs "+num1+" & "+num2+".";
        $('#titleOutcome').html(titleOutcome);
        $('#subtitleOutcome').html(subtitleOutcome);
        $('#infoMessage').html(infoMessage);
        $('#infoMessage').bind("mouseenter mouseleave", function() {
            $(this).toggleClass("successMessage");
        });
        $('#userInfo').bind("mouseenter mouseleave", function() {
            $(this).toggleClass("successMessage");
        });
    }
});