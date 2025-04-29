// script.js
// Uses jQuery version 3.7.1

function getFooterHtml()
{
    return `&#169; Echo Schwartz ${new Date().getFullYear()}`;
}

// Document loaded
$(document).ready(function() 
{
    // Hide expanded elements
    $("#expandable0").hide();
    $("#expandable1").hide();
    $("#expandable2").hide();
    $("#expandable3").hide();
    $("#expandable4").hide();
    $("#expandable5").hide();
    $("#expandable6").hide();

    // Set footer with current year
    $("#footer").html(getFooterHtml());

    $("#button0").click(function() {
        $("#expandable0").slideToggle();
    });

    $("#button1").click(function() {
        $("#expandable1").slideToggle();
    });

    $("#button2").click(function() {
        $("#expandable2").slideToggle();
    });

    $("#button3").click(function() {
        $("#expandable3").slideToggle();
    });

    $("#button4").click(function() {
        $("#expandable4").slideToggle();
    });

    $("#button5").click(function() {
        $("#expandable5").slideToggle();
    });

    $("#button6").click(function() {
        $("#expandable6").slideToggle();
    });
});