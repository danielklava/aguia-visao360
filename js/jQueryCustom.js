$(document).ready(function(){

$(".btn-link:nth-child(1)").addClass("active");

$(".btn-link:nth-child(2)").click(function(){
    $(".btn-link:nth-child(1)").removeClass("active");
    $(this).addClass("active");
    $(".number-perc").html("55");
})

$(".btn-link:nth-child(1)").click(function(){
    $(".btn-link:nth-child(2)").removeClass("active");
    $(this).addClass("active");
    $(".number-perc").html("78");
})

});