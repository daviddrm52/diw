$("#buttonOutcome").click(function() {
    //Variable for the first input
    var num1 = $('#num1').val();
    var isNum1aNumber = false;
    //Comprobation of the first input
    if(isNaN(num1)){
        $('#infoAddition').remove();
        //if the id doesn't exist, will be created
        if($("#messageInput1").length == 0){
            $('#messages').append('<p id="messageInput1"> </p>');
            console.log("Created messageInput1");
        }
        messageNum1 = "ERROR: The first input doesn't have a number!";
        $('#messageInput1').html(messageNum1);
        //Add the class for the css
        $('#messages').bind("mouseenter mouseleave", function() {
            $(this).addClass("errorMessage");
            $(this).removeClass("successMessage");
        });
    } else if(num1 == ""){
        $('#infoAddition').remove();
        //if the id doesn't exist, will be created
        if($("#messageInput1").length == 0){
            $('#messages').append('<p id="messageInput1"> </p>');
            console.log("Created messageInput1");
        }
        messageNum1 = "ERROR: The first input is empty!";
        $('#messageInput1').html(messageNum1);
        //Add the class for the css
        $('#messages').bind("mouseenter mouseleave", function() {
            $(this).addClass("errorMessage");
            $(this).removeClass("successMessage");
        });
    } else {
        isNum1aNumber = true;
        $('#messageInput1').remove();
    }
    //Variable for the second input
    var num2 = $('#num2').val();
    var isNum2aNumber = false;
    //Comprobation of the last input
    if(isNaN(num2)){
        $('#infoAddition').remove();
        //if the id doesn't exist, will be created
        if($("#messageInput2").length == 0){
            $('#messages').append('<p id="messageInput2"> </p>');
            console.log("Created messageInput2");
        }
        messageNum2 = "ERROR: The second input doesn't have a number!";
        $('#messageInput2').html(messageNum2);
        //Add the class for the css
        $('#messages').bind("mouseenter mouseleave", function() {
            $(this).addClass("errorMessage");
            $(this).removeClass("successMessage");
        });
    } else if(num2 == ""){
        $('#infoAddition').remove();
        if($("#messageInput2").length == 0){
            $('#messages').append('<p id="messageInput2"> </p>');
            console.log("Created messageInput2");
        }
        messageNum2 = "ERROR: The second input is empty!";
        $('#messageInput2').html(messageNum2);
        //Add the class for the css
        $('#messages').bind("mouseenter mouseleave", function() {
            $(this).addClass("errorMessage");
            $(this).removeClass("successMessage");
        });
    } else {
        isNum2aNumber = true;
        $('#messageInput2').remove();
    }
    //If the two inputs are correct
    if(isNum1aNumber == true && isNum2aNumber == true){
        $('#num1').val('');
        $('#num2').val('');
        //if the id doesn't exist, will be created
        if($("#infoAddition").length == 0){
            $('#messages').append('<p id="infoAddition"> </p>');
            console.log("Created infoAddition");
        }
        var addition = parseInt(num1) + parseInt(num2);
        infoMessage = "INFO: The addition of "+num1+" & "+num2+" results in "+addition+".";
        $('#infoAddition').html(infoMessage);
        //Add the class for the css
        $('#messages').bind("mouseenter mouseleave", function() {
            $(this).toggleClass("successMessage");
        });
    }
});