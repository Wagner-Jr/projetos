$(function(){
    //Botão topo
    $(window).scroll(function(){
        if ($(this).scrollTop() > 100) {
            $('.top').fadeIn();
            $('#WAButton').fadeIn();
        } else {
            $('.top').fadeOut();
            $('#WAButton').fadeOut();
        }
    });

    $('a.top').click(function(event){
      event.preventDefault();
      $('html, body').animate({
        scrollTop : 0
      }, 1000);
    });
})