// jQuery(document).ready(function($){
//     $('a[rel*=colorbox]').colorbox(); 
// });

// $(document).ready(function(){
//     if (Modernizr.touch) {
//         // show the close overlay button
//         $(".close-overlay").removeClass("hidden");
//         // handle the adding of hover class when clicked
//         $(".effects .img").click(function(e){
//             e.preventDefault();
//             e.stopPropagation();
//             if (!$(this).hasClass("hover")) {
//                 $(this).addClass("hover");
//             }
//         });
//         // handle the closing of the overlay
//         $(".close-overlay").click(function(e){
//             e.preventDefault();
//             e.stopPropagation();
//             if ($(this).closest(".img").hasClass("hover")) {
//                 $(this).closest(".img").removeClass("hover");
//             }
//         });
//     } else {
//         // handle the mouseenter functionality
//         $("#effect-1 .overlay").mouseenter(function(){
//             $(this).removeClass("hidden");
//             $(this).addClass("hover");
//         })
//         // handle the mouseleave functionality
//         .mouseleave(function(){
//             $(this).removeClass("hover");
//         });
//     }
// });


$(document).ready(function(){
    $(".wrap").mouseenter(function() {						
      $(this).find('.gallery-overlay').fadeIn(100);
      $(this).find('.icon-play').fadeIn(100);
      $(this).find('.user-name').fadeIn(100);
      $(this).find('.book-name').fadeIn(100);
    }).mouseleave(function(){	
      $(this).find('.gallery-overlay').stop().fadeOut(100);
      $(this).find('.icon-play').stop().fadeOut(100);
      $(this).find('.user-name').stop().fadeOut(100);
      $(this).find('.book-name').stop().fadeOut(100);
    })
    
    $(".gallery-img").mouseenter(function() {	
      $(this).addClass('.desaturate');
    }).mouseleave(function(){
      $(this).removeClass('.desaturate');
    })
}); 