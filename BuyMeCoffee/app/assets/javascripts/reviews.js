$(document).ready(function() {
  $('.this-form').on('click','.rating', submitRating);
  $('.par').on('click','.popup1', ratingForm);
  $('body').on('click', 'button.x-button3', function(event){
      document.getElementById('abc2').style.display = "none";
  });
  $('.this-form').on('click', ".dropdown-button", function() {
    var $button, $menu;
    $button = $(this);
    $menu = $button.siblings(".dropdown-menu");
    $menu.toggleClass("show-menu");
    $menu.children("li").click(function() {
      $menu.removeClass("show-menu");
      $button.html($(this).html());
    });
  });
});


var ratingForm = function(event){
  event.preventDefault();
  $target = $(event.target);
  user = {user: $target.data('id')};
  myData = $target.serialize() + $.param(user);

  $.ajax({
    url: '/reviews/new',
    method: 'get',
    dataType: 'html'

  }).done(function(response){
    $('.this-form').append(response);
    document.getElementById('abc2').style.display = "block";
  }).fail(function(error){
    console.log(error);
  });
};

var submitRating = function(event){
  event.preventDefault();
  $target = $(event.target);
  var rate = {rating: $target.text()};
  var myData = $.param(rate) + '&' + $.param(user);

  $.ajax({
    url: '/reviews',
    method: 'post',
    data: myData

  }).done(function(response){
    document.getElementById('abc2').style.display = "none";
    location.reload();
  }).fail(function(error){
    console.log(error);
  });
};