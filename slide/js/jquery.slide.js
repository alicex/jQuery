$.fn.slide = function(opts) {
	opts = $.extend  ({
		color:'default',
		speed:800,
		moving:"swing",
		navLabel:'Navigation'
	},opts);

	//---initialize
	var slides = $(this);
	slides.css({height:$(window).height()});
	$('body').addClass(opts.color).prepend('<nav></nav>');
	var $nav = $('nav');
	var sp = opts.speed;
	var mv = opts.moving;
	var nl = opts.navLabel;
	var slideNum = $('.slide').length;
	var num = 1;
	var nowSlide;

	//---slides each
	var posArray = [];
	var navList = '';
	var c = 0;
	$(slides).each(function() {
		c = c + 1;
		posArray.push($(this).offset().top);
		navList = navList + '<li><a href="#slide' + c + '">' + $('h1',this).text() + '</a></li>';
	});

	//nav
	$nav.append('<h1>' + nl + '</h1><ul>' + navList + '</ul>');
	var posMin = posArray[0];
	var posMax = posArray[1];
	var posMMin = posArray[0];
	var posC = 1;

	//---keydown event
	$('html').keydown(function(e) {
		var nextPos;
		switch(e.which) {
			case 38://[↑] up
				if (num != 1) {
					num = num - 1;
				}
				sliding();
				break;
			case 40://[↓] down
				if (num != slideNum) {
					num = num + 1;
				}
				sliding();
				break;
			case 39://[→] nav show
				$nav.animate({right:0},sp).addClass('open');
				break;
			case 37://[←] nav hide
				$nav.animate({right:'-250px'},sp).removeClass('open');
				break;

			case 97://[1] tenkey
				num = 1;
				tenkey(num);
				break;
			case 98://[2] tenkey
				num = 2;
				tenkey(num);
				break;
			case 99://[3] tenkey
				num = 3;
				tenkey(num);
				break;
			case 100://[4] tenkey
				num = 4;
				tenkey(num);
				break;
			case 101://[5] tenkey
				num = 5;
				tenkey(num);
				break;
			case 102://[6] tenkey
				num = 6;
				tenkey(num);
				break;
			case 103://[7] tenkey
				num = 7;
				tenkey(num);
				break;
			case 104://[8] tenkey
				num = 8;
				tenkey(num);
				break;
			case 105://[9] tenkey
				num = 8;
				tenkey(num);
				break;
		}
	});

	//---tenkey
	function tenkey(num) {
		if ($nav.hasClass('open') && num <= slideNum) {
			sliding();
		}
	}

	//---nav click
	$('nav a').on('click',function() {
		nowSlide = $(this).attr('href');
		num = $(this).parent('li').index() + 1;
		sliding(nowSlide);
		return false;
	});

	//---window scroll
	$(window).on('scroll',function() {
		//scroll down
		if($(window).scrollTop() >= posMax) {
			if (slideNum != posC) {
				posC = posC + 1;
				num = posC;
			}
			nowSlide = '#slide' + posC;
			location.hash = nowSlide;
		}
		//scroll up
		if($(window).scrollTop() < posMin) {
				nowSlide = '#slide' + posC;
			if (location.hash != nowSlide) {
				location.hash = nowSlide;
			}
			if (0 != posC) {
				posC = posC - 1;
			}
		}
		posMin = posArray[posC - 1];
		posMax = posArray[posC];
		//top
		if($(window).scrollTop() == posMMin) {
			nowSlide = '#slide' + posC;
			location.hash = nowSlide;
			num = 1;
		}
	});

	//---sliding function
	function sliding (nowSlide) {
		$nav.animate({right:'-250px'},sp).removeClass('open');
		if (nowSlide == undefined) {
			nowSlide = '#slide' + num;
		}
		nextPos = $(nowSlide).offset().top;
		$("html, body").animate({scrollTop:nextPos}, sp, mv, function(){
			location.hash = nowSlide;
		});
		//nav
		$('li',$nav).removeClass('on');
		sel = 'ul li:nth-child(' + num + ')';
		$(sel,$nav).addClass('on');
	}
}