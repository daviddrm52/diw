$("#buttonOutcome").click(function() {
    //Variable for the first input
    var num1 = $('#num1').val();
    //Comprobation of the first input
    if(isNaN(num1)){
        userMessageNum1 = "<p> You have entered: "+num1+" </p>";
        errorMessageNum1 = "<small> This input doesn't have a number, write a number please! </small>";
        $('#inputNum1').html(userMessageNum1);
        $('#errorNum1').html(errorMessageNum1);
    } else if(num1 == ""){
        userMessageNum1 = "";
        errorMessageNum1 = "<small> This input is empty, write a number please! </small>";
        $('#inputNum1').html(userMessageNum1);
        $('#errorNum1').html(errorMessageNum1);
    } else {
        userMessageNum1 = "<p> You have entered "+num1+". </p>";
        errorMessageNum1 = "";
        $('#inputNum1').html(userMessageNum1);
        $('#errorNum1').html(errorMessageNum1);
        $('#errorNum1').prepend('<img src="./img/thumbsUp.jpg" width="30%"/>');
        var outcome = parseInt(num1) + parseInt(num2);
        finalText = "The outcome of "+num1+" + "+num2+" is: "+outcome;
        $('#results').html(finalText);
    }
    //Variable for the last input
    var num2 = $('#num2').val();
    //Comprobation of the last input
    if(isNaN(num2)){
        userMessageNum2 = "<p> You have entered: "+num2+" </p>";
        errorMessageNum2 = "<small> This input doesn't have a number, write a number please! </small>";
        $('#inputNum2').html(userMessageNum2);
        $('#errorNum2').html(errorMessageNum2);
    } else if(num2 == ""){
        userMessageNum2 = "";
        errorMessageNum2 = "<small> This input is empty, write a number please! </small>";
        $('#inputNum2').html(userMessageNum2);
        $('#errorNum2').html(errorMessageNum2);
    } else {
        userMessageNum2 = "<p> You have entered "+num2+". </p>";
        errorMessageNum2 = "";
        $('#inputNum2').html(userMessageNum2);
        $('#errorNum2').html(errorMessageNum2);
        $('#errorNum2').prepend('<img src="./img/thumbsUp.jpg" width="30%"/>');
        var outcome = parseInt(num1) + parseInt(num2);
        finalText = "The outcome of "+num1+" + "+num2+" is: "+outcome;
        $('#results').html(finalText);
    }
    /*var outcome = parseInt(num1) + parseInt(num2);
    finalText = "The outcome of "+num1+" + "+num2+" is: "+outcome;
    $('#results').html(finalText);*/
});