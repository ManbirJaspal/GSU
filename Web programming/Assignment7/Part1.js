$(document).ready(function () {
    $('.radioButtons input[value = "cc"]').click(function () {
        $(this).parentsUntil('.radioButtons').nextAll('.card').show();
    });

    $('.radioButtons input[value! = "cc"]').click(function () {
        $(this).parentsUntil('.radioButtons').nextAll('.card');
    });
}); 

$(document).ready(function(){
    $("button").click(function(){
        $("p").text("Transfer the amount to: reg. $957.00, to account 0009286322");
    });
});

$(document).ready(function () {
  
  $("#cardid").keypress(function (e) {
     
     if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {
        
        $("#err").html("Only Numbers").show().fadeOut("slow");
               return false;
    }
   });
});