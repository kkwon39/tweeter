//This js file changes number and font color of counter element depending on number of text typed in input field.
$(document).ready(function() {
    $(".txt").on("input", function(event) {
        let count = 140 - this.value.length
        $(this).siblings(".counter").text(count)
        if (count < 0) {
            $(this).siblings(".counter").css({ 'color': 'red', 'font-size': '120%' });
        } else {
            $(this).siblings(".counter").css({ 'color': 'black', 'font-size': '100%' });
        }
    });
});