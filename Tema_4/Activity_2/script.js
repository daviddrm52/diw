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
        userMessageNum1 = "<p> You have entered: "+num1+" </p>";
        errorMessageNum1 = "<small> This input doesn't have a number, write a number please! </small>";
        $('#message').html(finalText);
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
        num1Number = true;
        $('#inputNum1').html(userMessageNum1);
        $('#errorNum1').html(errorMessageNum1);
        $('#imageTrue1').prepend('<img src="./img/thumbsUp.jpg" width="30%"/>');
    }
    //Variable for the last input
    var num2 = $('#num2').val();
    var num2Number = false;
    //Comprobation of the last input
    if(isNaN(num2)){
        finalText = "";
        userMessageNum2 = "<p> You have entered: "+num2+" </p>";
        errorMessageNum2 = "<small> This input doesn't have a number, write a number please! </small>";
        $('#message').html(finalText);
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
        num2Number = true;
        $('#inputNum2').html(userMessageNum2);
        $('#errorNum2').html(errorMessageNum2);
        $('#imageTrue2').prepend('<img src="./img/thumbsUp.jpg" width="30%"/>');
    }
    if(num1Number == true && num2Number == true){
        $('#num1').val('');
        $('#num2').val('');
        var outcome = parseInt(num1) + parseInt(num2);
        resultH3 = "Results";
        finalText = "The outcome of "+num1+" + "+num2+" is: "+outcome;
        $('#message').html(finalText);
        $('#results').html(resultH3);
    }
});