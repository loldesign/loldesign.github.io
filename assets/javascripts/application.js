jQuery(document).ready(function($) {

  var $galleryImages = $('.gallery li a');
  if($galleryImages[0]){
    $galleryImages.fancybox({
      maxWidth  : 800,
      maxHeight : 600,
      fitToView : false,
      width   : '70%',
      height    : '70%',
      autoSize  : false,
      closeClick  : false,
      openEffect  : 'none',
      closeEffect : 'none'
    });
  }
});