//jQuery script for the Bubble Under Project Site

$ (document).ready(function(){

    //Enhancing the contact form with helper text (code below)

    $("#contactname").val("Please enter your full name");

    $("#telephone").val("Incl. local dialing code");

    $("eventdate").val("Format DDMMYYYY");

    $("#details").val("The more you can enter here, the less we have to check with you :)");

    $("input, textarea").focus(function(){
        $(this).select();
    });


    //Making the gallery captions appear on hover only (code below)

    $("figcaption").hide();

    $("figure").each(function(){
        //adding the behaviour for each figure here
        $(this).hover(function(){
            $(this).find("figcaption").slideDown('medium');
        },function(){
            $(this).find("figcaption").slideUp('medium');
        });
    });

});