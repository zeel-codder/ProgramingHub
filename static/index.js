$(function() {
    $("#more").click(function() {
        $("#mainhind_more").fadeIn("slow");
        $("#more").hide();
        $("#more_up").show();

    });
});

$(document).ready(function() {
    $("#more_up").click(function() {
        $("#mainhind_more").hide('show');
        $("#more_up").hide();
        $("#more").show();
    });
});


$('#log').click(function() {
    confirm("Do You Want To Log-Out!!!!")
});

$('#read_more').click(function() {
    $("#read_more").addClass("zee")
    $("#box").addClass("text_new")
    $("#pip").removeClass("zee")
    $("#read_less").removeClass("zee")
});
$('#read_less').click(function() {
    $("#pip").addClass("zee")
    $("#read_less").addClass("zee")
    $("#box").removeClass("text_new")
    $("#read_more").removeClass("zee")
});
$('#read_more1').click(function() {
    $("#read_more1").addClass("zee")
    $("#box2").addClass("text_new")
    $("#pip2").removeClass("zee")
    $("#read_less1").removeClass("zee")
});
$('#read_less1').click(function() {
    $("#pip2").addClass("zee")
    $("#read_less1").addClass("zee")
    $("#box2").removeClass("text_new")
    $("#read_more1").removeClass("zee")
});
$('#read_more2').click(function() {
    $("#read_more2").addClass("zee")
    $("#box3").addClass("text_new")
    $("#pip3").removeClass("zee")
    $("#read_less2").removeClass("zee")
});
$('#read_less2').click(function() {
    $("#pip3").addClass("zee")
    $("#read_less2").addClass("zee")
    $("#box3").removeClass("text_new")
    $("#read_more2").removeClass("zee")
});