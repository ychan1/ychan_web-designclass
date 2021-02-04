$("document").ready(function() {

var x = document.getElementById("breadButtonAudio"); 
var y = document.getElementById("breadWalkAudio"); 


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

var text = $('h1').val()||$('h1').text();
$(".slider.round").click(function() {
        
        if(!$(document.body).hasClass('darkMode')) {    
        $(document.body).addClass('darkMode');   
        $('h1').text('CHOCO');
        } else {     
        $(document.body).removeClass('darkMode'); 
        $('h1').text(text);
          }

        
})
$( "#breadHouse" ).click( function() {
        if(!$("#breadHouse").hasClass('breadhouseButton')) {    
                $("#breadHouse").addClass('breadhouseButton');   
                
         } else {     
                $("#breadHouse").removeClass('breadhouseButton'); 
                
         }
});

let breadCounter = 0;//this has to be outside your click event listener so it doesn't reset to 0 when someone clicks!

$("#breadHouse").click(function() {
    breadCounter++;//this is to add 1 to breadCounter each time someone clicks
    let walkingBread = `<img class="walkingBread walkingAnimate" src="1.gif" alt="the walking bread" style="z-index: -${breadCounter}">`
    $("body").append(walkingBread);//add bread after each other
    y.play();
});
       
$(window).mousemove(function(e){
        $("#breadCursor").css({
                top: e.clientY,
                left: e.clientX,
        });
});

$(".founButton").mouseenter(function(){
        $("#foun1").hide();
        $("#foun2").show();
}).mouseleave(function(){
        $("#foun2").hide();
        $("#foun1").show();
});
$(".portButton").mouseover(function(){
        $("#port1").hide();
        $("#port2").show();
}).mouseleave(function(){
        $("#port2").hide();
        $("#port1").show();
});
$(".otherButton").mouseover(function(){
        $("#other1").hide();
        $("#other2").show();
}).mouseleave(function(){
        $("#other2").hide();
        $("#other1").show();
});;





});



