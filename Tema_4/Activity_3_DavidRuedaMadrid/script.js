jQuery.fn.textArea1 = function () {
    $(this).each(function () {
        textArea = $(this);
        divTextArea = $("#divTextArea");
        divTextArea.html(textArea.val().length + " characters");
        $("textarea").keyup(function () {
            divTextArea.html(textArea.val().length + " characters");
        });
    });
}

$(document).ready(function(){
    $("textarea").textArea1();
});
