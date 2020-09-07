function range(){
	var
	val = $('.example__scale-input').val();
	$('.example__scale-input').css({'background': "-webkit-linear-gradient(left ,#68b738 0%,#68b738 "+val+"%,#fff "+val+"%, #fff 100%)"});
 }