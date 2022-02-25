console.log("Hello world!");
$(document).ready(function(){
    // Add smooth scrolling to all links
    $(".scroll").on('click', function(e) {
e.preventDefault()
var myWork= $(this).attr("href")
$("html, body").animate({
  "scrollTop": $(myWork).offset().top
}, 800)
})
        });