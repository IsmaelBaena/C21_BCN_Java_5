const zoom = "Light Bulb zoom ";
const light = "Light Level ";
const zoomHTML = $("#lbh");
const lightHTML = $("#llh");

$(".on").hide();
$("div").hide();

$(".btt").click(() => {
    $(".on").toggle();
    $(".off").toggle();
    $("div").toggle();
});

$("#zoom").change(() => {
    let val = $("#zoom").val();
    zoomHTML.html(zoom +val);
    jQuery(".light").css("zoom", val);
});

$("#lightLevel").change(() => {
    let val = $("#lightLevel").val();
    lightHTML.html(light + val);
    jQuery(".light").css("opacity", val);
});