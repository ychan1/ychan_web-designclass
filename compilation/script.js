$("document").ready(function() {



$('#a1').hover(function(){
    $(".photoDesc").attr("src", "1.jpg");
    $('h1').text('Exercise 1');
    $('p').text('Seven Principles of Typographic Contrast');
})
$('#a2').hover(function(){
    $(".photoDesc").attr("src", "2.jpg");
    $('h1').text('Exercise 4');
    $('p').text('Responsive Design');
})
$('#a3').hover(function(){
    $(".photoDesc").attr("src", "3.jpg");
    $('h1').text('Exercise 5');
    $('p').text('Marquee animation');
})
$('#a4').hover(function(){
    $(".photoDesc").attr("src", "4.jpg");
    $('h1').text('Project 1');
    $('p').text('Lyric Styling');
})
$('#a5').hover(function(){
    $(".photoDesc").attr("src", "5.jpg");
    $('h1').text('p5.js Paint 1');
    $('p').text('a paint program');
})
$('#a6').hover(function(){
    $(".photoDesc").attr("src", "6.jpg");
    $('h1').text('p5.js Paint 2');
    $('p').text('a paint program that includes an image');
})
$('#a7').hover(function(){
    $(".photoDesc").attr("src", "7.jpg");
    $('h1').text('p5.js Paint 3');
    $('p').text('a paint program using if else conditional statements');
})
$('#a8').hover(function(){
    $(".photoDesc").attr("src", "8.jpg");
    $('h1').text('Exercise 13');
    $('p').text('a Colorful Array');
})
$('#a9').hover(function(){
    $(".photoDesc").attr("src", "9.jpg");
    $('h1').text('Project 2');
    $('p').text('Personal Project-Bun Man');
})


$('.links').mouseenter(function(){
    
    $("#text").animate({
         top:'10%'       
        },1500,'swing');        
    $(".photoDesc").fadeIn(1500);    
})
.mouseleave(function(){
    $("#text").animate({
        top:'45%'       
       },1500,'swing');
       $(".photoDesc").fadeOut(1500);   
       $('h1').text('Crystal');
    $('p').text('Wintersession Web Design Course Work'); 
});










});