var timesClicked = 0;

$('button').on("click",function(){
	timesClicked++;

	if (timesClicked%2==0) {
$('#firstcollapse').removeClass('changer');
$('#firstcollapse').removeClass('.container');
} 
else {
	$('#firstcollapse').addClass('.container');
	$('#firstcollapse').addClass("changer");

	$('.navbar-default .navbar-nav > li > a').css("color","white");
	$('.navbar-default .navbar-collapse').css("border-color","#16181a");
}
});



$(window).resize(function() {
    var width = $(window).width();
    if (width > 770) {
              $('#firstcollapse').removeClass('changer');
              $('#firstcollapse').removeClass('.container');
    } 
    else{
    	  $('#firstcollapse').addClass('changer');
    	  $('#firstcollapse').addClass('.container');
    	  $('.navbar-default .navbar-nav > li > a').css("color","white");
	$('.navbar-default .navbar-collapse').css("border-color","#16181a");
    }
});