 var x = document.querySelector(".section1");
 var x2 = document.querySelector(".yakor");

 x.addEventListener('click', function () {
     $('html, body').animate({
         scrollTop: $(".id2").offset().top
     }, 1000);
 });

 x2.addEventListener('click', function (event) {
     $('html, body').animate({
         scrollTop: $(".header").offset().top
     }, 1000);
     
//var p = $( ".id2" );
//var offset = p.offset();
//console.log( "top: " + offset.top );
//
//  var pageCoords = "( "+ event.pageY + " )";
//     
//console.log( "top: " + pageCoords );
// if(offset.top > offset.top-1){
//    $(".yakor").hide();
//}
//else{
//    $(".yakor").show();
//}

 });





 
