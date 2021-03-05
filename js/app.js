$(function() {
	let header = $("#header");
	let homeH = $("#homeH").innerHeight();
	let scrollOffset = $(window).scrollTop();


/*Fixed Header*/
	checkScroll(scrollOffset);

	$(window).on("scroll", function() {
		scrollOffset = $(this).scrollTop();

		checkScroll(scrollOffset);
	})

	function checkScroll(scrollOffset) {
		if( scrollOffset >= homeH ) {
			header.addClass("fixed");
		} else {
			header.removeClass("fixed");
		}
	};

	/*Smooth scroll*/
	$("[data-scroll]").on("click", function(event) {
		event.preventDefault();

		let $this = $(this),
			blockID = $this.data('scroll'),
			blockOffset = $(blockID).offset().top;

			$("#nav a").removeClass("active");
			$this.addClass("active");

			$("#nav").removeClass("active");
			$("#navToggle").removeClass("active");

		$("html, body").animate ({
			scrollTop: blockOffset - 65
		}, 700);

	});


	/*Menu nav toggle*/
	$("#navToggle").on("click", function(event) {
		event.preventDefault();

		$(this).toggleClass("active");
		$("#nav").toggleClass("active");
	});

	/*Target*/
	let btn_monthly = $("#btn_monthly");
	let monthly = $("#monthly");
	let btn_annually = $("#btn_annually");
	let annually = $("#annually");



	btn_monthly.on("click", function(event) {
		event.preventDefault();

		btn_monthly.toggleClass("active");

		if (btn_monthly.hasClass("active")) {
			monthly.addClass("active");
		} else {
			monthly.removeClass("active");
		};

		btn_annually.removeClass("active");

		if (btn_annually.hasClass("active")) {
			annually.addClass("active");
		} else {
			annually.removeClass("active");
		}
	});

	btn_annually.on("click", function(event) {
		event.preventDefault();

		btn_annually.toggleClass("active");

		if (btn_annually.hasClass("active")) {
			annually.addClass("active");
		} else {
			annually.removeClass("active");
		}

		btn_monthly.removeClass("active");

		if (btn_monthly.hasClass("active")) {
			monthly.addClass("active");
		} else {
			monthly.removeClass("active");
		};
	});




	/*Collapse*/
	$("[data-collapse]").on("click", function(event) {
		event.preventDefault();

		let $this = $(this),
			blockID = $this.data('collapse');

			$this.toggleClass("active");
	});

	/*Slider*/
	$('.slider').slick({
		infinite: true,
		fade: false,
		slidesToShow: 1,
		slidesToScroll: 1,
		prevArrow: $('.arrow-prev'),
		nextArrow: $('.arrow-next')
	})
})


/* Swipe Carousel */

$(".owl-carousel").owlCarousel({ 
	items:5,
	loop: true,
	nav: true,
	dots: true,
	navText: ['<i class="fas fa-chevron-left"></i>','<i class="fas fa-chevron-right"></i>'],
	autoplay: true,
	autoplayTimeout: 5000,

	responsiveClass:true,
	responsive:{
		0:{
			items:1,
			nav:false
		},
		600:{
			items:3,
			nav:false
		},
		1000:{
			items:5,
			nav:false
			
		}
	}
});