$(document).ready(function() {
  $('.next').click(function() {
    $('#logo1').fadeOut();
    $('#product').fadeOut();
    $('.outside').hide();
    $('#tech').fadeIn();
    $('#madein').fadeIn();
    $('.contain').fadeIn();
  });
});
