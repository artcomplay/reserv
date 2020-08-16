$(document).ready( function(){
if ($(window).width() > 991) {
	$('.slider').bxSlider({
		// https://bxslider.com/options/
		// mode: 'horizontal',
		mode: 'fade',
		speed: 300,
		controls: false,
		auto: true,
		pause: 5000,
		responsive:true,
		captions: false,
		tickerHover: true
	});
}
	$('.slider_client_logo').bxSlider({
		controls: true,
		auto: true,
		tickerHover: true,
		mode: 'horizontal',
		pager: false,
		minSlides: 1,
		maxSlides: 5,
		moveSlides: 1,
		slideMargin: 0,
		slideWidth: 200,
		infiniteLoop: true
	});

	$('.bx-pager-item .bx-pager-link').empty();
	$(window).resize(function() {
		$('.bx-pager-item .bx-pager-link').empty();
	});
	$('.bx-controls-direction .bx-prev').empty();
	$('.bx-controls-direction .bx-prev').html('<svg viewBox="0 0 477.175 477.175"><path d="M145.188,238.575l215.5-215.5c5.3-5.3,5.3-13.8,0-19.1s-13.8-5.3-19.1,0l-225.1,225.1c-5.3,5.3-5.3,13.8,0,19.1l225.1,225c2.6,2.6,6.1,4,9.5,4s6.9-1.3,9.5-4c5.3-5.3,5.3-13.8,0-19.1L145.188,238.575z"/></svg>');
	$('.bx-controls-direction .bx-next').empty();
	$('.bx-controls-direction .bx-next').html('<svg viewBox="0 0 477.175 477.175"><path d="M145.188,238.575l215.5-215.5c5.3-5.3,5.3-13.8,0-19.1s-13.8-5.3-19.1,0l-225.1,225.1c-5.3,5.3-5.3,13.8,0,19.1l225.1,225c2.6,2.6,6.1,4,9.5,4s6.9-1.3,9.5-4c5.3-5.3,5.3-13.8,0-19.1L145.188,238.575z"/></svg>');





	var images = $('.stock .item img');

	for(var i = 0; i < images.length; i++ ){

		var img = $('.stock .item:eq(' + i + ') img');
			src = $('.stock .item:eq(' + i + ') img').attr('src'),
			par = img.parent();
		
		img.remove();
		par.css('background', 'url("' + src + '")');
		par.css('background-size', 'cover');
		par.css('background-repeat', 'no-repeat');
		par.css('background-position', 'center center');
	}

	$('.accordion > ul > li > a > .right_block_arrow').on('click', function(e){
		e.preventDefault();

		var button = $(this).parent('a'),
			parent = button.parent(),
			dopMenu   = parent.children('ul'),
			menus  = $('.accordion > ul > li.menu'),
			dopMenus = menus.children('ul');

		if(parent.hasClass('menu')){
			
			if(parent.hasClass('active')){
				// close
				menus.removeClass('active');
				dopMenus.hide(300);
			}
			else {
				//open
				menus.removeClass('active');
				dopMenus.css('display','none');
				parent.addClass('active');
				dopMenu.show(300);
			}
		}
		else {
			menus.removeClass('active');
			dopMenus.hide(300);
		}
	});

	$(window).resize(function() {
		if ($(window).width() > 793) {
			$('.header_menu').css('display', 'block');
			$('.btn_menu').css('display', 'none');
			$('.btn_menu').removeClass('active');
		} else {
			$('.header_menu').css('display', 'none');
			$('.btn_menu').css('display', 'block');
			$('.btn_menu').removeClass('active');
		}

    });

	$('.spoiler1').on('click', function(){
		$('.open_text_ddwdw').fadeToggle();
		$(this).toggleClass('asdfgtrertrfe');
		 
	  if(!$(this).hasClass('asdfgtrertrfe')){
		$(this).html('Подробнее');
	  } else {
		$(this).html('Скрыть');
	  }
		
		
		
	});
	$('.btn_menu').on('click', function(e){
		e.preventDefault();

		if ($('.btn_menu').hasClass('active')) {
			$('.btn_menu').removeClass('active');
			$('.header_menu').css('display', 'none')
		}
		else {
			$('.btn_menu').addClass('active');
			$('.header_menu').css('display', 'block')
		}

	});


	$('.js_call').on('click', function(e){
		e.preventDefault();

		$('.call_block').fadeIn(100);
		// $('.wrapper').css('filter','blur(3px)');
		$('.call_block').css('display','block');
	});


	
	// button on top
$(function() {
$(window).scroll(function() {
if($(this).scrollTop() != 0) {
$('#toTop').fadeIn();
} else {
$('#toTop').fadeOut();
}
});
$('#toTop').click(function() {
$('body,html').animate({scrollTop:0},800);
});
});
});




$(document).mouseup(function(e){

	var popup = $('.call_form');
	if(e.target != popup[0] && popup.has(e.target).length === 0 ){
		$('.call_block').fadeOut(100);
	}

	if ($(window).width() < 794) {
		var menu = $('.header');
		if(e.target != menu[0] && menu.has(e.target).length === 0 ){
			$('.btn_menu').removeClass('active');
			$('.header_menu').fadeOut(100);
		}
	}
	


});


$(window).scroll(function(){
	var currentScroll = $(document).scrollTop()-350;
	if($(document).width() > 800) {
	if(currentScroll > $('.header').height()-350){
		$('.header').addClass('fixed');
		$('.header').css('border-bottom','1px solid #734188');
		//$('.wrapper').css('padding-top', $('.header').height());
	}else{
		$('.header').removeClass('fixed');
		//$('.wrapper').css('padding-top', 0);
		$('.header').css('border-bottom',0);
	}
	}
	
});

$(document).ready(function() { 
	if($(document).width() < 800) {
		$('.mobile_menu').appendTo('<div class="arrow_header"></div>');
	}
 });