<?php $title = "mainImage ver Slide"; ?>

<!DOCTYPE html>
<html lang="ja">
<head>
<meta charset="utf-8">
<title><?php echo $title ?></title>
<link rel="stylesheet" href="/common/css/html5reset.css">
<link rel="stylesheet" href="/common/css/style.css">
<script type="text/javascript" src="/common/js/jquery.js"></script>
<script type="text/javascript">
$(function() {
	$('#mainImage').imageslide({
		second:3000,
		speed:800
	});
});

$.fn.imageslide = function(opts) {
	opts = $.extend({
		imagewide: 800,
		second: 5000,	//second
		speed: 1200		//animation speed
	}, opts);

	//initialize
	var $list = $('li',this)
	var $ul = $('ul',this);
	$(':last-child',$list).addClass('active');
	var listNum = $list.size();
	$ul.css({width:listNum * opts.imagewide});
	var bullet = '';
	var num = 1;
	var timerID;
	fade();

	//bullet
	for(var c=1; c<=listNum; c++){
		bullet = bullet + '<span>' + c + '</span>';
	}
	$(this).append('<div class="bullet">' + bullet + '</div>');
	$('span:first-child','.bullet').addClass('active');

	//bullet click
	$('span','.bullet').click(function() {
		var bulletNum = $(this).index() + 1;
		clearTimeout(timerID);
		fade(bulletNum);
	})

	//fade animation
	function fade(bulletNum) {
		if (bulletNum) {
			if (bulletNum == 1) {
				num = 1;
			} else {
				num = bulletNum;
			}
		}
		var thisSelector = 'li.active';
		var nextSelector = 'li:nth-child(' + num + ')';
		var current = 'span:nth-child(' + num + ')';
		//$('#test').text('next:' + nextSelector + ' bulletNum:' + bulletNum);//test
		$ul.animate({marginLeft: -opts.imagewide*(num - 1)},opts.speed);
		$(thisSelector).removeClass('active');
		$(nextSelector).addClass('active');
		$('span.active','.bullet').removeClass('active');
		$(current,'.bullet').addClass('active');
		num = $('li.active').index() + 2;
		if (num == (listNum + 1)){
			num = 1;
		}
		timerID = setTimeout(function(){fade()},opts.second);
	}
}
</script>
<style>
#container {
	margin:100px auto;
	width:900px;
}
#test {
    position: fixed;
    display: block;
    top: 0;
    right: 30px;
    line-height: 50px;
    background: #EEE;
    text-align: center;
}

/*----------*/
#mainImage {
	margin:0 auto;
	width:800px;
	overflow: hidden;
	position: relative;
}
#mainImage ul {
	position: relative;
	height: 300px;
}
#mainImage li {
	float: left;
}
.bullet {
	margin-top:10px;
	text-align: right;
	position: absolute;
	bottom: 10px;
	right: 10px;
}
.bullet span {
	display: inline-block;
	margin-left:5px;
	padding: 3px 8px;
	background: #EEE;
	border: solid 1px #CCC;
	cursor: pointer;
}
.bullet span.active {
	background: #555;
	color: #FFF;
}
</style>
</head>
<body>
<span id="test"></span>
<div id="container">




<div id="mainImage">
<ul>
<li><img src="images/fish.jpg" alt=""></li>
<li><img src="images/candle.jpg" alt=""></li>
<li><img src="images/poppy.jpg" alt=""></li>
<li><img src="images/rose.jpg" alt=""></li>
</ul>
</div>




</div>
</body>
</html>