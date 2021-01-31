$("document").ready(function() {

var x = document.getElementById("breadButtonAudio"); 

// bread button
$("#bread1").click(function(){
        $("#bread1").hide();
        $("#bread2").show().css("animation-play-state", "running");
        $(".buttons").fadeIn();
        x.play();

        })
$("#bread2").click(function() {
         $("#bread2").hide();
         $("#bread1").show().css("animation-play-state", "running");
         $(".buttons").fadeOut();
         
});

$(".slider.round").click(function() {
        if(!$(document.body).hasClass('darkMode')) {    
        $(document.body).addClass('darkMode');   
        $('h1').text('CHOCO');
        } else {     
        $(document.body).removeClass('darkMode'); 
        $('h1').text('VANILLA');  }

        
})
$( "#breadHouse" ).click( function() {
        if(!$("#breadHouse").hasClass('breadhouseButton')) {    
                $("#breadHouse").addClass('breadhouseButton');   
                
         } else {     
                $("#breadHouse").removeClass('breadhouseButton'); 
                
         }
});

$( "#breadHouse" ).click( function() {
        // $("#walkingBread").fadeIn(400,'linear',function(){
        //         $("#walkingBread").animate({top:'90%',
        //         left:'-5%'},800,'linear');  }
        
        if(!$(".walkingBread").hasClass('walkingAnimate')) {    
                $(".walkingBread").fadeIn().addClass('walkingAnimate');   
                
         } 
         else {     
                $(".walkingBread").removeClass('walkingAnimate'); 
                
         }



 })
       


});



