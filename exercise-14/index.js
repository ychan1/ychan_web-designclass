$("document").ready(function(){

    const mq = window.matchMedia(`(max-width: 768px)`);
    $(".menuIcon").click(function(){
        $("nav").toggle();
        
    });
    if (mq.matches) {
        $(".menuIcon").click(function(){
            $("nav").toggle();
            
        });
    }

});