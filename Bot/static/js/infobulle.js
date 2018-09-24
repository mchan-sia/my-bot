

var width = $(window).width();
$(window).on('resize', function(){
   if($(this).width() != width){
      width = $(this).width();
       console.log(width);
   }
});

