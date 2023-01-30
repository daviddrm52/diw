//Items with numbers (dark green)
$(function() {
    $("#numbers, #drops").sortable({
        connectWith: ".connectedNumbers"
    }).disableSelection();
});
//Items with letters (light green)
$(function() {
    $("#letters, #drops").sortable({
        connectWith: ".connectedLetters"
    }).disableSelection();
});