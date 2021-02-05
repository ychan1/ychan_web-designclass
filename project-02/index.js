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
// bread house button
$( "#cakeButton" ).click( function() {
        $("#breadHouse").attr("src", "cakeMachine.png");
})
$( "#croissantButton" ).click( function() {
        $("#breadHouse").attr("src", "breadMachine.png");
})
$( "#pancakeButton" ).click( function() {
        $("#breadHouse").attr("src", "pancakeMachine.png");
})
//walking bread       
$( "#bunButton" ).click( function() {
        $(".walkingBread").attr("src", "1.gif");
})
$( "#meringueButton" ).click( function() {
        $(".walkingBread").attr("src", "mWalk.gif");
})
$( "#caramelButton" ).click( function() {
        $(".walkingBread").attr("src", "cWalk.gif");
})













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

var html ="";
        for(i=0;i<16;i++){
                //in your html template inside the <img> tag, i added an inline "onerror" event listener which will fire if there's a problem loading your file (aka, when your site can't find the image because of the wrong extension). The format for doing that is onerror="myFunction()", which is how you'd tell it to run a certain javascript function if there's a loading problem. You could write a "myFunction" function inside your javascript file if you need to do something complicated, but in this case, all you need is to update the src to have a different extension. So I've just written vanilla javascript straight into the onerror event listener. The javascript is this.src='newSource', which is just saying "change the src of THIS img to 'newSource'. In this case, 'newSource' is actually the exact same as the regular src except for the file extension, so I just repeated the same thing from <img src="..."> and only changed the .jpg to .jpeg at the end (or from .png to .gif in the case of your portfolio loop). This will only work if there's only 1 other type of extension in your folder! 
                html+=`
                        <div class="img">
                        <img src="../foundations/f${[i+1]}.jpg" onerror="this.src='../foundations/f${[i+1]}.jpeg';">
                        </div>
                
                `;
        }
        $("#founGallery").append(html);
        
        var htmlport ="";
        for(i=0;i<14;i++){
                htmlport+=`
                        <div class="img">
                        <img  src="../portfolio/p${[i+1]}.jpg" onerror="this.src='../portfolio/p${[i+1]}.gif';">
                        </div>
                
                `;
        }
        $("#portGallery").append(htmlport);
        
        var htmlother ="";
        for(i=0;i<7;i++){
                htmlother+=`
                        <div class="img">
                        <img  src="../other/o${[i+1]}.jpg">
                        </div>
                
                `;
        }
        $("#otherGallery").append(htmlother);
        
        });
        
        
        
        



