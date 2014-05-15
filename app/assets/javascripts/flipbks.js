// jQuery(document).ready(function($){
//     $('a[rel*=colorbox]').colorbox(); 
// });

$(document).ready(function(){
  
  // Rollover for galleries
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
  });

  $(".wrap2").mouseenter(function() {            
    $(this).find('.gallery-overlay2').fadeIn(100);
    $(this).find('.icon-play').fadeIn(100);
    $(this).find('.user-name').fadeIn(100);
    $(this).find('.book-name').fadeIn(100);
  }).mouseleave(function(){  
    $(this).find('.gallery-overlay2').stop().fadeOut(100);
    $(this).find('.icon-play').stop().fadeOut(100);
    $(this).find('.user-name').stop().fadeOut(100);
    $(this).find('.book-name').stop().fadeOut(100);
  });
  
  // Checks to see if the box is checked for editing
  $('.wrap3 input:checkbox:checked').each(function() {
   $(this).prev().addClass('photo-overlay');
  });
  
  // Toggles the styling for photo checkboxes     
  $('.insta-photo').on('click', function() {
    var image = $(this);
  
    if (image.hasClass('photo-overlay')) {
      image.removeClass('photo-overlay');
      image.next().removeAttr('checked');
    } else {
      image.addClass('photo-overlay');
      image.next().prop('checked', true);
    }
  });
       
}); 