// function zoom(e){
//   var zoomer = e.currentTarget;
//   e.offsetX ? offsetX = e.offsetX : offsetX = e.touches[0].pageX
//   e.offsetY ? offsetY = e.offsetY : offsetX = e.touches[0].pageX
//   x = offsetX/zoomer.offsetWidth*100
//   y = offsetY/zoomer.offsetHeight*100
//   zoomer.style.backgroundPosition = x + '% ' + y + '%';
// }

$(function(){
  $("#big-image img:eq(0)").nextAll().hide();
  $(".small-images img").click(function(e){
      var index = $(this).index();
      $("#big-image img").eq(index).show().siblings().hide();
  });
});