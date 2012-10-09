$('#sh-toggles li').click(function(){
	var t = $('#'+$(this).attr('data-tango'));
	var a = t.hasClass('active');
	$('.nav-section').removeClass('active');
	if(!a){
		t.addClass('active');
	}
});