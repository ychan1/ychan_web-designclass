$("document").ready(function() {

var x = document.getElementById("breadButtonAudio"); 
var y = document.getElementById("breadWalkAudio"); 
var z = document.getElementById("giggleAudio"); 
//transition
    //add click event listener to everything with class "link". Because <a> tags have a default behavior, we have to cancel that out first by using argument "e" in anonymous function and then using the javascript .preventDefault() method.
    $(".link").click(function(e) {
        e.preventDefault();

        //new variable to store whatever href attribute the clicked link has
        let thisLink = $(this).attr('href');

        //adding class "slide" to the div with class "transition" because all animations are stored in CSS under .transition.slide [child]
        $(".transition").addClass("slide");

        //this is vanilla javascript for making the browser wait for a specified amount of time before running a function, in this case 900 milliseconds because that's how long it'll take for all the slide transitions to run (they're set to 0.3s each in the CSS)
        setTimeout(function() {
            //vanilla javascript for taking someone to a new URL. window.location is the function that's normally called when you click a link, but we have to manually call it here because we did preventDefault();
            window.location = thisLink;
        }, 900);
   
});
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


//walking bread    
let breadCounter = 0;   //this has to be outside your click event listener so it doesn't reset to 0 when someone clicks!
var bun = true;
var meringue = false;
var caramel = false;
$("#breadHouse").click(function() {
    breadCounter++;//this is to add 1 to breadCounter each time someone clicks
    let whichBread;
    if(bun==true) {
        whichBread = "1.gif";
    } else if(meringue==true) {
        whichBread = "mWalk.gif";
    } else if(caramel==true) {
        whichBread = "cWalk.gif";
    }
    let walkingBread = `<img class="walkingBread walkingAnimate" src="${whichBread}" alt="the walking bread" style="z-index: -${breadCounter}">`
    $("body").append(walkingBread);
    y.play();
});
$("#bunButton").click(function() {
    bun = true;
    meringue = false;
    caramel = false;
});
$("#meringueButton").click(function() {
    bun = false;
    meringue = true;
    caramel = false;
});
$("#caramelButton").click(function() {
    bun = false;
    meringue = false;
    caramel = true;
});


$( "#cakeButton" ).click( function() {
        $("#breadHouse").attr("src", "cakeMachine.png");
})
$( "#croissantButton" ).click( function() {
        $("#breadHouse").attr("src", "breadMachine.png");
})
$( "#pancakeButton" ).click( function() {
        $("#breadHouse").attr("src", "pancakeMachine.png");
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

$('.aboutGifs1').hover(function(){
        $('.imageDesc1').fadeToggle("slow", "linear");
})
$('.aboutGifs2').hover(function(){
        $('.imageDesc2').fadeToggle("slow", "linear");
})

$('.aboutGifs3').hover(function(){
        $('.imageDesc3').fadeToggle("slow", "linear");
})

$('#sendClick').click(function(){
        $('.chefBread').animate({
                top: '30%'
              }, 100);
              $('.chefBread').animate({
                top: '35%'
              }, 100);       
        z.play();
        })
      
// works page
const colors =[
        '#ff9900',
        '#ffad33',
        '#ff8000',
        '#ffff4d'
]
function createSquare(){
        const section = document.getElementById('squares');
        const square = document.createElement('span');

        var size = Math.random() *50;

        square.style.width =20+size+'px';
        square.style.height =20+size+'px';

        square.style.top =Math.random() * innerHeight+'px';
        square.style.left =Math.random() * innerWidth+'px';

        const bg =colors[Math.floor(Math.random()*colors.length)];
        square.style.background =bg;

        section.appendChild(square);
        setTimeout(()=>{
                square.remove()
        },6000)
}
setInterval(createSquare,150);

//on scroll

//declaring a couple variables here to hold the initial position of your egg. The jQuery offset() method returns how far from the top left of the document your selected element is, so to get the top and left properties separately, you have to use object notation to get its .top and .left.
let eggStartTop = $(".crackEgg").offset().top;
let eggStartLeft = $(".crackEgg").offset().left;

//declaring a boolean set to false at first
let cracked = false;

$(window).scroll(function(){
        //new variable "scrollPos" to hold however far down the window you've scrolled. "this" refers to the window (since it's the thing the scroll event listener is attached to), and "scrollY" is a vanilla javascript method for getting the vertical scrollbar position.
        let scrollPos = this.scrollY;

        //updating the egg's position by adding how far someone has scrolled to its initial starting position
        //changed to animate 
        $(".crackEgg").animate({
                top: eggStartTop + scrollPos,
                left: eggStartLeft
        },100);

        //this conditional checks whether the scrollbar position + the current height of the window in view is equal to the document's entire height. When it's equal, it means someone has scrolled to the bottom.
        if($(window).scrollTop() + $(window).height() == $(document).height()) {

                //switching cracked to true
                cracked = true;

                //once cracked == true, you can run all your changes without having to guess how long someone might take to get to the bottom of the page. 
                if(cracked == true) {
                        //got this from the callback function in your .crackEgg animation
                        $(".crackEgg").hide();
                        $(".crackEgg2").fadeIn(1000);
                        setTimeout(function(){
                                $(".crackEgg2").fadeOut("slow");
                        },300);

                        //got this from the callback function in your .eggBowl animation. Here's where you can animate the position of your eggBowl if you want.
                        $(".eggBowl").fadeOut(3200);
                        $(".eggBowl2").fadeIn(3200);

                        //after everything runs, reset cracked to false to prevent your elements from disappearing/reappearing when someone scrolls even a little bit
                        cracked = false;
                }
        }

        //this is checking to see if someone is at the top of your page, aka when the window's scrollTop is 0
        if($(window).scrollTop() == 0) {

                //making sure cracked is set to false just in case someone scrolled down and up quickly
                cracked = false;

                //hiding all the things that appear at the end of your animation, and showing all the stuff that should be there at the start
                $(".eggBowl2").hide();
                $(".eggBowl").show();
                $(".crackEgg").fadeIn(1000);

                //resetting .crackEgg's offset to its initial starting position, since it was updated with the scrollY position when it last was on the page (before it got hidden)
                $(".crackEgg").offset({
                        top: eggStartTop,
                        left: eggStartLeft
                });
        }
        
        
});


$('.aboutGifs1').click(function(){
        $("#bR1").fadeToggle();

});
$('.aboutGifs2').click(function(){
        $("#bR2").fadeToggle();

});
$('.aboutGifs3').click(function(){
        $("#bR3").fadeToggle();

});




});