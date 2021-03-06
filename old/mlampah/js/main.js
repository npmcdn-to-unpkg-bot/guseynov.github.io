var dest_carousel = document.getElementById("dest_carousel");
var package_carousel = document.getElementById("package_carousel");

var dest_carousel = new Hammer.Manager(dest_carousel);
var package_carousel = new Hammer.Manager(package_carousel);

dest_carousel.add(new Hammer.Swipe({ threshold:(0.05*$(window).width())}));
package_carousel.add(new Hammer.Swipe({ threshold:(0.05*$(window).width())}));

function position () {
	var pos = $('.slick-active button').offset().left+12-($('.box').width()*0.6);
	$('.box').offset({left:pos});
};

function slide1r () {
	$('.slide-1').addClass('slide-left').removeClass('slide-active').removeClass('slide-right');

	$('.slide-2').removeClass('slide-left').addClass('slide-active').removeClass('slide-right');

	$('.slide-3').removeClass('slide-left').removeClass('slide-active').addClass('slide-right');
}

function slide2r () {
	$('.slide-1').removeClass('slide-left').removeClass('slide-active').addClass('slide-right');

	$('.slide-2').addClass('slide-left').removeClass('slide-active').removeClass('slide-right');

	$('.slide-3').removeClass('slide-left').addClass('slide-active').removeClass('slide-right');
}

function slide3r () {
	$('.slide-1').removeClass('slide-left').addClass('slide-active').removeClass('slide-right');

	$('.slide-2').removeClass('slide-left').removeClass('slide-active').addClass('slide-right');

	$('.slide-3').addClass('slide-left').removeClass('slide-active').removeClass('slide-right');
}
/**/
function slide1l () {
	$('.slide-1').removeClass('slide-left').removeClass('slide-active').addClass('slide-right');

	$('.slide-2').addClass('slide-left').removeClass('slide-active').removeClass('slide-right');

	$('.slide-3').removeClass('slide-left').addClass('slide-active').removeClass('slide-right');
}

function slide2l () {
	$('.slide-1').removeClass('slide-left').addClass('slide-active').removeClass('slide-right');

	$('.slide-2').removeClass('slide-left').removeClass('slide-active').addClass('slide-right');

	$('.slide-3').addClass('slide-left').removeClass('slide-active').removeClass('slide-right');
}

function slide3l () {
	$('.slide-1').addClass('slide-left').removeClass('slide-active').removeClass('slide-right');

	$('.slide-2').removeClass('slide-left').addClass('slide-active').removeClass('slide-right');

	$('.slide-3').removeClass('slide-left').removeClass('slide-active').addClass('slide-right');
}

$(document).ready(function(){
	$('.dest_carousel').slick({
		dots:true,
		fade:true,
		initialSlide:3,
		touchThreshold:20,
		prevArrow:$('.dest_carousel-controls .prev'),
		nextArrow:$('.dest_carousel-controls .next'),
		accessibility:false,
		swipe:false
	});
	$('.dest_carousel').slickRemove(6);


	position();

	$('.dest_carousel-controls button').click(
		function(){
			setTimeout(function(){
				position();
				$('.box').html('lorem ipsum #'+($('.dest_carousel').slickCurrentSlide()+1));
			},10)
		}
		);


	$('.dest_carousel .slick-dots li').click(
		function(){
			setTimeout(function(){
				position();
				$('.box').html('lorem ipsum #'+($('.dest_carousel').slickCurrentSlide()+1));
			},10)
		});



	dest_carousel.on("swiperight", function() {
		$('.dest_carousel').slickPrev();
		setTimeout(function(){
			position();
			$('.box').html('lorem ipsum #'+($('.dest_carousel').slickCurrentSlide()+1));
		},10)
	});

	dest_carousel.on("swipeleft", function() {
		$('.dest_carousel').slickNext();
		setTimeout(function(){
			position();
			$('.box').html('lorem ipsum #'+($('.dest_carousel').slickCurrentSlide()+1));
		},10)
	});




	$('.package_carousel .controls button:last-child').click(
		function(){
			switch ((function(){var array = $('.slide-active').attr('class').split(/\s+/); return array.join()})())
			{
				case 'slide,slide-1,slide-active':
				slide1r();
				break;

				case 'slide,slide-2,slide-active':
				slide2r();
				break;

				case 'slide,slide-3,slide-active':
				slide3r();
				break;
			}
		});

	$('.package_carousel .controls button:first-child').click(
		function(){
			switch ((function(){var array = $('.slide-active').attr('class').split(/\s+/); return array.join()})())
			{
				case 'slide,slide-1,slide-active':
				slide1l();
				break;

				case 'slide,slide-2,slide-active':
				slide2l();
				break;

				case 'slide,slide-3,slide-active':
				slide3l();
				break;
			}
		});

	package_carousel.on("swiperight", function() {
		switch ((function(){var array = $('.slide-active').attr('class').split(/\s+/); return array.join()})())
		{
			case 'slide,slide-1,slide-active':
			slide1l();
			break;

			case 'slide,slide-2,slide-active':
			slide2l();
			break;

			case 'slide,slide-3,slide-active':
			slide3l();
			break;
		}
	});

	package_carousel.on("swipeleft", function() {
		switch ((function(){var array = $('.slide-active').attr('class').split(/\s+/); return array.join()})())
		{
			case 'slide,slide-1,slide-active':
			slide1r();
			break;

			case 'slide,slide-2,slide-active':
			slide2r();
			break;

			case 'slide,slide-3,slide-active':
			slide3r();
			break;
		}
	});


});

$(window).resize(function(){
	position();
});





