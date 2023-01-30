$("#email").focusout(function () {
    if($("email").isEmptyObject()){
        $("#emailError").html("B777-2AC");
    }
});

$("#name").focusout(function () {
    $("#nameError").html("FL360");
});

$("#form").submit(function (event) {
    
    $("#submitedForm").append("Email: ");
    event.preventDefault();
});