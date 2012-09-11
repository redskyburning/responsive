function vInfo(){
	var vw = $(window).width();
	var vh = $(window).height();
	vm = (vw > vh) ? vh : vw;
	var ratio = (vw < vh) ? vh / vw : vw /vh;
	var arr = [vw,vh,vm,Math.round(ratio*100)/100];
	return arr;
}

function vWatcher(){
	$('body').css('font-size',(vm * .01) + 'px');
}

function toggleNav(){
	console.log('contact');
	var t = $('#site-nav');
	if(t.hasClass('active')){
		t.removeClass('active');
	} else {
		t.addClass('active');
	}
}

$(document).ready(function(){
    /* if(!Modernizr.cssvminunit){
        vWatcher();
    } */
	$('#vw-tango').html(vInfo().join(', '));
	$('#nav-toggle').click(function(){
		toggleNav();
	});
	
});

$(window).resize(function() {
    //if(!Modernizr.cssvminunit){
        vWatcher();
    //}
	$('#vw-tango').html(vInfo().join(', '));
});