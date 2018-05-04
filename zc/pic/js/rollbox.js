// JavaScript Document
$(function(){
	/* 无缝滚动 */
	var marqueeList = ['#gd_box1', '#gd_box2', '#gd_box3'];
	var $Marquee = function(selector, speed, direction){
		var $box = $(selector),
			$one = $box.find('.demo1'),
			$two = $box.find('.demo2'),
			speed = speed || 50,
            direction = direction || 'left';
		if($box.length < 1){
			return;
		}
		$two.html($one.html());
		var gun = function(){
            if (direction == 'left')
            {
            			if($two.width() - $box.scrollLeft() <= 0){
                            $box.scrollLeft($box.scrollLeft() - $one.width());
                        } else {
                            $box.scrollLeft($box.scrollLeft() + 1);
                        }
            } else if (direction == 'top')
            {
            			if($two.height() - $box.scrollTop() <= 0){
                            $box.scrollTop($box.scrollTop() - $one.height());
                        } else {
                            $box.scrollTop($box.scrollTop() + 1);
                        }
            }
		};
		var intervalId = setInterval(gun, speed);
		$box.mouseover(function(){clearInterval(intervalId)});
		$box.mouseout(function(){intervalId = setInterval(gun, speed)});
	};
	$.each(marqueeList, function(k, v){
		new $Marquee(v, 50);
	});

    new $Marquee('#scrollDiv', 50, 'top');
})


